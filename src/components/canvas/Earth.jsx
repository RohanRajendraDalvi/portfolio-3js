import React, { Suspense, useState, useEffect, Component } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, useProgress } from "@react-three/drei";

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
    console.log('Earth Canvas error:', error, errorInfo);
    // Notify parent component of error
    if (this.props.onError) {
      this.props.onError();
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className='w-full h-full bg-primary flex items-center justify-center rounded-2xl'>
          <div className='text-center text-white'>
            <div className='w-16 h-16 mx-auto mb-4 rounded-full bg-tertiary flex items-center justify-center'>
              🌍
            </div>
            <p className='text-sm opacity-75'>Interactive Earth Model</p>
            <p className='text-xs opacity-50 mt-1'>Currently unavailable</p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

const Earth = () => {
  const earth = useGLTF("/planet/scene.gltf");

  return (
    <primitive object={earth.scene} scale={2.5} position-y={0} rotation-y={0} />
  );
};

const EarthCanvas = () => {
  const [timedOut, setTimedOut] = useState(false);
  const [hasError, setHasError] = useState(false);
  const { active, progress } = useProgress();

  useEffect(() => {
    if (!active) return;

    const timer = setTimeout(() => {
      setTimedOut(true);
    }, 12000); // 12 seconds timeout for slow connections

    return () => clearTimeout(timer);
  }, [active]);

  // Loading component with real asset progress
  const renderLoading = () => (
    <div className='w-full h-full bg-primary flex items-center justify-center rounded-2xl'>
      <div className='text-center text-white max-w-xs'>
        <div className='w-16 h-16 mx-auto mb-4 rounded-full bg-tertiary flex items-center justify-center'>
          🌍
        </div>
        <p className='text-sm font-medium mb-2'>Loading Interactive Earth Model</p>
        <div className='w-full bg-gray-700 rounded-full h-2 mb-2'>
          <div 
            className='bg-blue-500 h-2 rounded-full transition-all duration-300 ease-out'
            style={{ width: `${Math.round(progress)}%` }}
          ></div>
        </div>
        <p className='text-xs opacity-75'>{Math.round(progress)}% loaded</p>
        <p className='text-xs opacity-50 mt-1'>This may take a moment on slower devices</p>
      </div>
    </div>
  );

  // Fallback component with explanation
  const renderFallback = () => (
    <div className='w-full h-full bg-primary flex items-center justify-center rounded-2xl'>
      <div className='text-center text-white max-w-sm px-4'>
        <div className='w-16 h-16 mx-auto mb-4 rounded-full bg-tertiary flex items-center justify-center'>
          🌍
        </div>
        <p className='text-sm font-medium mb-2'>Interactive Earth Model</p>
        <p className='text-xs opacity-75 mb-3'>Currently unavailable</p>
        <div className='text-xs opacity-60 space-y-1'>
          <p>This could be due to:</p>
          <ul className='text-left list-disc list-inside space-y-1 ml-2'>
            <li>Slow device or network connection</li>
            <li>Browser compatibility issues</li>
            <li>Graphics driver problems</li>
            <li>Low memory availability</li>
          </ul>
        </div>
        <p className='text-xs opacity-50 mt-3'>The rest of the portfolio works normally</p>
      </div>
    </div>
  );

  if (hasError || timedOut) {
    return renderFallback();
  }

  if (active) {
    return renderLoading();
  }

  return (
    <div className='relative w-full h-full'>
      <CanvasErrorBoundary onError={() => setHasError(true)}>
        <Canvas
          className='absolute inset-0'
          shadows
          frameloop='demand'
          dpr={[1, 2]}
          gl={{ preserveDrawingBuffer: true }}
          camera={{
            fov: 45,
            near: 0.1,
            far: 200,
            position: [-4, 3, 6],
          }}
        >
          <Suspense fallback={null}>
            <OrbitControls
              autoRotate
              enableZoom={false}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 2}
            />
            <Earth />

            <Preload all />
          </Suspense>
        </Canvas>
      </CanvasErrorBoundary>

      {hasError && (
        <div className='absolute inset-0'>{renderFallback()}</div>
      )}

      {!hasError && active && (
        <div className='absolute inset-0'>{renderLoading()}</div>
      )}

      {!hasError && timedOut && (
        <div className='absolute inset-0'>{renderFallback()}</div>
      )}
    </div>
  );
};

export default EarthCanvas;
