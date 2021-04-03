import React, { useState } from 'react'
import { Image, StyleSheet } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'


import { Block, Text, Button, Divider, Slider, Switch, EditableField } from '../components'

import { theme, mocks } from '../constants'



const Settings = ({ navigation, profile }) => {

  const [budget, setBudget] = useState(340)
  const [monthCap, setMonthCap] = useState(2500)
  const [newsLetter, setNewsLetter] = useState(false)
  const [notifications, setNotifications] = useState(true)

  const [userProfile, setUserProfile] = useState({ username: "", location: "", email: "" })

  return (

    <Block padding={[0, theme.sizes.base * 2]} >
      <Block flex={false} row center space="between" style={styles.header}>
        <Text h1 bold >Settings</Text>
        <Button onPress={() => navigation.navigate('Settings')} style={styles.bgTransparent}>
          <Image source={profile.avatar}
            style={styles.avatar} />
        </Button>
      </Block>

      <ScrollView showsVerticalScrollIndicator={false}>
        <Block style={styles.inputs}>
          <EditableField
            label={"Username"}
            onChange={(value) => setUserProfile({ username: value })}
            value={userProfile.username || profile.username} />
          <EditableField
            label={"Location"}
            onChange={(value) => setUserProfile({ location: value })}
            value={userProfile.location || profile.location} />
          <EditableField
            label={"E-mail"}
            onChange={(value) => setUserProfile({ email: value })}
            value={userProfile.email || profile.email} />
        </Block>
        <Divider margin={theme.sizes.base, theme.sizes.base * 2} />
        <Block style={styles.slider}>
          <Slider
            max={profile.budget}
            value={budget}
            label="Budget"
            onChange={(value) => setBudget(value)}
          />
          <Slider
            max={profile.monthly_cap}
            value={monthCap}
            label="Monthly Cap"
            onChange={(value) => setMonthCap(value)}
          />
        </Block>
        <Divider />
        <Block style={styles.toggles} >
          <Block row center space="between" style={{ marginBottom: theme.sizes.base * 2 }}>
            <Text size={16} gray>Notifications</Text>
            <Switch
              value={notifications}
              onValueChange={value => setNotifications(value)}

            />
          </Block>
          <Block row center space="between" style={{ marginBottom: theme.sizes.base * 2 }}>
            <Text size={16} gray>NewsLetter</Text>
            <Switch
              value={newsLetter}
              onValueChange={value => setNewsLetter(value)}
            />
          </Block>
        </Block>
      </ScrollView>
    </Block >

  )
}

Settings.defaultProps = {
  profile: mocks.profile,
}

export default Settings

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: theme.sizes.base,
  },
  avatar: {
    height: theme.sizes.base * 2,
    width: theme.sizes.base * 2,
  },
  bgTransparent: {
    backgroundColor: 'transparent',
  },
  inputs: {
    paddingHorizontal: theme.sizes.base * 0.7,
    marginTop: theme.sizes.base * 2,
  },
  sliders: {
    paddingHorizontal: theme.sizes.base * 0.7,
    marginTop: theme.sizes.base * 2,
  },
  inputRow: {
    alignItems: 'flex-end'
  },
  thumb: {
    height: theme.sizes.base,
    width: theme.sizes.base,
    borderRadius: theme.sizes.base,
    borderColor: 'white',
    borderWidth: 3,
    backgroundColor: theme.colors.secondary

  },
  toggles: {
    paddingHorizontal: theme.sizes.base * 0.7,
    marginTop: theme.sizes.base * 2,
  },
})
