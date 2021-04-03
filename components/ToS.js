import React from 'react'
import { Modal, ScrollView } from 'react-native'
import { Block, Text, Button } from '.'
import { theme } from '../constants'
const ToS = ({ showTerms, onValidate }) => {

  return (<Modal animationType="slide" visible={!!showTerms} >
    <Block padding={[theme.sizes.padding * 2, theme.sizes.padding]} space="between">
      <Text h2 light> Terms of Service  {showTerms}</Text>
      <ScrollView style={{ paddingVertical: theme.sizes.padding * 1.2 }}>
        <Text caption gray height={18}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit illo optio cumque voluptatum earum blanditiis eveniet vel error laboriosam nihil voluptatibus, eaque eius recusandae amet voluptates animi enim illum sint!</Text>
        <Text caption gray height={18}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit illo optio cumque voluptatum earum blanditiis eveniet vel error laboriosam nihil voluptatibus, eaque eius recusandae amet voluptates animi enim illum sint!</Text>
        <Text caption gray height={18}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit illo optio cumque voluptatum earum blanditiis eveniet vel error laboriosam nihil voluptatibus, eaque eius recusandae amet voluptates animi enim illum sint!</Text>
        <Text caption gray height={18}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit illo optio cumque voluptatum earum blanditiis eveniet vel error laboriosam nihil voluptatibus, eaque eius recusandae amet voluptates animi enim illum sint!</Text>
        <Text caption gray height={18}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit illo optio cumque voluptatum earum blanditiis eveniet vel error laboriosam nihil voluptatibus, eaque eius recusandae amet voluptates animi enim illum sint!</Text>
        <Text caption gray height={18}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit illo optio cumque voluptatum earum blanditiis eveniet vel error laboriosam nihil voluptatibus, eaque eius recusandae amet voluptates animi enim illum sint!</Text>
        <Text caption gray height={18}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit illo optio cumque voluptatum earum blanditiis eveniet vel error laboriosam nihil voluptatibus, eaque eius recusandae amet voluptates animi enim illum sint!</Text>
        <Text caption gray height={18}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit illo optio cumque voluptatum earum blanditiis eveniet vel error laboriosam nihil voluptatibus, eaque eius recusandae amet voluptates animi enim illum sint!</Text>
        <Text caption gray height={18}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit illo optio cumque voluptatum earum blanditiis eveniet vel error laboriosam nihil voluptatibus, eaque eius recusandae amet voluptates animi enim illum sint!</Text>
        <Text caption gray height={18}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit illo optio cumque voluptatum earum blanditiis eveniet vel error laboriosam nihil voluptatibus, eaque eius recusandae amet voluptates animi enim illum sint!</Text>
        <Text caption gray height={18}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit illo optio cumque voluptatum earum blanditiis eveniet vel error laboriosam nihil voluptatibus, eaque eius recusandae amet voluptates animi enim illum sint!</Text>
        <Text caption gray height={18} > Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit illo optio cumque voluptatum earum blanditiis eveniet vel error laboriosam nihil voluptatibus, eaque eius recusandae amet voluptates animi enim illum sint!</Text>
        <Text caption gray height={18}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit illo optio cumque voluptatum earum blanditiis eveniet vel error laboriosam nihil voluptatibus, eaque eius recusandae amet voluptates animi enim illum sint!</Text>
        <Text caption gray height={18}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit illo optio cumque voluptatum earum blanditiis eveniet vel error laboriosam nihil voluptatibus, eaque eius recusandae amet voluptates animi enim illum sint!</Text>
      </ScrollView>
      <Button gradient
        onPress={onValidate}
      >
        <Text center white> I understand</Text>
      </Button>
    </Block>
  </Modal>)

}

export default ToS
