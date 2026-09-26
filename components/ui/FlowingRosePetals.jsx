"use client";

import { useEffect, useRef } from "react";

const ROSE_PALETTES = [
  {
    colorLight: "rgba(255, 235, 240, 0.85)",
    colorMain: "rgba(235, 150, 170, 0.75)",
    colorShadow: "rgba(201, 105, 130, 0.70)",
    veinColor: "rgba(255, 255, 255, 0.4)",
  },
  {
    colorLight: "rgba(255, 240, 245, 0.9)",
    colorMain: "rgba(242, 175, 192, 0.8)",
    colorShadow: "rgba(215, 130, 155, 0.65)",
    veinColor: "rgba(255, 255, 255, 0.45)",
  },
  {
    colorLight: "rgba(255, 225, 235, 0.85)",
    colorMain: "rgba(225, 130, 155, 0.75)",
    colorShadow: "rgba(185, 80, 110, 0.7)",
    veinColor: "rgba(255, 255, 255, 0.35)",
  },
  {
    colorLight: "rgba(255, 245, 248, 0.95)",
    colorMain: "rgba(248, 195, 208, 0.85)",
    colorShadow: "rgba(223, 166, 180, 0.7)",
    veinColor: "rgba(255, 255, 255, 0.5)",
  },
  {
    colorLight: "rgba(250, 215, 225, 0.8)",
    colorMain: "rgba(215, 110, 140, 0.7)",
    colorShadow: "rgba(170, 70, 95, 0.65)",
    veinColor: "rgba(255, 255, 255, 0.3)",
  },
];

export default function FlowingRosePetals({
  count = 28,
  className = "",
  speed = 1,
}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId;
    let isVisible = true;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    // Create particles with realistic aerodynamics
    const petals = Array.from({ length: count }, () => {
      const palette =
        ROSE_PALETTES[Math.floor(Math.random() * ROSE_PALETTES.length)];
      const baseSize = 14 + Math.random() * 18; // 14px to 32px

      return {
        x: Math.random() * (width + 100) - 50,
        y: Math.random() * (height + 100) - 50,
        width: baseSize * (0.8 + Math.random() * 0.4),
        height: baseSize * (1.1 + Math.random() * 0.5),
        speedY: (0.7 + Math.random() * 1.1) * speed,
        speedX: (0.4 + Math.random() * 0.8) * speed,
        breezeSpeed: 0.001 + Math.random() * 0.0015,
        breezeOffset: Math.random() * Math.PI * 2,
        breezeAmp: 0.8 + Math.random() * 1.4,
        angle: Math.random() * Math.PI * 2,
        angularSpeed: (Math.random() - 0.5) * 0.02,
        flipX: Math.random() * Math.PI * 2,
        flipSpeedX: 0.015 + Math.random() * 0.025,
        flipY: Math.random() * Math.PI * 2,
        flipSpeedY: 0.01 + Math.random() * 0.02,
        palette,
        opacity: 0.55 + Math.random() * 0.4,
        curl: 0.15 + Math.random() * 0.25,
      };
    });

    let lastTime = performance.now();

    const render = (time) => {
      const delta = Math.min((time - lastTime) / 16.66, 2.5);
      lastTime = time;

      ctx.clearRect(0, 0, width, height);

      petals.forEach((p) => {
        // Wind & physics calculation
        const breeze = Math.sin(time * p.breezeSpeed + p.breezeOffset) * p.breezeAmp;
        p.x += (p.speedX + breeze) * delta;
        p.y += p.speedY * delta;
        p.angle += p.angularSpeed * delta;
        p.flipX += p.flipSpeedX * delta;
        p.flipY += p.flipSpeedY * delta;

        // Wrap around boundaries smoothly
        if (p.y > height + 50) {
          p.y = -50;
          p.x = Math.random() * (width + 100) - 50;
        }
        if (p.x > width + 50) {
          p.x = -50;
          p.y = Math.random() * (height + 50) - 30;
        }

        // Draw individual curved 3D fluttering petal
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.angle);

        // 3D tumble scaling (simulate rotation along X & Y planes)
        const scaleX = Math.cos(p.flipX);
        const scaleY = Math.cos(p.flipY);
        ctx.scale(Math.abs(scaleX) > 0.08 ? scaleX : 0.08, Math.abs(scaleY) > 0.1 ? scaleY : 0.1);
        ctx.globalAlpha = p.opacity;

        const w = p.width;
        const h = p.height;

        // Radial gradient for velvety rose petal shading
        const radGrad = ctx.createRadialGradient(
          -w * 0.15,
          -h * 0.25,
          w * 0.1,
          0,
          0,
          Math.max(w, h)
        );
        radGrad.addColorStop(0, p.palette.colorLight);
        radGrad.addColorStop(0.55, p.palette.colorMain);
        radGrad.addColorStop(1, p.palette.colorShadow);

        ctx.fillStyle = radGrad;
        ctx.shadowColor = "rgba(180, 80, 100, 0.15)";
        ctx.shadowBlur = 6;
        ctx.shadowOffsetY = 3;

        // Draw organic petal silhouette
        ctx.beginPath();
        // Top dip/tip of petal
        ctx.moveTo(0, -h * 0.45);
        // Right sensual petal contour
        ctx.bezierCurveTo(w * 0.55, -h * 0.4, w * 0.65, h * 0.15, 0, h * 0.5);
        // Left sensual petal contour
        ctx.bezierCurveTo(-w * 0.65, h * 0.15, -w * 0.55, -h * 0.4, 0, -h * 0.45);
        ctx.closePath();
        ctx.fill();

        // Subtle petal spine / organic fold
        ctx.beginPath();
        ctx.moveTo(0, -h * 0.35);
        ctx.quadraticCurveTo(w * p.curl, 0, 0, h * 0.42);
        ctx.strokeStyle = p.palette.veinColor;
        ctx.lineWidth = 0.75;
        ctx.stroke();

        ctx.restore();
      });

      if (isVisible) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    // Pause animation when scrolled out of view to save battery & CPU
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (!isVisible) {
              isVisible = true;
              lastTime = performance.now();
              animationFrameId = requestAnimationFrame(render);
            }
          } else {
            isVisible = false;
            cancelAnimationFrame(animationFrameId);
          }
        });
      },
      { threshold: 0.05 }
    );

    observer.observe(canvas);
    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
      window.removeEventListener("resize", handleResize);
    };
  }, [count, speed]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 w-full h-full z-10 ${className}`}
    />
  );
}
