import React from "react";
import { Canvas } from "react-three-fiber";
import CameraController from "./CameraController";
import "./App.css";
function Box() {
  return (
    <mesh>
      <boxBufferGeometry attach="geometry" />
      <meshLambertMaterial attach="material" color="#76b5c5" />
    </mesh>
  );
}
function App() {
  return (
    <Canvas>
      <CameraController />
      <ambientLight />
      <spotLight intensity={0.3} position={[15, 20, 30]} />
      <Box />
    </Canvas>
  );
}

export default App;
