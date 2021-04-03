import React from 'react'
import { StyleSheet } from 'react-native'
import { Text } from '.'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { theme } from '../constants'

const Tab = ({ tab, isActive, setActive }) => {
  return (
    <TouchableOpacity

      style={[styles.tab, isActive ? styles.active : null]}
      onPress={() => setActive(tab)}
    >
      <Text size={16} medium gray={!isActive} secondary={isActive}>{tab}</Text>
    </TouchableOpacity>
  )
}

export default Tab

const styles = StyleSheet.create({
  active: {
    borderBottomColor: theme.colors.secondary,
    borderBottomWidth: 3
  },
  tab: {
    marginRight: theme.sizes.base * 2,
    paddingBottom: theme.sizes.base,
  }
})
