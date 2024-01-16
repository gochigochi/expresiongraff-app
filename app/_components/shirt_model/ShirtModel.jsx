import * as THREE from "three"
import React, { useRef } from "react"
import { useGLTF, Html, Svg } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"

const ShirtModel = (props) => {

    const modelRef = useRef()
    const { nodes, materials } = useGLTF("/tshirt.glb")

    useFrame((state, delta) => {
        const t = state.clock.getElapsedTime()
        modelRef.current.rotation.y = THREE.MathUtils.lerp(modelRef.current.rotation.y, Math.sin(t / 2) , 0.5)
    })

    return (
        <group ref={modelRef} {...props} dispose={null} position={[0, 0, 0]}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes["t-shirt002"].geometry}
                material={materials["FABRIC 1_FRONT_4193"]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={0.039}
            />
            <mesh>
                <Html position={[0, 0, 0]} transform occlude>
                    <div>Logo</div>
                </Html>
            </mesh>
        </group>
    )
}

useGLTF.preload("/tshirt.glb")

export default ShirtModel