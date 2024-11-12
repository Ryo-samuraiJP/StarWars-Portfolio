"use client";

import createGlobe, { COBEOptions } from "cobe";
import { useCallback, useEffect, useRef } from "react";
import { cn } from "../../lib/utils";

const GLOBE_CONFIG: COBEOptions = {
  width: 800,
  height: 800,
  onRender: () => {},
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.3,
  dark: 1.2,
  diffuse: 0.4,
  mapSamples: 16000,
  mapBrightness: 1.2,
  baseColor: [1, 1, 1],
  markerColor: [0.5, 1, 5],
  glowColor: [0.8, 0.8, 0.8],
  markers: [
    { location: [35.6895, 139.6917], size: 0.07 }, // Tokyo
    { location: [49.2827, -123.1207], size: 0.1 }, // Vancouver
  ],
};

function GlobeSetting({
  className,
  config = GLOBE_CONFIG,
}: {
  className?: string;
  config?: COBEOptions;
}) {
  const phiRef = useRef(0);
  let width = 0;
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const onRender = useCallback(
    (state: Record<string, unknown>) => {
      phiRef.current += 0.005;
      state.phi = phiRef.current;
      state.width = width * 2;
      state.height = width * 2;
    },
    [width]
  );

  const onResize = () => {
    if (canvasRef.current) {
      width = canvasRef.current.offsetWidth;
    }
  };

  useEffect(() => {
    window.addEventListener("resize", onResize);
    onResize();
    const globe = createGlobe(canvasRef.current!, {
      ...config,
      width: width * 2,
      height: width * 2,
      onRender,
    });
    setTimeout(() => (canvasRef.current!.style.opacity = "1"));
    return () => globe.destroy();
  });

  return (
    <div
      className={cn(
        "absolute inset-0 mx-auto aspect-[1/1] w-full max-w-[600px]",
        className
      )}
    >
      <canvas
        className="size-full opacity-0 transition-opacity duration-500 [contain:layout_paint_size]"
        ref={canvasRef}
      />
    </div>
  );
}

export default GlobeSetting;
