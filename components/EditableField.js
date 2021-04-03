import React from 'react'
import { useState } from 'react'
import { StyleSheet, } from 'react-native'
import Block from './Block'
import Text from './Text'
import Button from './Button'
import { TextInput } from 'react-native-gesture-handler'
const EditableField = ({ onChange, label = "", value = "" }) => {

  const [editing, setEditing] = useState(false)

  return (
    <Block row space="between" margin={[10, 0]} style={styles.inputRow}>
      <Block>
        <Text gray2 style={{ marginBottom: 10 }}>{label}</Text>
        {!editing ? <Text bold>{value}</Text> : <TextInput
          defaultValue={value}
          onChangeText={text => onChange(text)}
        />}
      </Block>
      <Button onPress={() => setEditing(!editing)}>
        <Text medium secondary>{!editing ? 'Edit' : 'Save'}</Text>
      </Button>
    </Block>
  )
}

export default EditableField

const styles = StyleSheet.create({
  inputRow: {
    alignItems: 'flex-end'
  },
})
