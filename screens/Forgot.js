import React, { useState } from 'react'
import { Alert, ActivityIndicator, Keyboard, KeyboardAvoidingView, StyleSheet } from 'react-native'

import { Block, Text, Button, Input } from '../components'
import { theme } from '../constants'
const Forgot = ({ navigation }) => {
  const VALID_EMAIL = "plants@app.com"

  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState([])

  const handleForgot = () => {
    const errorFounded = []
    Keyboard.dismiss()
    setLoading(true)

    if (email !== VALID_EMAIL) {
      errorFounded.push("email")

    }
    //fake backend API
    setError(errorFounded)
    setLoading(false)
    if (!errorFounded.length) {
      Alert.alert('Password Sent',
        'Please check your email.',
        [
          {
            text: 'OK', onPress: () => {
              navigation.navigate('Login')
            }
          }
        ],
        { cancelable: false }
      )
    }

    else {
      Alert.alert('Error',
        'Please check your email.',
        [
          {
            text: 'Try again',
          }
        ],
        { cancelable: false }
      )
    }
  }

  const hasErrors = key => error.includes(key) ? styles.hasErrors : null
  return (
    <KeyboardAvoidingView style={styles.forgot} behavior="padding">
      <Block padding={[0, theme.sizes.base * 2]}>
        <Text h1 bold>Forgot</Text>
        <Block middle>
          <Input
            error={hasErrors('email')}
            label="Email"
            style={[styles.input, hasErrors('email')]}
            defaultValue={email}
            onChangeText={text => setEmail(text)}
          />

          <Button gradient onPress={() => handleForgot()}>
            {loading ? <ActivityIndicator size="small" color="white" /> : <Text bold white center>Forgot</Text>}
          </Button>
          <Button onPress={() => navigation.goBack()} style={styles.bgTransparent}>
            <Text gray caption center style={{ textDecorationLine: 'underline' }}>Back to Login</Text>
          </Button>
        </Block>
      </Block>
    </KeyboardAvoidingView>
  )
}

export default Forgot

const styles = StyleSheet.create({
  forgot: {
    flex: 1,
    justifyContent: 'center'
  },
  input: {
    borderColor: 'transparent',
    borderRadius: 0,
    borderWidth: 0,
    borderBottomColor: theme.colors.gray2,
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  bgTransparent: {
    backgroundColor: 'transparent',
  },

  hasErrors: {
    borderBottomColor: theme.colors.accent
  }
})
