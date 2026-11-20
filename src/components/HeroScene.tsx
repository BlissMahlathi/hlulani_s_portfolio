import React, { Suspense, useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import {
  Color,
  DoubleSide,
  MathUtils,
  MeshBasicMaterial,
  SRGBColorSpace,
  TextureLoader,
} from "three";
import portraitA from "@/assets/hm-character-a.png.asset.json";
import portraitB from "@/assets/hm-character-b.png.asset.json";

function Portrait() {
  const portraitRef = useRef<THREE.Group>(null);
  const ringRef = useRef<THREE.Group>(null);
  const firstPoseMaterial = useRef<MeshBasicMaterial>(null);
  const secondPoseMaterial = useRef<MeshBasicMaterial>(null);
  const [textureA, textureB] = useLoader(TextureLoader, [
    portraitA.url,
    portraitB.url,
  ]);
  const accent = useMemo(() => new Color(), []);

  useEffect(() => {
    textureA.colorSpace = SRGBColorSpace;
    textureB.colorSpace = SRGBColorSpace;
    const token = getComputedStyle(document.documentElement)
      .getPropertyValue("--space-accent-color")
      .trim();
    if (token) accent.setStyle(token);
  }, [accent, textureA, textureB]);

  useFrame((state, delta) => {
    if (portraitRef.current) {
      const compact = state.size.width < state.size.height;
      const targetX = compact ? 0.92 : 0.62;
      portraitRef.current.position.x = MathUtils.damp(
        portraitRef.current.position.x,
        targetX,
        2.2,
        delta,
      );
      portraitRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.6) * 0.045;
      portraitRef.current.rotation.y = MathUtils.damp(
        portraitRef.current.rotation.y,
        state.pointer.x * -0.11,
        3,
        delta,
      );
      portraitRef.current.scale.setScalar(compact ? 0.86 : 1);
    }

    if (ringRef.current) {
      ringRef.current.rotation.z = state.clock.elapsedTime * 0.055;
    }

    const phase = (state.clock.elapsedTime % 9) / 9;
    let blend = 0;
    if (phase >= 0.41 && phase < 0.52) {
      blend = MathUtils.smoothstep(phase, 0.41, 0.52);
    } else if (phase >= 0.52 && phase < 0.91) {
      blend = 1;
    } else if (phase >= 0.91) {
      blend = 1 - MathUtils.smoothstep(phase, 0.91, 1);
    }

    if (firstPoseMaterial.current) firstPoseMaterial.current.opacity = 1 - blend;
    if (secondPoseMaterial.current) secondPoseMaterial.current.opacity = blend;
  });

  return (
    <>
      <group ref={ringRef} position={[0.72, 0.02, -0.24]} rotation={[0.8, 0.12, 0.16]}>
        <mesh>
          <torusGeometry args={[1.78, 0.008, 8, 120]} />
          <meshBasicMaterial color={accent} transparent opacity={0.7} />
        </mesh>
      </group>
      <group ref={portraitRef} position={[0.62, 0, 0]}>
        <mesh position={[0, 0, 0]}>
          <planeGeometry args={[2.78, 3.82]} />
          <meshBasicMaterial
            ref={firstPoseMaterial}
            map={textureA}
            transparent
            opacity={1}
            depthWrite={false}
            toneMapped={false}
            side={DoubleSide}
          />
        </mesh>
        <mesh position={[0, 0, 0.003]}>
          <planeGeometry args={[2.78, 3.82]} />
          <meshBasicMaterial
            ref={secondPoseMaterial}
            map={textureB}
            transparent
            opacity={0}
            depthWrite={false}
            toneMapped={false}
            side={DoubleSide}
          />
        </mesh>
      </group>
    </>
  );
}

const HeroScene: React.FC = () => (
  <div className="absolute inset-x-0 bottom-0 top-[38%] z-0 pointer-events-none md:inset-y-0 md:left-[32%] md:right-0" aria-hidden="true">
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 6], fov: 42 }}
      gl={{ alpha: true, antialias: true, powerPreference: "low-power" }}
      fallback={
        <img
          src={portraitA.url}
          alt=""
          className="absolute bottom-0 right-0 h-full max-w-none object-contain object-bottom"
        />
      }
    >
      <Suspense fallback={null}>
        <Portrait />
      </Suspense>
    </Canvas>
  </div>
);

export default HeroScene;