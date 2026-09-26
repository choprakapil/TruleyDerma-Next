"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { BUTTERFLY_CONFIG } from "./butterflyConfig";
import { useButterflyFrames } from "./useButterflyFrames";
import ButterflyCanvas from "./ButterflyCanvas";

// Register ScrollTrigger safely
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Linear interpolation helper
function lerp(start, end, amt) {
  return (1 - amt) * start + amt * end;
}

export default function ButterflyScrollStory() {
  const { getFrame, isHeroReady } = useButterflyFrames();
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentFrameIndex, setCurrentFrameIndex] = useState(0);
  const [spatialState, setSpatialState] = useState({
    x: BUTTERFLY_CONFIG.waypoints[0].x,
    y: BUTTERFLY_CONFIG.waypoints[0].y,
    scale: BUTTERFLY_CONFIG.waypoints[0].scale,
    rotateX: BUTTERFLY_CONFIG.waypoints[0].rotateX,
    rotateY: BUTTERFLY_CONFIG.waypoints[0].rotateY,
    rotateZ: BUTTERFLY_CONFIG.waypoints[0].rotateZ,
    opacity: BUTTERFLY_CONFIG.waypoints[0].opacity,
    blur: BUTTERFLY_CONFIG.waypoints[0].blur,
  });

  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const prevScrollY = useRef(0);
  const velocityTiltRef = useRef(0);

  // Check media queries on mount
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleMediaChange = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handleMediaChange);

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaChange);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  // Compute spatial state by interpolating between waypoints based on scroll progress
  const updateSpatialState = useCallback(
    (progress) => {
      const waypoints = BUTTERFLY_CONFIG.waypoints;

      // Find surrounding waypoints
      let startIndex = 0;
      for (let i = 0; i < waypoints.length - 1; i++) {
        if (progress >= waypoints[i].progress) {
          startIndex = i;
        }
      }
      const endIndex = Math.min(startIndex + 1, waypoints.length - 1);

      const wStart = waypoints[startIndex];
      const wEnd = waypoints[endIndex];

      let segmentProgress = 0;
      if (wEnd.progress > wStart.progress) {
        segmentProgress = (progress - wStart.progress) / (wEnd.progress - wStart.progress);
      }
      segmentProgress = Math.max(0, Math.min(1, segmentProgress));

      // Calculate frame index
      const targetFrame = Math.round(
        lerp(wStart.frameIndex, wEnd.frameIndex, segmentProgress)
      );

      // Dynamically calculate footer anchor position if reaching footer landing
      let targetEndX = wEnd.x;
      let targetEndY = wEnd.y;
      if (wEnd.id === "footer-center-landing" && typeof window !== "undefined") {
        const anchor = document.getElementById("footer-butterfly-anchor");
        if (anchor) {
          const rect = anchor.getBoundingClientRect();
          const anchorCenterY = ((rect.top + rect.height * 0.44) / window.innerHeight) * 100;
          const anchorCenterX = ((rect.left + rect.width / 2) / window.innerWidth) * 100;
          if (anchorCenterY > 0 && anchorCenterY < 130) {
            targetEndY = anchorCenterY;
          }
          if (anchorCenterX > 0 && anchorCenterX < 100) {
            targetEndX = anchorCenterX;
          }
        }
      }

      // Compute position and 3D attributes
      let x = lerp(wStart.x, targetEndX, segmentProgress);
      let y = lerp(wStart.y, targetEndY, segmentProgress);
      let scale = lerp(wStart.scale, wEnd.scale, segmentProgress);
      const rotateX = lerp(wStart.rotateX, wEnd.rotateX, segmentProgress);
      const rotateY = lerp(wStart.rotateY, wEnd.rotateY, segmentProgress);
      let rotateZ = lerp(wStart.rotateZ, wEnd.rotateZ, segmentProgress);
      const opacity = lerp(wStart.opacity, wEnd.opacity, segmentProgress);
      const blur = lerp(wStart.blur, wEnd.blur, segmentProgress);

      // Velocity tilt effect
      const currentScrollY = window.scrollY;
      const deltaY = currentScrollY - prevScrollY.current;
      prevScrollY.current = currentScrollY;

      velocityTiltRef.current = lerp(velocityTiltRef.current, deltaY * 0.12, 0.2);
      rotateZ += Math.max(-12, Math.min(12, velocityTiltRef.current));

      // Mobile scale adjustment
      if (isMobile) {
        scale *= BUTTERFLY_CONFIG.mobileScaleFactor;
      }

      setCurrentFrameIndex(targetFrame);
      setSpatialState({
        x,
        y,
        scale,
        rotateX,
        rotateY,
        rotateZ,
        opacity,
        blur,
      });
    },
    [isMobile]
  );

  // GSAP ScrollTrigger Setup
  useEffect(() => {
    if (prefersReducedMotion) return;

    // Small delay to ensure DOM layout is complete
    const timer = setTimeout(() => {
      const trigger = ScrollTrigger.create({
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.5,
        onUpdate: (self) => {
          setScrollProgress(self.progress);
          updateSpatialState(self.progress);
        },
      });

      return () => {
        trigger.kill();
      };
    }, 150);

    return () => clearTimeout(timer);
  }, [prefersReducedMotion, updateSpatialState]);

  // Reduced motion fallback
  if (prefersReducedMotion) {
    return null; // Keep decorative animation disabled for users requiring reduced motion
  }

  const currentFrameImg = getFrame(currentFrameIndex);

  return (
    <ButterflyCanvas
      frameImg={currentFrameImg}
      xPercent={spatialState.x}
      yPercent={spatialState.y}
      scale={spatialState.scale}
      rotateX={spatialState.rotateX}
      rotateY={spatialState.rotateY}
      rotateZ={spatialState.rotateZ}
      opacity={spatialState.opacity}
      blur={spatialState.blur}
    />
  );
}
