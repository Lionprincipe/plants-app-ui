import React, { useState } from 'react'
import { ActivityIndicator, Keyboard, KeyboardAvoidingView, StyleSheet } from 'react-native'

import { Block, Text, Button, Input } from '../components'
import { theme } from '../constants'
const Login = ({ navigation }) => {
  const VALID_EMAIL = "plants@app.com"
  const VALID_PASSWORD = "sanitizers"

  const [email, setEmail] = useState(VALID_EMAIL)
  const [password, setPassword] = useState(VALID_PASSWORD)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState([])

  const handleLogin = () => {
    Keyboard.dismiss()
    setLoading(true)
    setTimeout(() => {
      const errorFounded = []
      if (email !== VALID_EMAIL) {
        errorFounded.push("email")

      }
      if (password !== VALID_PASSWORD) {
        errorFounded.push("password")
      }
      setError(errorFounded)
      if (errorFounded.length) {
        setLoading(false)
      }
      else {
        navigation.navigate('Browse')
      }


    }, 20)
    //fake backend API

  }

  const hasErrors = key => error.includes(key) ? styles.hasErrors : null
  return (
    <KeyboardAvoidingView style={styles.login} behavior="padding">
      <Block padding={[0, theme.sizes.base * 2]}>
        <Text h1 bold>Login</Text>
        <Block middle>
          <Input
            error={hasErrors('email')}
            label="Email"
            style={[styles.input, hasErrors('email')]}
            defaultValue={email}
            onChangeText={text => setEmail(text)}
          />
          <Input
            secure
            error={hasErrors('password')}
            label="Password"
            style={[styles.input, hasErrors('password')]}
            defaultValue={password}
            onChangeText={text => setPassword(text)}
          />
          <Button gradient onPress={() => handleLogin()}>
            {loading ? <ActivityIndicator size="small" color="white" /> : <Text bold white center>Login</Text>}
          </Button>
          <Button onPress={() => navigation.navigate('Forgot')} style={styles.bgTransparent}>
            <Text gray caption center style={{ textDecorationLine: 'underline' }}>Password forgotten?</Text>
          </Button>
        </Block>
      </Block>
    </KeyboardAvoidingView>
  )
}

export default Login

const styles = StyleSheet.create({
  login: {
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
