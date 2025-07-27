import React, { useState, useRef, useEffect } from 'react';
import HowIStarted from './HowIStarted';
import OtherProjects from './OtherProjects';
import Skills from './Skills';
import ClientProjects from './ClientProjects';
import Achievements from './Achievements';
import Appreciations from './Appreciations';
import Now from './Now';
import Future from './Future';
import Footer from './Footer';
import { Confetti } from './magicui/confetti';

const Home = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const confettiRef = useRef(null);

  // Continuous confetti effect for center circle
  useEffect(() => {
    if (currentPage === 'home' && confettiRef.current) {
      const triggerConfetti = () => {
        // Create multiple confetti bursts from center only
        const numberOfBursts = 4; // Multiple directional bursts from center
        
        for (let i = 0; i < numberOfBursts; i++) {
          setTimeout(() => {
            // Always originate from center (celebrating circle)
            const centerX = 0.5; // Fixed center X
            const centerY = 0.5; // Fixed center Y
            
            // Generate random angle for burst direction
            const burstAngle = (Math.random() * 360); // Random direction in degrees
            
            confettiRef.current.fire({
              particleCount: 120, // Good particle count for center bursts
              spread: 60 + Math.random() * 40, // Focused spread (60-100 degrees)
              angle: burstAngle, // Random direction from center
              origin: { x: centerX, y: centerY }, // Always from center
              colors: [
                '#ff0000', '#ff4500', '#ffd700', '#32cd32', 
                '#00ced1', '#4169e1', '#9400d3', '#ff1493',
                '#ff6347', '#ffa500', '#ffff00', '#00ff00',
                '#00ffff', '#0080ff', '#8a2be2', '#ff69b4'
              ],
              startVelocity: 60 + Math.random() * 40, // High velocity (60-100) to reach edges
              gravity: 0.4 + Math.random() * 0.4, // Varied gravity (0.4-0.8)
              drift: -0.4 + Math.random() * 0.8, // Wide drift (-0.4 to 0.4)
              ticks: 500 + Math.random() * 300, // Long duration (500-800 ticks)
              scalar: 1.1 + Math.random() * 0.4, // Size variation (1.1-1.5)
              shapes: ['circle', 'square'], // Mix of shapes for variety
              decay: 0.94 // Slower decay for longer visibility
            });
          }, i * 150); // Stagger bursts by 150ms for rapid succession
        }
      };

      // Initial confetti
      triggerConfetti();
      
      // Continuous confetti every 4 seconds for celebration
      const interval = setInterval(triggerConfetti, 5000);
      
      return () => clearInterval(interval);
    }
  }, [currentPage]);

  // Handle navigation to different pages
  const handleCircleClick = (circleId) => {
    if (circleId === 'started') {
      setCurrentPage('howIStarted');
    } else if (circleId === 'skills') {
      setCurrentPage('skills');
    } else if (circleId === 'projects') {
      setCurrentPage('clientProjects');
    } else if (circleId === 'achievements') {
      setCurrentPage('achievements');
    } else if (circleId === 'appreciations') {
      setCurrentPage('appreciations');
    } else if (circleId === 'other') {
      setCurrentPage('otherProjects');
    } else if (circleId === 'now') {
      setCurrentPage('now');
    } else if (circleId === 'future') {
      setCurrentPage('future');
    }
    // Add more navigation logic for other circles here
  };

  // Handle navigation from subpages
  const handleNavigate = (pageName) => {
    setCurrentPage(pageName);
  };

  // Handle going back to home
  const handleBackToHome = () => {
    setCurrentPage('home');
  };

  // Handle going back to previous page (for nested navigation)
  const handleBackToPrevious = () => {
    if (currentPage === 'otherProjects') {
      setCurrentPage('howIStarted');
    } else {
      setCurrentPage('home');
    }
  };

  // If we're on a different page, render that page
  if (currentPage === 'howIStarted') {
    return <HowIStarted onBack={handleBackToHome} onNavigate={handleNavigate} />;
  }

  if (currentPage === 'skills') {
    return <Skills onBack={handleBackToHome} />;
  }

  if (currentPage === 'clientProjects') {
    return <ClientProjects onBack={handleBackToHome} />;
  }

  if (currentPage === 'achievements') {
    return <Achievements onBack={handleBackToHome} />;
  }

  if (currentPage === 'appreciations') {
    return <Appreciations onBack={handleBackToHome} />;
  }

  if (currentPage === 'now') {
    return <Now onBack={handleBackToHome} />;
  }

  if (currentPage === 'future') {
    return <Future onBack={handleBackToHome} />;
  }

  if (currentPage === 'otherProjects') {
    return <OtherProjects onBack={handleBackToPrevious} />;
  }

  const circles = [
    { id: 'started', text: 'How I Started', size: 'w-48 h-48', bgColor: 'bg-green-500', radius: 400, angle: 0 },
    { id: 'skills', text: 'Skills', size: 'w-40 h-40', bgColor: 'bg-purple-500', radius: 360, angle: 45 },
    { id: 'projects', text: 'Client Projects', size: 'w-56 h-56', bgColor: 'bg-orange-500', radius: 380, angle: 90 },
    { id: 'achievements', text: 'Achievements', size: 'w-32 h-32', bgColor: 'bg-red-500', radius: 320, angle: 135 },
    { id: 'appreciations', text: 'Appreciations', size: 'w-64 h-64', bgColor: 'bg-yellow-500', radius: 500, angle: 180 },
    { id: 'other', text: 'Other Projects', size: 'w-40 h-40', bgColor: 'bg-pink-500', radius: 370, angle: 225 },
    { id: 'now', text: 'Now', size: 'w-28 h-28', bgColor: 'bg-indigo-500', radius: 300, angle: 270 },
    { id: 'future', text: 'Future', size: 'w-48 h-48', bgColor: 'bg-teal-500', radius: 420, angle: 315 },
  ];

  return (
    <div className="min-h-screen w-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative overflow-hidden flex flex-col">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      
      {/* Full-screen confetti canvas for continuous celebration effect */}
      <Confetti
        ref={confettiRef}
        className="fixed inset-0 w-full h-full pointer-events-none z-10"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          pointerEvents: 'none',
          zIndex: 10
        }}
        manualstart={true}
      />
      
      {/* Floating particles for visual appeal */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-300 rounded-full opacity-40 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>

      {/* Main container - flexible content area */}
      <div className="flex-1 flex items-center justify-center relative">
        
        {/* Center circle - Celebrating 3 years at UHG */}
        <div className="w-80 h-80 md:w-96 md:h-96 rounded-full flex items-center justify-center relative z-20 shadow-2xl cursor-pointer transform transition-all duration-300 hover:scale-105"
             style={{
               background: 'linear-gradient(135deg, #1e40af, #3b82f6, #60a5fa)',
               boxShadow: '0 0 50px rgba(59, 130, 246, 0.3)'
             }}>
          <span className="text-white font-bold text-2xl md:text-3xl text-center px-4 md:px-6 leading-tight relative z-10">
            Celebrating<br />3 years<br />at UHG
          </span>
        </div>

        {/* Surrounding circles in Wipro-style arrangement */}
        {circles.map((circle) => {
          const radian = (circle.angle * Math.PI) / 180;
          const x = Math.cos(radian) * circle.radius;
          const y = Math.sin(radian) * circle.radius;
          
          return (
            <div
              key={circle.id}
              className={`${circle.size} ${circle.bgColor} rounded-full flex items-center justify-center absolute cursor-pointer transform transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:z-30 shadow-lg`}
              style={{
                left: `calc(50% + ${x}px)`,
                top: `calc(50% + ${y}px)`,
                transform: `translate(-50%, -50%)`,
                boxShadow: `0 0 20px ${circle.bgColor.replace('bg-', 'rgba(').replace('-500', ', 0.3)')}`
              }}
              onClick={() => handleCircleClick(circle.id)}
            >
              <span className={`text-white font-semibold text-center px-3 leading-tight ${
                circle.size.includes('w-64') ? 'text-lg md:text-xl' :
                circle.size.includes('w-56') ? 'text-base md:text-lg' :
                circle.size.includes('w-48') ? 'text-sm md:text-base' :
                circle.size.includes('w-40') ? 'text-sm' :
                circle.size.includes('w-32') ? 'text-xs md:text-sm' :
                'text-xs'
              }`}>
                {circle.text}
              </span>
            </div>
          );
        })}

        {/* Connecting lines for Wipro-style interconnected look */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.4"/>
              <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.6"/>
              <stop offset="100%" stopColor="#1e40af" stopOpacity="0.4"/>
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          {/* Connect center to all outer circles */}
          {circles.map((circle) => {
            const radian = (circle.angle * Math.PI) / 180;
            const x = Math.cos(radian) * (circle.radius * 0.7);
            const y = Math.sin(radian) * (circle.radius * 0.7);
            
            return (
              <line
                key={`line-${circle.id}`}
                x1="50%"
                y1="50%"
                x2={`calc(50% + ${x}px)`}
                y2={`calc(50% + ${y}px)`}
                stroke="url(#lineGradient)"
                strokeWidth="2"
                filter="url(#glow)"
                className="animate-pulse"
                style={{
                  animationDelay: `${circle.angle / 45}s`,
                  animationDuration: '3s'
                }}
              />
            );
          })}

          {/* Connect some outer circles to each other for more Wipro-like complexity */}
          <line x1="calc(50% + 280px)" y1="calc(50% + 0px)" x2="calc(50% + 198px)" y2="calc(50% + 198px)" stroke="url(#lineGradient)" strokeWidth="1" opacity="0.3"/>
          <line x1="calc(50% + 198px)" y1="calc(50% + 198px)" x2="calc(50% + 0px)" y2="calc(50% + 280px)" stroke="url(#lineGradient)" strokeWidth="1" opacity="0.3"/>
          <line x1="calc(50% + 0px)" y1="calc(50% + 280px)" x2="calc(50% - 198px)" y2="calc(50% + 198px)" stroke="url(#lineGradient)" strokeWidth="1" opacity="0.3"/>
          <line x1="calc(50% - 198px)" y1="calc(50% + 198px)" x2="calc(50% - 280px)" y2="calc(50% + 0px)" stroke="url(#lineGradient)" strokeWidth="1" opacity="0.3"/>
          <line x1="calc(50% - 280px)" y1="calc(50% + 0px)" x2="calc(50% - 198px)" y2="calc(50% - 198px)" stroke="url(#lineGradient)" strokeWidth="1" opacity="0.3"/>
          <line x1="calc(50% - 198px)" y1="calc(50% - 198px)" x2="calc(50% + 0px)" y2="calc(50% - 280px)" stroke="url(#lineGradient)" strokeWidth="1" opacity="0.3"/>
          <line x1="calc(50% + 0px)" y1="calc(50% - 280px)" x2="calc(50% + 198px)" y2="calc(50% - 198px)" stroke="url(#lineGradient)" strokeWidth="1" opacity="0.3"/>
          <line x1="calc(50% + 198px)" y1="calc(50% - 198px)" x2="calc(50% + 280px)" y2="calc(50% + 0px)" stroke="url(#lineGradient)" strokeWidth="1" opacity="0.3"/>
        </svg>

        {/* Outer orbit rings for visual enhancement */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[600px] h-[600px] md:w-[700px] md:h-[700px] border border-blue-400 rounded-full opacity-20 animate-spin" style={{ animationDuration: '20s' }}></div>
          <div className="absolute w-[800px] h-[800px] md:w-[900px] md:h-[900px] border border-blue-300 rounded-full opacity-10 animate-spin" style={{ animationDuration: '30s', animationDirection: 'reverse' }}></div>
          <div className="absolute w-[1000px] h-[1000px] md:w-[1100px] md:h-[1100px] border border-blue-200 rounded-full opacity-5 animate-spin" style={{ animationDuration: '40s' }}></div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
