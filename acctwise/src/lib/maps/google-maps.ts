// Google Maps configuration and utilities
// Replace with actual API key in the .env.local file

export interface MapConfig {
  center: {
    lat: number;
    lng: number;
  };
  zoom: number;
  markerPosition: {
    lat: number;
    lng: number;
  };
  markerTitle: string;
  apiKey: string;
}

// Office location coordinates for AcctWise in Moscavide, Portugal
export const officeLocation: MapConfig = {
  center: {
    lat: 38.7799, // Moscavide, Lisboa coordinates
    lng: -9.1064,
  },
  zoom: 16,
  markerPosition: {
    lat: 38.7799,
    lng: -9.1064,
  },
  markerTitle: 'AcctWise - Contabilidade, Manutenção e Consultoria, Lda.',
  apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '',
};

// Helper function to load Google Maps script dynamically
export const loadGoogleMapsScript = (callback: () => void) => {
  if (typeof window === 'undefined') return;
  
  // If script is already loaded
  if (window.google && window.google.maps) {
    callback();
    return;
  }
  
  // Check if script is already being loaded
  const existingScript = document.querySelector('script[src*="maps.googleapis.com/maps/api"]');
  if (existingScript) {
    // If script is already in the DOM but not fully loaded yet, wait for it
    window.initMap = callback;
    return;
  }

  // Check if API key is available
  if (!officeLocation.apiKey) {
    console.error('Google Maps API key is missing. Please add NEXT_PUBLIC_GOOGLE_MAPS_API_KEY to your environment variables.');
    // Create a fallback div to display error message instead of map
    if (document.getElementById('google-map-container')) {
      const mapContainer = document.getElementById('google-map-container');
      if (mapContainer) {
        mapContainer.innerHTML = `
          <div style="display: flex; align-items: center; justify-content: center; height: 100%; 
                      background-color: #f5f5f5; border-radius: 8px; padding: 20px; text-align: center; 
                      font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', 'SF Pro Display', system-ui, sans-serif;">
            <div>
              <p style="font-weight: bold; color: #000000;">Google Maps não pode ser carregado</p>
              <p style="color: #000000;">Chave de API não configurada. Por favor contacte o administrador.</p>
            </div>
          </div>
        `;
      }
    }
    return;
  }
  
  // Define callback for when Google Maps script loads
  window.initMap = callback;
  
  // Create the script element
  const script = document.createElement('script');
  script.src = `https://maps.googleapis.com/maps/api/js?key=${officeLocation.apiKey}&callback=initMap`;
  script.async = true;
  script.defer = true;
  script.id = 'google-maps-script'; // Add ID for easier reference
  
  document.head.appendChild(script);
};

// Declare global Google Maps callback
declare global {
  interface Window {
    initMap: () => void;
    google: any;
  }
}