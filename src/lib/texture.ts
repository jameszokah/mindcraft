import { TextureLoader } from 'three'
import {
  dirtImg,
  grassImg,
  glassImg,
  woodImg,
  logImg,
} from '../images/images'

export const dirtTexture = new TextureLoader().load(dirtImg)
export const grassTexture = new TextureLoader().load(grassImg)
export const glassexture = new TextureLoader().load(glassImg)
export const woodTexture = new TextureLoader().load(woodImg)
export const logTexture = new TextureLoader().load(logImg)
export const groundTexture = new TextureLoader().load(grassImg)
