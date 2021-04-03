import React, { useState } from 'react'
import { Image, StyleSheet, Dimensions } from 'react-native'
import { ScrollView, TapGestureHandler, TouchableOpacity } from 'react-native-gesture-handler'

import { Block, Text, Button, Tab, Card, Badge } from '../components'

import { theme, mocks } from '../constants'

const { width, height } = Dimensions.get('window')
const DYNAMIC_ICON_SIZE = Math.round(width * 1.5 / 5)
const Browse = ({ navigation, profile, categories }) => {

  const tabs = ['Products', 'Inspirations', 'Shop']
  const [activeTab, setActiveTab] = useState(tabs[0])
  const currentTabData = categories.filter(({ tags }) => tags.some(el => el.toLowerCase() === activeTab.toLowerCase()))
  return (
    <Block padding={[0, theme.sizes.base * 2]} >
      <Block flex={false} row center space="between" style={styles.header}>
        <Text h1 bold >Browse</Text>
        <Button onPress={() => navigation.navigate('Settings')} style={styles.bgTransparent}>
          <Image source={mocks.profile.avatar}
            style={styles.avatar} />
        </Button>
      </Block>
      <Block flex={false} row center space="between" style={styles.tabs}>
        {tabs.map(tab => <Tab key={`tab-${tab}`} tab={tab} isActive={tab === activeTab} setActive={setActiveTab} />)}
      </Block>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ paddingVertical: theme.sizes.base * 2 }}
      >
        <Block flex={false} row space="between" style={styles.categories}>
          {currentTabData.map(
            (category) => <TouchableOpacity
              key={category.name}
              onPress={() => navigation.navigate('Explore', { category })}>
              <Card center middle shadow style={styles.category}>
                <Badge margin={[0, 0, 15]} size={50} color="rgba(41,216,143,0.20)">
                  <Image source={category.image} />
                </Badge>
                <Text medium height={20}> {category.name}</Text>
                <Text gray caption> {category.count} products</Text>
              </Card>
            </TouchableOpacity>
          )}
        </Block>
      </ScrollView>
    </Block>

  )
}

Browse.defaultProps = {
  profile: mocks.profile,
  categories: mocks.categories
}

export default Browse

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: theme.sizes.base * 2,
  },
  tabs: {
    borderBottomColor: theme.colors.gray2,
    borderBottomColor: StyleSheet.hairlineWidth,
    marginVertical: theme.sizes.base,
    marginHorizontal: theme.sizes.base * 2
  },


  avatar: {
    height: theme.sizes.base * 2,
    width: theme.sizes.base * 2,
  },
  bgTransparent: {
    backgroundColor: 'transparent',
  },
  category: {
    width: DYNAMIC_ICON_SIZE || 150,
    height: DYNAMIC_ICON_SIZE + 30 || 150,
  },
  categories: {
    flexWrap: 'wrap',
    paddingHorizontal: theme.sizes.base * 2,
    marginBottom: theme.sizes.base * 3.5

  }
})
