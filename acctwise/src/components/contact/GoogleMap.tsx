'use client';

import { useEffect, useRef } from 'react';
import { loadGoogleMapsScript, officeLocation } from '@/lib/maps/google-maps';

export default function GoogleMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Initialize map when the component mounts
    const initializeMap = () => {
      if (!mapRef.current) return;
      
      const map = new window.google.maps.Map(mapRef.current, {
        center: officeLocation.center,
        zoom: officeLocation.zoom,
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: true,
        zoomControl: true,
        styles: [
          {
            "featureType": "administrative",
            "elementType": "labels.text.fill",
            "stylers": [{"color": "#444444"}]
          },
          {
            "featureType": "landscape",
            "elementType": "all",
            "stylers": [{"color": "#f2f2f2"}]
          },
          {
            "featureType": "poi",
            "elementType": "all",
            "stylers": [{"visibility": "off"}]
          },
          {
            "featureType": "road",
            "elementType": "all",
            "stylers": [{"saturation": -100}, {"lightness": 45}]
          },
          {
            "featureType": "road.highway",
            "elementType": "all",
            "stylers": [{"visibility": "simplified"}]
          },
          {
            "featureType": "road.arterial",
            "elementType": "labels.icon",
            "stylers": [{"visibility": "off"}]
          },
          {
            "featureType": "transit",
            "elementType": "all",
            "stylers": [{"visibility": "off"}]
          },
          {
            "featureType": "water",
            "elementType": "all",
            "stylers": [{"color": "#E8F5E9"}, {"visibility": "on"}]
          }
        ]
      });
      
      // Add marker for office location
      const marker = new window.google.maps.Marker({
        position: officeLocation.markerPosition,
        map: map,
        title: officeLocation.markerTitle,
        animation: window.google.maps.Animation.DROP,
        icon: {
          path: window.google.maps.SymbolPath.CIRCLE,
          fillColor: '#0F5132',
          fillOpacity: 1,
          strokeColor: '#FFFFFF',
          strokeWeight: 2,
          scale: 10,
        }
      });
      
      // Add info window with office details
      const infoWindow = new window.google.maps.InfoWindow({
        content: `
          <div style="padding: 8px; max-width: 200px;">
            <h3 style="font-weight: bold; margin-bottom: 4px;">AcctWise</h3>
            <p style="margin: 0; font-size: 14px;">Avenida de Moscavide, 29A</p>
            <p style="margin: 0; font-size: 14px;">1885-062 Moscavide</p>
            <p style="margin: 0; font-size: 14px;">Lisboa, Portugal</p>
            <p style="margin: 4px 0 0; font-size: 14px;">
              <a href="tel:+351211123456" style="color: #0F5132; text-decoration: none; font-weight: bold;">
                +351 211 123 456
              </a>
            </p>
            <a 
              href="https://maps.google.com/maps?ll=${officeLocation.markerPosition.lat},${officeLocation.markerPosition.lng}&z=16&t=m&hl=pt-PT&gl=PT&mapclient=embed&q=AcctWise+Moscavide" 
              target="_blank"
              style="display: block; margin-top: 8px; color: #0F5132; text-decoration: none; font-weight: bold; font-size: 14px;"
            >
              Ver no Google Maps
            </a>
          </div>
        `
      });
      
      // Open info window when marker is clicked
      marker.addListener('click', () => {
        infoWindow.open(map, marker);
      });
      
      // Open info window by default
      infoWindow.open(map, marker);
    };
    
    // Load Google Maps script and initialize map
    loadGoogleMapsScript(initializeMap);
    
    // No cleanup function that removes the script
    // This prevents the script from being loaded multiple times
    return () => {
      // Only remove global callback if it exists
      if (window.initMap) {
        delete window.initMap;
      }
      // We don't remove the script element anymore
    };
  }, []);
  
  return (
    <div 
      ref={mapRef}
      id="google-map-container"
      className="w-full h-96 rounded-lg shadow-lg border border-gray-200 hover-lift"
      aria-label="Mapa da localização do escritório da AcctWise em Moscavide"
    />
  );
}