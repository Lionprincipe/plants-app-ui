import React from 'react'
import { StyleSheet, } from 'react-native'

import Block from './Block'
import Text from './Text'

import { theme, mocks } from '../constants'

import SliderNative from '@react-native-community/slider';
const Slider = ({ value = 0, label = "", min = 0, max = 100, onChange }) => {
  return (
    <Block margin={[10, 0]}>
      <Text gray2>{label}</Text>
      <SliderNative
        minimumValue={min}
        maximumValue={max}
        style={{ height: 45 }}
        thumbStyle={styles.thumb}
        minimumTrackTintColor={theme.colors.secondary}
        maximumTrackTintColor="rgba(157,163,180,0.10)"
        value={value}
        onValueChange={onChange}
      />
      <Text gray2 right>{`$ ${Math.floor(value)}`}</Text>
    </Block>
  )
}

export default Slider

const styles = StyleSheet.create({

})
