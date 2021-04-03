import React, { useState } from 'react'
import { Alert, ActivityIndicator, Keyboard, KeyboardAvoidingView, StyleSheet } from 'react-native'

import { Block, Text, Button, Input } from '../components'
import { theme } from '../constants'
const Signup = ({ navigation }) => {

  const [username, setUsername] = useState(null)
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState([])

  const handleSignup = () => {
    const errorFounded = []
    Keyboard.dismiss()
    setLoading(true)

    if (!email) { errorFounded.push("email") }
    if (!username) { errorFounded.push("username") }
    if (!password) { errorFounded.push("password") }


    //fake backend API
    setError(errorFounded)
    setLoading(false)
    if (!errorFounded.length) {
      Alert.alert('Signup success',
        'Your account has beeen created.',
        [
          {
            text: 'Continue', onPress: () => {
              navigation.navigate('Browse')
            }
          }
        ],
        { cancelable: false }
      )
    }


  }

  const hasErrors = key => error.includes(key) ? styles.hasErrors : null
  return (
    <KeyboardAvoidingView style={styles.login} behavior="padding">
      <Block padding={[0, theme.sizes.base * 2]}>
        <Text h1 bold>Sign up</Text>
        <Block middle>
          <Input
            error={hasErrors('username')}
            label="Username"
            style={[styles.input, hasErrors('username')]}
            defaultValue={username}
            onChangeText={text => setUsername(text)}
          />
          <Input
            email
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
          <Button gradient onPress={() => handleSignup()}>
            {loading ? <ActivityIndicator size="small" color="white" /> : <Text bold white center>Sign up</Text>}
          </Button>
          <Button onPress={() => navigation.goBack()} style={styles.bgTransparent}>
            <Text gray caption center style={{ textDecorationLine: 'underline' }}>Back to Login</Text>
          </Button>
        </Block>
      </Block>
    </KeyboardAvoidingView>
  )
}

export default Signup

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
