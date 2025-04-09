'use client';

import { useState } from 'react';
import Image from 'next/image';
import { generatePlaceholderSVG, placeholderTypes } from '@/utils/image-utils';

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  placeholder?: keyof typeof placeholderTypes;
  fallbackText?: string;
  priority?: boolean;
  sizes?: string;
}

export default function ImageWithFallback({
  src,
  alt,
  width,
  height,
  className = '',
  placeholder = 'generic',
  fallbackText,
  priority = false,
  sizes,
  ...props
}: ImageWithFallbackProps) {
  const [error, setError] = useState(false);
  
  const placeholderText = fallbackText || placeholderTypes[placeholder];
  
  return error ? (
    <div 
      className={`bg-accent flex items-center justify-center text-primary ${className}`}
      style={{
        width: width || '100%',
        height: height || 'auto',
        backgroundImage: `url('${generatePlaceholderSVG(width, height, placeholderText, '#E8F5E9', '#0F5132')}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      role="img"
      aria-label={alt}
    >
      {/* The div itself is the placeholder with the generated SVG as background */}
    </div>
  ) : (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={priority}
      sizes={sizes}
      onError={() => setError(true)}
      {...props}
    />
  );
}