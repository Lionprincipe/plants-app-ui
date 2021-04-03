
import React from 'react'
import { Dimensions, StyleSheet, Image } from 'react-native'
import { Entypo } from '@expo/vector-icons'

import { Block, Text, Button, Input, Divider } from '../components'
import { mocks, theme } from '../constants'
import { FlatList, ScrollView } from 'react-native-gesture-handler'

const { width, height } = Dimensions.get('window')

const Product = ({ navigation, product }) => {

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button onPress={() => { }}>
          <Entypo name="dots-three-horizontal" color={theme.colors.gray} />
        </Button>
      ),
      headerRightContainerStyle: {
        alignItems: 'center',
        marginRight: 32,
        paddingLeft: theme.sizes.base * 2,
      },
    })
  }, []);
  const renderGallery = () => {

    return <FlatList
      horizontal
      pagingEnabled
      scrollEnabled
      showsHorizontalScrollIndicator={false}
      snapToAlignment="center"
      data={product.images}
      keyExtractor={(item, index) => `item${index}`}
      renderItem={({ item }) => (<Image source={item} resizeMode="contain"
        style={{ width, height: height / 3.1 }} />)}
    />
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {renderGallery()}
      <Block style={styles.product}>
        <Text h2 bold>{product && product.name}</Text>
        <Block flex={false} row margin={[theme.sizes.base, 0]}>
          {
            product.tags.map(tag => (
              <Text gray key={`tag-${tag}`} caption style={styles.tag}>{tag}</Text>
            ))
          }
        </Block>
        <Text light height={22} align="">{product && product.description}</Text>
        <Divider margin={[theme.sizes.padding * 0.9, 0]} />
        <Block>
          <Text semibold>Galery</Text>
          <Block row margin={[theme.sizes.padding * 0.9, 0]}>
            {product.images.slice(1, 3).map((image, index) => <Image source={image}
              style={styles.image}
              key={`gallery-${index}`} />)}
            <Block flex={false} style={styles.more} card center middle color="rgba(197,204,214,0.20)">
              <Text gray>{`+ ${product.images.slice(3).length}`}</Text>
            </Block>
          </Block>

        </Block>
      </Block>
    </ScrollView>
  )
}

Product.defaultProps = {
  product: mocks.products[0]
}

export default Product

const styles = StyleSheet.create({
  product: {
    paddingHorizontal: theme.sizes.base * 2,
    paddingVertical: theme.sizes.padding,
  },
  tag: {
    borderColor: theme.colors.gray,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: theme.sizes.base,
    paddingHorizontal: theme.sizes.base,
    paddingVertical: theme.sizes.base / 3,
    marginRight: theme.sizes.base * 0.625
  }
  , image: {
    width: (width - theme.sizes.base * 2) / 3,
    height: (width - theme.sizes.base * 2) / 3,
    marginRight: theme.sizes.base,
  },
  more: {
    width: 55,
    height: 55
  }
})
