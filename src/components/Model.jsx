
import React from "react";
import { useGLTF } from "@react-three/drei";

export function Model({path, ...props}) {
  const { nodes, materials } = useGLTF(path);
  console.log(path)
  return (
    <group {...props} dispose={null}>
      <group
        position={[-0.025, 1.092, 0.375]}
        rotation={[1.482, 0, 0]}
        scale={[0.559, 2, 1]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane_1.geometry}
          material={materials.Front}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane_2.geometry}
          material={materials.Back}
        />
      </group>
    </group>
  );
}
