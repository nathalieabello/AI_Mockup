import { Canvas } from '@react-three/fiber'
import { Environment, Center } from '@react-three/drei';
import '../index.css'

import Shirt from './shirt';
import CameraRig from './camera';
import Backdrop from './backdrop';

const CanvasModel = () => {
  return (
    <Canvas
      shadows
      camera={{near: 0.1, far: 100, position: [0, 0, 2] }}
      gl={{ preserveDrawingBuffer: true }}
      id="canvas"
    >
      <ambientLight intensity={0.5} />
      <Environment preset="forest" />

      <CameraRig>
        <Backdrop/>
        <Center>
          <Shirt/>
        </Center>
      </CameraRig>
    </Canvas>
  )
}

export default CanvasModel