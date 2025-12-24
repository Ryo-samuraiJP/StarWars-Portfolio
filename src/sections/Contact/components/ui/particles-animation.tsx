import { useRef, useEffect } from "react";
import useMousePosition from "../../../../lib/mouse-position";

interface ParticlesProps {
  quantity?: number; // Number of particles
  staticity?: number; // Staticity of particles movement
  ease?: number; // Ease of particles movement
}

export default function ParticlesAnimation({
  quantity = 30,
  staticity = 50,
  ease = 50,
}: ParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const canvasContainerRef = useRef<HTMLDivElement>(null);
  const context = useRef<CanvasRenderingContext2D | null>(null);
  const circles = useRef<Circle[]>([]);

  // Get mouse position from custom hook useMousePosition
  const mousePosition = useMousePosition();
  // Mouse position object for particles magnetism effect
  const mouse = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  // Canvas size object for resizing the canvas based on the window size
  const canvasSize = useRef<{ w: number; h: number }>({ w: 0, h: 0 });
  // Device pixel ratio for retina displays to render the canvas properly
  const dpr = typeof window !== "undefined" ? window.devicePixelRatio : 1;

  // Initialize the canvas and start the animation loop on component mount and window resize
  useEffect(() => {
    if (canvasRef.current) {
      context.current = canvasRef.current.getContext("2d");
    }
    initCanvas();
    animate();
    window.addEventListener("resize", initCanvas);

    return () => {
      window.removeEventListener("resize", initCanvas);
    };
  }, []);

  // Update the mouse position on mouse move event and call the onMouseMove function to update the particles position
  useEffect(() => {
    onMouseMove();
  }, [mousePosition.x, mousePosition.y]);

  const initCanvas = () => {
    resizeCanvas(); // Resize the canvas based on the window size
    drawParticles(); // Draw the particles on the canvas
  };

  // Update the mouse position based on the mouse move event
  const onMouseMove = () => {
    if (canvasRef.current) {
      const rect = canvasRef.current.getBoundingClientRect();
      const { w, h } = canvasSize.current;
      const x = mousePosition.x - rect.left - w / 2; // Get the x position of the mouse relative to the canvas center
      const y = mousePosition.y - rect.top - h / 2; // Get the y position of the mouse relative to the canvas center
      const inside = x < w / 2 && x > -w / 2 && y < h / 2 && y > -h / 2; // Check if the mouse is inside the canvas
      if (inside) {
        mouse.current.x = x;
        mouse.current.y = y;
      }
    }
  };

  // Resize the canvas based on the window size and device pixel ratio
  const resizeCanvas = () => {
    if (canvasContainerRef.current && canvasRef.current && context.current) {
      circles.current.length = 0;
      canvasSize.current.w = canvasContainerRef.current.offsetWidth;
      canvasSize.current.h = canvasContainerRef.current.offsetHeight;
      canvasRef.current.width = canvasSize.current.w * dpr; // Set the canvas width based on the window width
      canvasRef.current.height = canvasSize.current.h * dpr; // Set the canvas height based on the window height
      canvasRef.current.style.width = canvasSize.current.w + "px";
      canvasRef.current.style.height = canvasSize.current.h + "px";
      context.current.scale(dpr, dpr);
    }
  };

  type Circle = {
    x: number;
    y: number;
    translateX: number;
    translateY: number;
    size: number;
    alpha: number; // Opacity of the circle (0 to 1)
    targetAlpha: number; // Target opacity of the circle (0 to 1)
    dx: number; // Horizontal velocity of the circle (-0.5 to 0.5)
    dy: number; // Vertical velocity of the circle (-0.5 to 0.5)
    magnetism: number; // Magnetism of the circle (0.1 to 4)
  };

  // Generate random parameters for the circle object to create a new circle
  const circleParams = (): Circle => {
    const x = Math.floor(Math.random() * canvasSize.current.w);
    const y = Math.floor(Math.random() * canvasSize.current.h);
    const translateX = 0;
    const translateY = 0;
    const size = Math.floor(Math.random() * 2) + 1; // Random size between 1 and 3 pixels for the circle radius
    const alpha = 0;
    const targetAlpha = parseFloat((Math.random() * 0.6 + 0.1).toFixed(1)); // Random target opacity between 0.1 and 0.7
    const dx = (Math.random() - 0.5) * 0.2; // Random horizontal velocity between -0.1 and 0.1
    const dy = (Math.random() - 0.5) * 0.2; // Random vertical velocity between -0.1 and 0.1
    const magnetism = 0.1 + Math.random() * 4; // Random magnetism between 0.1 and 4
    return {
      x,
      y,
      translateX,
      translateY,
      size,
      alpha,
      targetAlpha,
      dx,
      dy,
      magnetism,
    };
  };

  // Draw a circle on the canvas
  const drawCircle = (circle: Circle, update = false) => {
    if (context.current) {
      const { x, y, translateX, translateY, size, alpha } = circle;
      context.current.translate(translateX, translateY);
      context.current.beginPath();
      context.current.arc(x, y, size, 0, 2 * Math.PI);
      context.current.fillStyle = `rgba(255, 255, 255, ${alpha})`;
      context.current.fill(); // Fill the circle with white color
      context.current.setTransform(dpr, 0, 0, dpr, 0, 0); // Reset the transform to avoid accumulation

      // Update the circle in the array if it already exists
      if (!update) {
        circles.current.push(circle);
      }
    }
  };

  // Clear the canvas context to redraw the particles
  const clearContext = () => {
    if (context.current) {
      context.current.clearRect(
        0,
        0,
        canvasSize.current.w,
        canvasSize.current.h
      );
    }
  };

  // Draw the particles on the canvas based on the quantity
  const drawParticles = () => {
    clearContext();
    const particleCount = quantity;
    for (let i = 0; i < particleCount; i++) {
      const circle = circleParams();
      drawCircle(circle);
    }
  };

  // Remap a value from one range to another range
  const remapValue = (
    value: number,
    start1: number,
    end1: number,
    start2: number,
    end2: number
  ): number => {
    const remapped =
      ((value - start1) * (end2 - start2)) / (end1 - start1) + start2;
    return remapped > 0 ? remapped : 0;
  };

  // Animate the particles on the canvas based on the mouse position and particle parameters
  const animate = () => {
    clearContext();
    circles.current.forEach((circle: Circle, i: number) => {
      // Handle the alpha value
      const edge = [
        circle.x + circle.translateX - circle.size, // Distance from left edge
        canvasSize.current.w - circle.x - circle.translateX - circle.size, // Distance from right edge
        circle.y + circle.translateY - circle.size, // Distance from top edge
        canvasSize.current.h - circle.y - circle.translateY - circle.size, // Distance from bottom edge
      ];
      const closestEdge = edge.reduce((a, b) => Math.min(a, b));
      const remapClosestEdge = parseFloat(
        remapValue(closestEdge, 0, 20, 0, 1).toFixed(2)
      );
      // Update the circle parameters based on the mouse position and particle parameters
      if (remapClosestEdge > 1) {
        circle.alpha += 0.02;
        if (circle.alpha > circle.targetAlpha)
          circle.alpha = circle.targetAlpha;
      } else {
        circle.alpha = circle.targetAlpha * remapClosestEdge;
      }
      circle.x += circle.dx; // Update the x position based on the horizontal velocity
      circle.y += circle.dy; // Update the y position based on the vertical velocity
      circle.translateX +=
        (mouse.current.x / (staticity / circle.magnetism) - circle.translateX) /
        ease; // Update the translateX position based on the mouse position and particle magnetism effect
      circle.translateY +=
        (mouse.current.y / (staticity / circle.magnetism) - circle.translateY) /
        ease; // Update the translateY position based on the mouse position and particle magnetism effect

      // Circle gets out of the canvas
      if (
        circle.x < -circle.size ||
        circle.x > canvasSize.current.w + circle.size ||
        circle.y < -circle.size ||
        circle.y > canvasSize.current.h + circle.size
      ) {
        // Remove the circle from the array
        circles.current.splice(i, 1);
        // Create a new circle
        const newCircle = circleParams();
        drawCircle(newCircle);
        // Update the circle position
      } else {
        drawCircle(
          {
            ...circle,
            x: circle.x,
            y: circle.y,
            translateX: circle.translateX,
            translateY: circle.translateY,
            alpha: circle.alpha,
          },
          true
        );
      }
    });
    window.requestAnimationFrame(animate);
  };

  return (
    <div
      className="absolute inset-0 pointer-events-none"
      ref={canvasContainerRef}
      aria-hidden="true"
    >
      <canvas ref={canvasRef} />
    </div>
  );
}
