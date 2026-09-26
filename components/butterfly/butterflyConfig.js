// Configuration for 3D Butterfly Scroll Story

export const BUTTERFLY_CONFIG = {
  totalFrames: 240,
  // Pattern: /frames/frame_0001.webp to /frames/frame_0240.webp
  getFramePath: (index) => {
    const padded = String(index + 1).padStart(4, "0");
    return `/frames/frame_${padded}.webp`;
  },

  // Key milestones across homepage sections (scroll progress 0.0 -> 1.0)
  // Maps scroll progress to butterfly spatial position (viewport percentages X/Y),
  // 3D scale, rotation (degrees), opacity, blur, and frame ranges.
  waypoints: [
    {
      id: "hero-start",
      progress: 0.0,
      frameIndex: 0,
      x: 75, // % from left
      y: 28, // % from top
      scale: 1.0,
      rotateX: 0,
      rotateY: 0,
      rotateZ: -5,
      opacity: 0.95,
      blur: 0,
    },
    {
      id: "hero-scroll",
      progress: 0.1,
      frameIndex: 24,
      x: 68,
      y: 42,
      scale: 1.08,
      rotateX: 4,
      rotateY: -6,
      rotateZ: -2,
      opacity: 1,
      blur: 0,
    },
    {
      id: "philosophy",
      progress: 0.22,
      frameIndex: 55,
      x: 22,
      y: 50,
      scale: 0.95,
      rotateX: -3,
      rotateY: 8,
      rotateZ: 6,
      opacity: 0.95,
      blur: 0,
    },
    {
      id: "suites",
      progress: 0.38,
      frameIndex: 95,
      x: 80,
      y: 35,
      scale: 1.12,
      rotateX: 6,
      rotateY: -10,
      rotateZ: -4,
      opacity: 1,
      blur: 0,
    },
    {
      id: "results",
      progress: 0.52,
      frameIndex: 130,
      x: 18,
      y: 58,
      scale: 0.9,
      rotateX: -2,
      rotateY: 4,
      rotateZ: 4,
      opacity: 0.9,
      blur: 0,
    },
    {
      id: "doctor",
      progress: 0.66,
      frameIndex: 165,
      x: 72,
      y: 45,
      scale: 1.05,
      rotateX: 5,
      rotateY: -5,
      rotateZ: -3,
      opacity: 0.95,
      blur: 0,
    },
    {
      id: "quiz",
      progress: 0.78,
      frameIndex: 195,
      x: 25,
      y: 40,
      scale: 0.98,
      rotateX: -4,
      rotateY: 6,
      rotateZ: 5,
      opacity: 0.95,
      blur: 0,
    },
    {
      id: "testimonials",
      progress: 0.88,
      frameIndex: 215,
      x: 70,
      y: 52,
      scale: 1.02,
      rotateX: 2,
      rotateY: -4,
      rotateZ: -2,
      opacity: 0.95,
      blur: 0,
    },
    {
      id: "footer-center-landing",
      progress: 1.0,
      frameIndex: 239,
      x: 50, // Center of viewport
      y: 81, // Aligned with centered Footer logo anchor in refined compact layout
      scale: 0.45, // Refined luxury logo size so it fits cleanly in footer
      rotateX: 0,
      rotateY: 0,
      rotateZ: 0,
      opacity: 1,
      blur: 0,
    },
  ],

  // Mobile adjusted scaling and paths to ensure butterfly never overlaps primary text/buttons
  mobileScaleFactor: 0.72,
};
