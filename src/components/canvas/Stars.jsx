import { useState, useRef, Suspense, useEffect, Component } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

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
    console.log('Canvas error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <div className='w-full h-auto absolute inset-0 z-[-1] bg-primary'></div>;
    }

    return this.props.children;
  }
}

const Stars = (props) => {
  const ref = useRef();
  const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.2 }));

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color='#f272c8'
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  const [loaded, setLoaded] = useState(false);
  const [timedOut, setTimedOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!loaded) {
        setTimedOut(true);
      }
    }, 5000); // 5 seconds timeout

    return () => clearTimeout(timer);
  }, [loaded]);

  if (!checkWebGLSupport() || timedOut) {
    return <div className='w-full h-auto absolute inset-0 z-[-1] bg-primary'></div>;
  }

  return (
    <CanvasErrorBoundary>
      <div className='w-full h-auto absolute inset-0 z-[-1]'>
        <Canvas 
          camera={{ position: [0, 0, 1] }}
          onCreated={() => setLoaded(true)}
        >
          <Suspense fallback={<div className='w-full h-full bg-primary'></div>}>
            <Stars />
          </Suspense>

          <Preload all />
        </Canvas>
      </div>
    </CanvasErrorBoundary>
  );
};

export default StarsCanvas;
