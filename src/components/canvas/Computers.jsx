/* eslint-disable react/no-unknown-property */
import {Suspense,useEffect,useState,useRef} from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload,useGLTF } from '@react-three/drei'

import Loader from '../Loader'

const Computers = ({isMobile}) => {
  const computer=useGLTF('./desktop_pc/scene.gltf');
  
  
  return (
    <mesh>
      <hemisphereLight intensity={3.0} groundColor="black"/>
      <pointLight intensity={1.5}/>
      <spotLight position={[-1,5,0]}
      angle={-3}
      penumbra={1}
      intensity={5}
      castShadow
      shadow-mapSize={1024}
      >

      </spotLight>
      <primitive object={computer.scene}
      scale={isMobile?0.5:0.27}
      position={isMobile?[0, -3, -2.2]:[0, -1.7, -2.2]}
      rotation={[0, -1.5, 0]}
      />
    </mesh>
  )
}

const ComputersCanvas=()=>{
  const ref=useRef();
const [isMobile,setIsMobile]=useState(false)
  useEffect(()=>{
    
    // ref.current.dispose();
    // document.addEventListener('mousemove', onDocumentMouseMove, false);

    const mediaQuery=window.matchMedia("(max-width:500px)");
    setIsMobile(mediaQuery.matches)
  //   function onDocumentMouseMove( event ) {
  //     // Manually fire the event in OrbitControls
  //     ref.current.handleMouseMoveRotate(event);
  // }

    const handleMediaQueryChange=(event)=>{
      console.log('useeffect');
      setIsMobile(event.matches);
    }

    mediaQuery.addEventListener("change",handleMediaQueryChange);

    return()=>{
      mediaQuery.removeEventListener("change",handleMediaQueryChange);
    }

  },[])
  return(
    <Canvas frameloop='demand' shadows camera={{posiiton:[10,3,2],fov:25}}
    gl={{preserveDrawingBuffer:true}}>
      <Suspense fallback={<Loader />} >
        <OrbitControls 
        enableZoom={false}
        maxPolarAngle={Math.PI/2}
        minPolarAngle={Math.PI/2}
        ref={ref}
        />
      <Computers isMobile={isMobile}></Computers>
      </Suspense>
      <Preload all></Preload>
    </Canvas>

  )
}

export default ComputersCanvas