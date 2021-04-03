import React, { useState } from 'react'
import { Animated, Dimensions, FlatList, Image, StyleSheet } from 'react-native'

import ToS from '../components/ToS'

import { Block, Text, Button } from '../components'
import { theme } from '../constants'


const { width, height } = Dimensions.get('window')

const Welcome = ({ navigation, illustrations }) => {
  const [selectedId, setSelectedId] = useState(1)
  const [showTerms, setShowTerms] = useState(false)
  const scrollX = new Animated.Value(0)


  const renderIllustrations = () => {

    return <FlatList
      horizontal
      pagingEnabled
      scrollEnabled
      showsHorizontalScrollIndicator={false}
      scrollEventThrottle={16}
      snapToAlignment="center"
      data={illustrations}
      extraData={selectedId}
      keyExtractor={(item) => `${item.id}`}
      renderItem={({ item }) => (<Image source={item.source} resizeMode="contain" style={{ width, height: height / 2, overflow: 'visible' }} />)}
      onScroll={Animated.event([
        { nativeEvent: { contentOffset: { x: scrollX } } }
      ], { useNativeDriver: false })}
    />
  }
  const renderSteps = () => {
    const stepPosition = Animated.divide(scrollX, width)
    return <Block row center middle style={styles.stepsContainer}>
      {illustrations && illustrations.map((item, index) => {
        const opacity = stepPosition.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [0.4, 1, 0.4],
          extrapolate: 'clamp'
        })
        return <Block animated flex={false} key={`step-${index}`} color="gray" style={[styles.steps, { opacity }]} />
      })}

    </Block>
  }
  return (

    <Block>
      <Block center bottom flex={0.4}>
        <Text h1 center bold>Your Home.
        <Text h1 primary> Greener.</Text>
        </Text>
        <Text h3 gray2 style={{ marginTop: theme.sizes.padding / 2 }}> Enjoy the experience.</Text>
      </Block>

      <Block center middle>
        {renderIllustrations()}
        {renderSteps()}
      </Block>

      <Block middle flex={0.5} margin={[0, theme.sizes.padding * 2]}>
        <Button gradient onPress={() => navigation.navigate('Login')}>
          <Text center semibold white>Login</Text>
        </Button>
        <Button shadow onPress={() => navigation.navigate('Signup')}>
          <Text center semibold>Signup</Text>
        </Button>
        <Button onPress={() => setShowTerms(true)} style={styles.tosBtn} >
          <Text center caption gray>Terms of Services</Text>
        </Button>
      </Block>
      <ToS showTerms={showTerms} onValidate={() => {
        setShowTerms(false)
      }} />
    </Block>
  )
}

Welcome.defaultProps = {
  illustrations: [
    { id: 1, source: require('../assets/images/illustration_1.png') },
    { id: 2, source: require('../assets/images/illustration_2.png') },
    { id: 3, source: require('../assets/images/illustration_3.png') },
  ]
}

export default Welcome

const styles = StyleSheet.create({
  stepsContainer: {
    position: 'absolute',
    bottom: theme.sizes.base * 3,
    right: 0,
    left: 0,


  },
  steps: {
    width: 5,
    height: 5,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  tosBtn: { backgroundColor: 'transparent' }
})


