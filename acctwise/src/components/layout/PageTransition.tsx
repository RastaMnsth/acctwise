'use client';

import { ReactNode, useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

interface PageTransitionProps {
  children: ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(false);
  const [content, setContent] = useState(children);

  // Handle page transitions on route change
  useEffect(() => {
    // Set up animation sequence
    setIsVisible(false); // Start transition out
    
    // After transition out, update content
    const timeoutId = setTimeout(() => {
      setContent(children);
      window.scrollTo(0, 0); // Scroll to top on page change
      setIsVisible(true); // Start transition in
    }, 300); // Match transition duration
    
    return () => clearTimeout(timeoutId);
  }, [pathname, children]);
  
  // Initial page load animation
  useEffect(() => {
    // Delay initial fade in slightly for better UX
    const timeoutId = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div
      className={`transition-all duration-300 ease-in-out ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-4'
      }`}
    >
      {content}
    </div>
  );
}