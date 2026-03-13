import React, { Suspense, useState, useEffect, Component } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Preload,
  useGLTF,
  useProgress,
} from "@react-three/drei";

import CanvasLoader from "../Loader";

const checkWebGLSupport = () => {
  try {
    const canvas = document.createElement("canvas");
    return !!(
      window.WebGLRenderingContext && canvas.getContext("webgl")
    );
  } catch (e) {
    return false;
  }
};

class CanvasErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log("Earth Canvas error:", error, errorInfo);
    if (this.props.onError) this.props.onError();
  }

  render() {
    if (this.state.hasError) return null; // parent handles fallback UI
    return this.props.children;
  }
}

const Earth = () => {
  const { scene } = useGLTF("/planet/scene.gltf", true, false);

  const hasInvalidPositions = React.useMemo(() => {
    if (!scene) return false;
    let invalid = false;
    scene.traverse((child) => {
      if (child.isMesh && child.geometry?.attributes?.position) {
        const arr = child.geometry.attributes.position.array;
        for (let i = 0; i < arr.length; i++) {
          if (!Number.isFinite(arr[i])) {
            invalid = true;
            break;
          }
        }
      }
    });
    return invalid;
  }, [scene]);

  if (hasInvalidPositions) return null;

  return (
    <primitive object={scene} scale={2.5} position-y={0} rotation-y={0} />
  );
};

// Reads loading progress from inside the Canvas tree and reports it up
const ProgressTracker = ({ onProgress }) => {
  const { active, progress } = useProgress();

  useEffect(() => {
    onProgress({ active, progress });
  }, [active, progress, onProgress]);

  return null;
};

const FallbackUI = ({ message, detail }) => (
  <div className="w-full h-full bg-primary flex items-center justify-center rounded-2xl">
    <div className="text-center text-white max-w-sm px-4">
      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-tertiary flex items-center justify-center">
        🌍
      </div>
      <p className="text-sm font-medium mb-2">{message}</p>
      {detail && <p className="text-xs opacity-50 mt-1">{detail}</p>}
    </div>
  </div>
);

const LoadingOverlay = ({ progress }) => (
  <div className="absolute inset-0 bg-primary flex items-center justify-center rounded-2xl z-10">
    <div className="text-center text-white max-w-xs">
      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-tertiary flex items-center justify-center">
        🌍
      </div>
      <p className="text-sm font-medium mb-2">Loading Interactive Earth Model</p>
      <div className="w-48 bg-gray-700 rounded-full h-2 mb-2 mx-auto">
        <div
          className="bg-blue-500 h-2 rounded-full transition-all duration-300 ease-out"
          style={{ width: `${Math.round(progress)}%` }}
        />
      </div>
      <p className="text-xs opacity-75">{Math.round(progress)}% loaded</p>
      <p className="text-xs opacity-50 mt-1">
        This may take a moment on slower devices
      </p>
    </div>
  </div>
);

const EarthCanvas = () => {
  const [hasError, setHasError] = useState(false);
  const [hasWebGL] = useState(() => checkWebGLSupport());
  const [timedOut, setTimedOut] = useState(false);
  const [loadState, setLoadState] = useState({ active: false, progress: 0 });

  // Timeout: if still loading after 15s, give up
  useEffect(() => {
    if (!hasWebGL) return;

    const timer = setTimeout(() => {
      setTimedOut(true);
    }, 15000);

    return () => clearTimeout(timer);
  }, [hasWebGL]);

  // Clear timeout once loading finishes
  const isLoaded = !loadState.active && loadState.progress >= 100;

  useEffect(() => {
    if (isLoaded) setTimedOut(false); // loaded in time, cancel any stale flag
  }, [isLoaded]);

  // ── No WebGL ──
  if (!hasWebGL) {
    return (
      <FallbackUI
        message="Interactive Earth Model"
        detail="Your browser doesn't support WebGL"
      />
    );
  }

  // ── Errored or timed-out (and not loaded) ──
  if (hasError || (timedOut && !isLoaded)) {
    return (
      <FallbackUI
        message="Interactive Earth Model"
        detail="Currently unavailable — the rest of the portfolio works normally"
      />
    );
  }

  // ── Main render: Canvas is ALWAYS mounted, overlay sits on top while loading ──
  return (
    <div className="relative w-full h-full">
      <CanvasErrorBoundary onError={() => setHasError(true)}>
        <Canvas
          className="absolute inset-0"
          shadows
          frameloop="demand"
          dpr={[1, 2]}
          gl={{ preserveDrawingBuffer: true }}
          camera={{
            fov: 45,
            near: 0.1,
            far: 200,
            position: [-4, 3, 6],
          }}
        >
          <Suspense fallback={<CanvasLoader />}>
            <OrbitControls
              autoRotate
              enableZoom={false}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 2}
            />
            <Earth />
            <Preload all />
          </Suspense>

          {/* Reads useProgress inside Canvas tree → reports to parent */}
          <ProgressTracker onProgress={setLoadState} />
        </Canvas>
      </CanvasErrorBoundary>

      {/* Loading overlay — sits ON TOP of the Canvas, doesn't unmount it */}
      {loadState.active && !isLoaded && (
        <LoadingOverlay progress={loadState.progress} />
      )}
    </div>
  );
};

export default EarthCanvas;