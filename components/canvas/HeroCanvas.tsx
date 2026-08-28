"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { useRef, useMemo, useCallback } from "react";
import * as THREE from "three";
import { useTheme } from "next-themes";

function ParticleField() {
  const ref = useRef<THREE.Points>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const { viewport } = useThree();

  const sphere = useMemo(() => {
    const positions = new Float32Array(8000 * 3);
    for (let i = 0; i < 8000; i++) {
      const radius = 1.8;
      const u = Math.random();
      const v = Math.random();
      const theta = 2 * Math.PI * u;
      const phi = Math.acos(2 * v - 1);
      const r = Math.cbrt(Math.random()) * radius;

      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
    }
    return positions;
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 12;
      ref.current.rotation.y -= delta / 18;
      // Subtle mouse follow
      const targetX = mouseRef.current.y * 0.1;
      const targetY = mouseRef.current.x * 0.1;
      ref.current.rotation.x += (targetX - ref.current.rotation.x) * 0.01;
      ref.current.rotation.y += (targetY - ref.current.rotation.y) * 0.01;
    }
  });

  return (
    <group
      rotation={[0, 0, Math.PI / 4]}
      onPointerMove={(e) => {
        mouseRef.current.x = (e.point.x / viewport.width) * 2;
        mouseRef.current.y = (e.point.y / viewport.height) * 2;
      }}
    >
      <Points
        ref={ref}
        positions={sphere}
        stride={3}
        frustumCulled={false}
      >
        <PointMaterial
          transparent
          color={isDark ? "#2DD4BF" : "#0F766E"}
          size={0.005}
          sizeAttenuation
          depthWrite={false}
          opacity={0.9}
        />
      </Points>
    </group>
  );
}

function SlowOrbitField() {
  const ref = useRef<THREE.Points>(null);
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const positions = useMemo(() => {
    const pos = new Float32Array(2000 * 3);
    for (let i = 0; i < 2000; i++) {
      const radius = 2.2;
      const u = Math.random();
      const v = Math.random();
      const theta = 2 * Math.PI * u;
      const phi = Math.acos(2 * v - 1);
      const r = Math.cbrt(Math.random()) * radius;

      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);
    }
    return pos;
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta / 30;
      ref.current.rotation.y += delta / 25;
    }
  });

  return (
    <group rotation={[Math.PI / 6, 0, -Math.PI / 6]}>
      <Points
        ref={ref}
        positions={positions}
        stride={3}
        frustumCulled={false}
      >
        <PointMaterial
          transparent
          color={isDark ? "#A78BFA" : "#7C3AED"}
          size={0.008}
          sizeAttenuation
          depthWrite={false}
          opacity={0.5}
        />
      </Points>
    </group>
  );
}

export function HeroCanvas() {
  return (
    <div className="absolute inset-0 -z-20 h-full w-full opacity-60 dark:opacity-40">
      <Canvas camera={{ position: [0, 0, 1] }} dpr={[1, 1.5]}>
        <ParticleField />
        <SlowOrbitField />
      </Canvas>
    </div>
  );
}
