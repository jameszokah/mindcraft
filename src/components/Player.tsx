import { useFrame, useThree } from "@react-three/fiber";
import { Triplet, useSphere } from "@react-three/cannon";
import { FC, useEffect, useRef } from "react";
import { Vector3 } from 'three'

const Player: FC = () => {

  const { camera } = useThree();

  const [ref, api] = useSphere(() => ({
    mass: 1,
    type: "Dynamic",
    position: [0, 2, 0],
  }));

  const pos = useRef<Triplet>([0, 0, 0]);

  useEffect(() => {
    api.position.subscribe((p: Triplet) => pos.current = p);
  }, [api.position])

  const vel = useRef<Triplet>([0, 0, 0]);

  useEffect(() => {
    api.velocity.subscribe((v: Triplet) => vel.current = v);
  }, [api.velocity])

  useFrame(() => {
    camera.position.copy(new Vector3(pos.current[0], pos.current[1], pos.current[2]));
  })

  return (
    <mesh ref={ref}></mesh>
  )
}

export default Player;