import React from 'react'
import { useState } from 'react'
import { Animated, StyleSheet, Dimensions, Image } from 'react-native'
import { useRef } from "react";
import { FontAwesome } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window')

import { Block, Text, Button, Input } from '../components'
import { mocks, theme } from '../constants'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';


const Explore = ({ images, navigation }) => {
  const searchFocus = useRef(new Animated.Value(0.6)).current;


  const [searchString, setSearchString] = useState('')

  const renderImage = (img, index) => {
    const sizes = Image.resolveAssetSource(img)
    const fullWidth = width - (theme.sizes.base * 2)
    const resize = (sizes.width * 100) / fullWidth
    const imgWidth = resize > 75 ? fullWidth : sizes.width * 1.25

    return <TouchableOpacity
      key={`img-${index}`}
      onPress={() => navigation.navigate('Product')}
    >
      <Image
        source={img}
        style={[styles.image,
        { minWidth: imgWidth, maxWidth: imgWidth, }
        ]} />
    </TouchableOpacity>
  }

  const handleSearchFocus = (status) => {
    Animated.timing(searchFocus, {
      toValue: status ? 0.8 : 0.6,
      duration: 150,//ms
      useNativeDriver: false
    }).start()
  }

  const renderSearch = () => {
    const isEditing = searchFocus && searchString
    return <Block middle animated flex={searchFocus} style={styles.search}>
      <Input
        onFocus={() => handleSearchFocus(true)}
        onBlur={() => handleSearchFocus(false)}
        onRightPress={() => isEditing ? setSearchString(null) : null}
        style={styles.searchInput}
        placeholder={isEditing ? "Search" : 'close'}
        placeholderTextColor={theme.colors.gray2}
        value={searchString}
        onChangeText={text => setSearchString(text)}
        rightStyle={styles.searchRight}
        rightLabel={
          <FontAwesome
            name="search"
            size={theme.sizes.base / 1.6}
            color={theme.colors.gray}
            style={styles.searchIcon}
          />
        }
      />
    </Block>
  }
  const renderExplore = () => {
    const mainImage = images[0]
    return (<Block style={{ marginBottom: height / 3 }}>

      <TouchableOpacity
        onPress={() => navigation.navigate('Product')}
      >
        <Image source={mainImage}
          style={[styles.image, styles.mainImage]}
        />
      </TouchableOpacity>

      <Block row space="between" wrap>
        {
          images.slice(1).map(renderImage)
        }
      </Block>
    </Block>)
  }

  const renderFooter = () => {
    return (<LinearGradient
      locations={[0, 1]}
      style={styles.footer}
      colors={['rgba(255,255,255,0)', 'rgba(255, 255, 255, 1)']
      }
    >
      <Button gradient style={{ width: width / 2.678 }}>
        <Text bold white center> Filter</Text>
      </Button>
    </LinearGradient>
    )
  }


  return (

    <Block>
      <Block flex={false} row center space="between" style={styles.header}>
        <Text h1 bold>Explore</Text>
        {renderSearch()}
      </Block>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.explore}

      >
        {renderExplore()}
      </ScrollView>

      {renderFooter()}
    </Block>
  )
}

Explore.defaultProps = {
  images: mocks.explore
}

export default Explore


const styles = StyleSheet.create({
  header: {
    paddingHorizontal: theme.sizes.base * 2,
    paddingBottom: theme.sizes.base * 2,
  },
  explore: {
    marginHorizontal: theme.sizes.base * 1.25,
  },
  image: {
    minHeight: 100,
    maxHeight: 130,
    maxWidth: width - (theme.sizes.padding * 2.5),
    marginBottom: theme.sizes.base,
    borderRadius: 4
  },
  mainImage: {
    minWidth: width - (theme.sizes.padding * 2),
    minHeight: width - (theme.sizes.padding * 2),
    maxHeight: width - (theme.sizes.padding * 2)
  },
  search: {
    height: theme.sizes.base * 2,
    width: width - theme.sizes.base * 2
  },
  searchInput: {
    fontSize: theme.sizes.caption * 1.2,
    height: theme.sizes.base * 2,
    backgroundColor: "rgba(142, 142, 147, 0.06)",
    borderColor: "rgba(142, 142, 147, 0.05)",
    paddingLeft: theme.sizes.base / 1.333,
    paddingRight: theme.sizes.base * 1.5
  },
  searchRight: {
    top: 0,
    marginVertical: 0,
    backgroundColor: "transparent"
  },
  searchIcon: {
    position: 'absolute',
    right: theme.sizes.base / 1.333,
    top: theme.sizes.base / 1.6,
  },

  footer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    overflow: 'visible',
    alignItems: 'center',
    justifyContent: 'center',
    height: height * 0.1,
    width,
    paddingBottom: theme.sizes.base * 4
  }

})

