import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("/desktop_pc/scene.gltf");

  return (
    <>
      <hemisphereLight intensity={0.15} groundColor='black' />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.55 : 1}
        position={isMobile ? [0, -1.25, -1.5] : [0, -0.7, -3]}
        rotation={[0, -Math.PI / 2, 0]}
      />
    </>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      style={{ width: "100%", height: "100%", position: "absolute", top: 0, left: 0 }}
      frameloop='always'
      camera={{ position: [0, 2.5, 14], fov: 35 }}
    >
      <color attach="background" args={["#050816"]} />
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={true} enablePan={false} enableRotate={true} maxPolarAngle={Math.PI / 2} />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
