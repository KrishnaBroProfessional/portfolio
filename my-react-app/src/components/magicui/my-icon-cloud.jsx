import React, { useEffect, useRef } from 'react';

const IconCloud = ({ images = [] }) => {
  const containerRef = useRef(null);
  const cloudRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current || images.length === 0) return;

    const container = containerRef.current;
    const radius = 250; // Increased from 150 to 250 for bigger cloud
    const centerX = container.offsetWidth / 2;
    const centerY = container.offsetHeight / 2;

    // Clear previous icons
    if (cloudRef.current) {
      cloudRef.current.innerHTML = '';
    }

    // Create icon elements
    images.forEach((image, index) => {
      const icon = document.createElement('div');
      icon.className = 'absolute transition-all duration-500 hover:scale-125 cursor-pointer';
      icon.style.transformStyle = 'preserve-3d';
      
      const img = document.createElement('img');
      img.src = image.logo;
      img.alt = image.name;
      img.className = 'w-16 h-16 object-contain drop-shadow-lg'; // Increased from w-12 h-12 to w-16 h-16
      img.onerror = () => {
        img.src = 'https://cdn-icons-png.flaticon.com/512/1126/1126012.png';
      };
      
      const label = document.createElement('div');
      label.textContent = image.name;
      label.className = 'text-xs text-white text-center mt-1 opacity-0 hover:opacity-100 transition-opacity duration-300';
      
      icon.appendChild(img);
      icon.appendChild(label);
      
      if (cloudRef.current) {
        cloudRef.current.appendChild(icon);
      }
    });

    // Animate icons in 3D space with random cloud rotation
    let animationId;
    let time = 0;
    let cloudRotationX = 0;
    let cloudRotationY = 0;
    let cloudRotationZ = 0;

    const animate = () => {
      time += 0.003; // Reduced from 0.005 to 0.003 for slower rotation
      
      // Add random 3D rotation to the entire cloud
      cloudRotationX += 0.002 + Math.sin(time * 0.7) * 0.001;
      cloudRotationY += 0.003 + Math.cos(time * 0.5) * 0.002;
      cloudRotationZ += 0.001 + Math.sin(time * 1.2) * 0.0005;
      
      // Apply 3D rotation to the cloud container
      if (cloudRef.current) {
        cloudRef.current.style.transform = `
          rotateX(${cloudRotationX * 57.3}deg) 
          rotateY(${cloudRotationY * 57.3}deg) 
          rotateZ(${cloudRotationZ * 57.3}deg)
        `;
        cloudRef.current.style.transformStyle = 'preserve-3d';
      }
      
      const icons = cloudRef.current?.children || [];
      Array.from(icons).forEach((icon, index) => {
        // Proper spherical distribution using Fibonacci sphere algorithm
        const i = index + 0.5;
        const theta = Math.acos(1 - 2 * i / images.length); // Polar angle
        const phi = Math.PI * (1 + Math.sqrt(5)) * i + time; // Azimuthal angle with rotation
        
        // Convert spherical coordinates to Cartesian for true 3D sphere
        const sphereX = Math.sin(theta) * Math.cos(phi);
        const sphereY = Math.sin(theta) * Math.sin(phi);
        const sphereZ = Math.cos(theta);
        
        // Add some randomness to radius for natural distribution
        const radiusVariation = radius + (Math.sin(index * 0.3) * 20);
        
        // Calculate actual 3D positions
        const x = centerX + radiusVariation * sphereX;
        const y = centerY + radiusVariation * sphereY;
        const z = radiusVariation * sphereZ;
        
        // Calculate scale and opacity based on z-depth (distance from viewer)
        const normalizedZ = (z + radiusVariation) / (2 * radiusVariation);
        const scale = 0.4 + 0.6 * normalizedZ; // Better scale range for depth perception
        const opacity = 0.3 + 0.7 * normalizedZ; // Better opacity range
        
        // Add individual icon rotation for more dynamic effect
        const iconRotationY = time * 30 + (index * 45);
        const iconRotationX = time * 20 + (index * 30);
        
        icon.style.left = `${x - 32}px`; // Adjusted for larger icons (32px instead of 24px)
        icon.style.top = `${y - 32}px`;
        icon.style.transform = `
          scale(${scale}) 
          rotateX(${iconRotationX}deg)
          rotateY(${iconRotationY}deg)
          translateZ(${z * 0.2}px)
        `; // Enhanced 3D rotation and z-translation
        icon.style.opacity = opacity;
        icon.style.zIndex = Math.floor(normalizedZ * 1000); // Better z-index for layering
        icon.style.transformStyle = 'preserve-3d';
      });
      
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [images]);

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-[600px] overflow-visible" // Changed to overflow-visible for better 3D effect
      style={{ 
        perspective: '1500px', // Increased perspective for better 3D depth
        perspectiveOrigin: 'center center',
        transformStyle: 'preserve-3d'
      }}
    >
      <div 
        ref={cloudRef} 
        className="absolute inset-0" 
        style={{ 
          transformStyle: 'preserve-3d',
          transformOrigin: 'center center'
        }} 
      />
    </div>
  );
};

export { IconCloud };
