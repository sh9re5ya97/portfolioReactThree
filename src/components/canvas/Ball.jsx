import React,{Suspense} from 'react'
import {Canvas} from '@react-three/fiber'
import {Decal,Float,Preload,useTexture, OrbitControls} from '@react-three/drei'
import Loader from '../Loader'


const Ball = (props) => {
  const [decal]=useTexture([props.imgUrl]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} ></ambientLight>
      <directionalLight position={[0,0,0.05]}></directionalLight>
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1,1]}></icosahedronGeometry>
        <meshStandardMaterial color="#fff8eb" polygonOffset polygonOffsetFactor={-5} flatShading/>
        <Decal position={[0,0,1]} rotation={[2*Math.PI,0,6.25]} flatShading map={decal} ></Decal>
      </mesh>
    </Float>
  )
}

const BallCanvas=({icon})=>{
  return(
  <Canvas
  frameloop='demand' shadows camera={{position:[20,3,5],fov:25}}
  gl={{preserveDrawingBuffer:true}}
  >
   <Suspense fallback={<Loader />}>
    <OrbitControls
    enableZoom={false}
    maxPolarAngle={Math.PI/2}
    minPolarAngle={Math.PI/2}
    >
    </OrbitControls>
    <Ball imgUrl={icon}></Ball>
    </Suspense> 
    <Preload all></Preload>
  </Canvas>)
}


export default BallCanvas