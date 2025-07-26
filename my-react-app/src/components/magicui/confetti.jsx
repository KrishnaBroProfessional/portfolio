"use client";;
import confetti from "canvas-confetti";
import React, {
  createContext,
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
} from "react";

import { Button } from "@/components/ui/button";

const ConfettiContext = createContext({});

// Define component first
const ConfettiComponent = forwardRef((props, ref) => {
  const {
    options,
    globalOptions = { resize: true, useWorker: true },
    manualstart = false,
    children,
    ...rest
  } = props;
  const instanceRef = useRef(null);

  const canvasRef = useCallback((node) => {
    if (node !== null) {
      if (instanceRef.current) return;
      
      // Set canvas to full viewport dimensions
      node.style.width = '100vw';
      node.style.height = '100vh';
      node.width = window.innerWidth;
      node.height = window.innerHeight;
      
      instanceRef.current = confetti.create(node, {
        ...globalOptions,
        resize: true,
        useWorker: true,
      });
    } else {
      if (instanceRef.current) {
        instanceRef.current.reset();
        instanceRef.current = null;
      }
    }
  }, [globalOptions]);

  const fire = useCallback(async (opts = {}) => {
    try {
      await instanceRef.current?.({ ...options, ...opts });
    } catch (error) {
      console.error("Confetti error:", error);
    }
  }, [options]);

  const api = useMemo(() => ({
    fire,
  }), [fire]);

  useImperativeHandle(ref, () => api, [api]);

  useEffect(() => {
    if (!manualstart) {
      (async () => {
        try {
          await fire();
        } catch (error) {
          console.error("Confetti effect error:", error);
        }
      })();
    }

    // Add resize handler to maintain full-screen canvas
    const handleResize = () => {
      const canvas = instanceRef.current?.getCanvas?.();
      if (canvas) {
        canvas.style.width = '100vw';
        canvas.style.height = '100vh';
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };

    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [manualstart, fire]);

  return (
    <ConfettiContext.Provider value={api}>
      <canvas ref={canvasRef} {...rest} />
      {children}
    </ConfettiContext.Provider>
  );
});

// Set display name immediately
ConfettiComponent.displayName = "Confetti";

// Export as Confetti
export const Confetti = ConfettiComponent;

const ConfettiButtonComponent = ({
  options,
  children,
  ...props
}) => {
  const handleClick = async (event) => {
    try {
      const rect = event.currentTarget.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;
      await confetti({
        ...options,
        origin: {
          x: x / window.innerWidth,
          y: y / window.innerHeight,
        },
      });
    } catch (error) {
      console.error("Confetti button error:", error);
    }
  };

  return (
    <Button onClick={handleClick} {...props}>
      {children}
    </Button>
  );
};

ConfettiButtonComponent.displayName = "ConfettiButton";

export const ConfettiButton = ConfettiButtonComponent;
