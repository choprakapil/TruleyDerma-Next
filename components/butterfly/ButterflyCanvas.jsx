"use client";

import { useEffect, useRef } from "react";

export default function ButterflyCanvas({
  frameImg,
  xPercent = 50,
  yPercent = 50,
  scale = 1,
  rotateX = 0,
  rotateY = 0,
  rotateZ = 0,
  opacity = 1,
  blur = 0,
  debugInfo = null,
}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId;

    const render = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = window.innerWidth;
      const height = window.innerHeight;

      if (canvas.width !== width * dpr || canvas.height !== height * dpr) {
        canvas.width = width * dpr;
        canvas.height = height * dpr;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (frameImg) {
        ctx.save();
        ctx.scale(dpr, dpr);

        // Standard source-over blending since black background was keyed out in frame preloader
        ctx.globalCompositeOperation = "source-over";

        const posX = (width * xPercent) / 100;
        const posY = (height * yPercent) / 100;

        const imgWidth = frameImg.width || 500;
        const imgHeight = frameImg.height || 500;

        // Responsive sizing
        const maxDim = Math.min(width, height) * 0.48;
        const aspect = imgWidth / imgHeight;
        let drawWidth = maxDim;
        let drawHeight = maxDim / aspect;

        drawWidth *= scale;
        drawHeight *= scale;

        ctx.translate(posX, posY);
        ctx.globalAlpha = opacity;

        if (blur > 0) {
          ctx.filter = `blur(${blur}px)`;
        }

        ctx.drawImage(
          frameImg,
          -drawWidth / 2,
          -drawHeight / 2,
          drawWidth,
          drawHeight
        );

        ctx.restore();
      }
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [frameImg, xPercent, yPercent, scale, rotateX, rotateY, rotateZ, opacity, blur]);

  return (
    <div
      className="fixed inset-0 pointer-events-none z-30 overflow-hidden"
      style={{
        perspective: "1200px",
        transformStyle: "preserve-3d",
      }}
    >
      <div
        className="w-full h-full transition-transform duration-75 ease-out"
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`,
        }}
      >
        <canvas
          ref={canvasRef}
          className="w-full h-full block pointer-events-none"
        />
      </div>

      {/* Development Debug Layer (Only if debugInfo is supplied) */}
      {debugInfo && (
        <div className="absolute top-4 left-4 bg-black/80 text-green-400 font-mono text-[10px] p-3 rounded-lg border border-green-500/40 pointer-events-auto z-50 space-y-1">
          <p>🐛 BUTTERFLY DEBUG</p>
          <p>Frame: {debugInfo.frameIndex} / 239</p>
          <p>Progress: {(debugInfo.progress * 100).toFixed(1)}%</p>
          <p>Pos: X {xPercent.toFixed(1)}%, Y {yPercent.toFixed(1)}%</p>
          <p>Scale: {scale.toFixed(2)}, RotZ: {rotateZ.toFixed(1)}°</p>
        </div>
      )}
    </div>
  );
}
