"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useTransform,
  useScroll,
  useSpring,
} from "motion/react";
import { cn } from "../../lib/utils";

export const TracingBeam = ({
  children,
  className,
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
    layoutEffect: false,
  });

  const contentRef = useRef(null);
  const [svgHeight, setSvgHeight] = useState(0);

  useEffect(() => {
    const updateHeight = () => {
      if (contentRef.current) {
        const height = contentRef.current.offsetHeight;
        // Add extra height for longer ray
        setSvgHeight(Math.max(height + 400, window.innerHeight + 200));
      }
    };

    updateHeight();

    // Update height when content changes
    const resizeObserver = new ResizeObserver(updateHeight);
    if (contentRef.current) {
      resizeObserver.observe(contentRef.current);
    }

    // Update on window resize and scroll
    window.addEventListener('resize', updateHeight);
    window.addEventListener('scroll', updateHeight);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', updateHeight);
      window.removeEventListener('scroll', updateHeight);
    };
  }, [children]);

  // Smooth animation for the gradient position with longer ray
  const y1 = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, svgHeight - 300]),
    {
      stiffness: 300,
      damping: 40,
    },
  );
  
  const y2 = useSpring(
    useTransform(scrollYProgress, [0, 1], [300, svgHeight + 100]),
    {
      stiffness: 300,
      damping: 40,
    },
  );

  // Create motion components to avoid unused import warning
  const MotionDiv = motion.div;
  const MotionPath = motion.path;
  const MotionLinearGradient = motion.linearGradient;

  return (
    <MotionDiv
      ref={ref}
      className={cn("relative w-full", className)}
    >
      <div className="fixed top-0 right-4 md:right-8 z-20 h-screen overflow-hidden">
        <MotionDiv
          transition={{
            duration: 0.2,
            delay: 0.5,
          }}
          animate={{
            boxShadow:
              scrollYProgress.get() > 0
                ? "none"
                : "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          }}
          className="border-netural-200 ml-[27px] flex h-4 w-4 items-center justify-center rounded-full border shadow-sm"
          style={{ marginTop: '12px', position: 'relative', zIndex: 10 }}
        >
          <MotionDiv
            transition={{
              duration: 0.2,
              delay: 0.5,
            }}
            animate={{
              backgroundColor: scrollYProgress.get() > 0 ? "white" : "#10b981",
              borderColor: scrollYProgress.get() > 0 ? "white" : "#059669",
            }}
            className="h-2 w-2 rounded-full border border-neutral-300 bg-white"
          />
        </MotionDiv>
        <svg
          viewBox={`0 0 20 ${Math.max(svgHeight, window.innerHeight || 800)}`}
          width="20"
          height="100vh"
          className="ml-4 block absolute top-0"
          aria-hidden="true"
          preserveAspectRatio="none"
        >
          <MotionPath
            d={`M 10 0 L 10 ${svgHeight + 200}`}
            fill="none"
            stroke="#9091A0"
            strokeOpacity="0.16"
            strokeWidth="1"
            transition={{
              duration: 0.5,
            }}
          />
          <MotionPath
            d={`M 10 0 L 10 ${svgHeight + 200}`}
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="2"
            className="motion-reduce:hidden"
            transition={{
              duration: 0.5,
            }}
          />
          <defs>
            <MotionLinearGradient
              id="gradient"
              gradientUnits="userSpaceOnUse"
              x1="0"
              x2="0"
              y1={y1}
              y2={y2}
            >
              <stop stopColor="#18CCFC" stopOpacity="0"></stop>
              <stop offset="0.1" stopColor="#18CCFC" stopOpacity="0.8"></stop>
              <stop offset="0.2" stopColor="#6344F5" stopOpacity="1"></stop>
              <stop offset="0.4" stopColor="#AE48FF" stopOpacity="1"></stop>
              <stop offset="0.7" stopColor="#18CCFC" stopOpacity="0.6"></stop>
              <stop offset="1" stopColor="#AE48FF" stopOpacity="0"></stop>
            </MotionLinearGradient>
          </defs>
        </svg>
      </div>
      <div ref={contentRef}>{children}</div>
    </MotionDiv>
  );
};
