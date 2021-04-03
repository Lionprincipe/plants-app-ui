import { Asset } from 'expo-asset'
import { useState } from 'react'
const images = [
  require('../assets/icons/back.png'),
  require('../assets/icons/plants.png'),
  require('../assets/icons/seeds.png'),
  require('../assets/icons/sprayers.png'),
  require('../assets/icons/pots.png'),
  require('../assets/icons/fertilizers.png'),

  require('../assets/images/plants_1.png'),
  require('../assets/images/plants_2.png'),
  require('../assets/images/plants_3.png'),

  require('../assets/images/explore_1.png'),
  require('../assets/images/explore_2.png'),
  require('../assets/images/explore_3.png'),
  require('../assets/images/explore_4.png'),
  require('../assets/images/explore_5.png'),
  require('../assets/images/explore_6.png'),

  require('../assets/images/avatar.png'),

]


export const useImageLoadAtStartup = () => {
  const [isLaodingComplete, setIsloadingComplete] = useState(false)
  const handleRessourceAsync = async () => {
    const cacheImages = images.map(image => {
      return Asset.fromModule(image).downloadAsync()
    })
    return Promise.all(cacheImages)
  }
  return {
    isLaodingComplete,
    handleRessourceAsync,
    setIsloadingComplete
  }
}