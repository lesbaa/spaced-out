import {
  CubeTextureLoader,
} from 'three'

const applyCubeTexture = ({
  scene,
  images = [
    'test.png',
    'test.png',
    'test.png',
    'test.png',
    'test.png',
    'test.png',
  ],
}) => {
  scene.background = new CubeTextureLoader()
    .setPath( 'textures/cubeMaps/' )
    .load([
      ...images,
    ])
}

export default applyCubeTexture
