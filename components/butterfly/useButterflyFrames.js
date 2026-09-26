"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { BUTTERFLY_CONFIG } from "./butterflyConfig";

export function useButterflyFrames() {
  const [isHeroReady, setIsHeroReady] = useState(false);
  const [loadedCount, setLoadedCount] = useState(0);
  const framesRef = useRef({});
  const loadingStatusRef = useRef({});

  const loadSingleFrame = useCallback((index) => {
    return new Promise((resolve) => {
      if (framesRef.current[index]) {
        resolve(framesRef.current[index]);
        return;
      }

      if (loadingStatusRef.current[index]) {
        const checkInterval = setInterval(() => {
          if (framesRef.current[index]) {
            clearInterval(checkInterval);
            resolve(framesRef.current[index]);
          }
        }, 20);
        return;
      }

      loadingStatusRef.current[index] = true;
      const img = new Image();
      img.src = BUTTERFLY_CONFIG.getFramePath(index);

      img.onload = () => {
        // Store raw original WebP image directly
        framesRef.current[index] = img;
        loadingStatusRef.current[index] = false;
        setLoadedCount((prev) => prev + 1);
        resolve(img);
      };

      img.onerror = () => {
        console.warn(`Failed to load butterfly frame ${index}`);
        loadingStatusRef.current[index] = false;
        resolve(null);
      };
    });
  }, []);

  useEffect(() => {
    let isCancelled = false;

    const loadFramesStaged = async () => {
      // Stage 1: Load Hero critical frames (0 - 15) immediately
      const heroPromises = [];
      for (let i = 0; i <= 15; i++) {
        heroPromises.push(loadSingleFrame(i));
      }
      await Promise.all(heroPromises);
      if (!isCancelled) {
        setIsHeroReady(true);
      }

      // Stage 2: Load intermediate frames (16 - 120) in background batch
      for (let i = 16; i <= 120; i++) {
        if (isCancelled) break;
        await loadSingleFrame(i);
      }

      // Stage 3: Load remaining frames (121 - 239)
      for (let i = 121; i < BUTTERFLY_CONFIG.totalFrames; i++) {
        if (isCancelled) break;
        await loadSingleFrame(i);
      }
    };

    loadFramesStaged();

    return () => {
      isCancelled = true;
    };
  }, [loadSingleFrame]);

  const getFrame = useCallback((index) => {
    const safeIdx = Math.max(0, Math.min(index, BUTTERFLY_CONFIG.totalFrames - 1));
    if (framesRef.current[safeIdx]) {
      return framesRef.current[safeIdx];
    }
    // Search backward
    for (let i = safeIdx - 1; i >= 0; i--) {
      if (framesRef.current[i]) return framesRef.current[i];
    }
    // Search forward
    for (let i = safeIdx + 1; i < BUTTERFLY_CONFIG.totalFrames; i++) {
      if (framesRef.current[i]) return framesRef.current[i];
    }
    return null;
  }, []);

  return {
    getFrame,
    isHeroReady,
    loadedCount,
    totalFrames: BUTTERFLY_CONFIG.totalFrames,
    progressPercentage: Math.round((loadedCount / BUTTERFLY_CONFIG.totalFrames) * 100),
  };
}
