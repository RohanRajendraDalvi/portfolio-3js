import React, { Suspense, useState, useEffect, Component } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader";

// Function to check WebGL support
const checkWebGLSupport = () => {
  try {
    const canvas = document.createElement('canvas');
    return !!(window.WebGLRenderingContext && canvas.getContext('webgl'));
  } catch (e) {
    return false;
  }
};

// Error boundary component
class CanvasErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log('Ball Canvas error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <div className='w-full h-full bg-primary rounded-full flex items-center justify-center'>
        <img src={this.props.icon} alt="tech" className='w-1/2 h-1/2 object-contain' />
      </div>;
    }

    return this.props.children;
  }
}

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color='#fff8eb'
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  const [loaded, setLoaded] = useState(false);
  const [timedOut, setTimedOut] = useState(false);
  const [hasWebGL, setHasWebGL] = useState(true);

  useEffect(() => {
    // Check WebGL support once on mount
    setHasWebGL(checkWebGLSupport());
  }, []);

  useEffect(() => {
    if (!hasWebGL) return; // Don't set timeout if no WebGL

    const timer = setTimeout(() => {
      if (!loaded) {
        setTimedOut(true);
      }
    }, 8000); // 8 seconds timeout

    return () => clearTimeout(timer);
  }, [loaded, hasWebGL]);

  if (!hasWebGL || timedOut) {
    return <div className='w-full h-full bg-primary rounded-full flex items-center justify-center'>
      <img src={icon} alt="tech" className='w-1/2 h-1/2 object-contain' />
    </div>;
  }

  return (
    <CanvasErrorBoundary icon={icon}>
      <Canvas
        frameloop='always'
        dpr={[1, 2]}
        gl={{ preserveDrawingBuffer: true }}
        style={{ width: '100%', height: '100%' }}
        onCreated={() => setLoaded(true)}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls enableZoom={false} />
          <Ball imgUrl={icon} />
        </Suspense>

        <Preload all />
      </Canvas>
    </CanvasErrorBoundary>
  );
};

export default BallCanvas;
