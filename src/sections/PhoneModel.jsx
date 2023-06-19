import React, { Suspense } from "react";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { Environment} from "@react-three/drei";
import { Model } from "../assets/3D-Model/Scene.jsx";

const Container = styled.div`
  width: 100vw;
  height: 100vh;

  position: fixed;
  top: 0;
  z-index: 1;
  background-color: transparent;
`;

const PhoneModel = () => {
  return (
    <Container id="phone-model">
      <Canvas camera={{fov:14}}>
        {/* <axesHelper args={[5]} /> */}
        <ambientLight intensity={3} />
        <directionalLight intensity={1} />
        <Suspense fallback={null}>
        <Model />
        </Suspense>
        <Environment preset="sunset"/>
      </Canvas>
    </Container>
  );
};

export default PhoneModel;
