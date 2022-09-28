import { usePlane } from "@react-three/cannon";
import { FC } from "react";
import { RepeatWrapping, NearestFilter } from 'three'
import { groundTexture } from "../lib/texture";

const Ground: FC = () => {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    position: [0, 0, 0]
  }))

  groundTexture.magFilter = NearestFilter
  groundTexture.wrapT = RepeatWrapping
  groundTexture.wrapS = RepeatWrapping
  groundTexture.repeat.set(100, 100)

  return <>
    <mesh ref={ref}>
      <planeBufferGeometry attach={"geometry"} args={[100, 100]} />
      <meshStandardMaterial attach={"material"} map={groundTexture} />
    </mesh>
  </>
}

export default Ground;