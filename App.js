import React from 'react';
import { Image } from 'react-native'

import Welcome from './screens/Welcome'
import Login from './screens/Login'
import Signup from './screens/Signup'
import Forgot from './screens/Forgot'
import Browse from './screens/Browse'
import Explore from './screens/Explore'
import Settings from './screens/Settings'
import Product from './screens/Product'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import AppLoading from 'expo-app-loading';

import { Block } from './components'

import { useImageLoadAtStartup } from './hooks/useImageLoadAtStartup';
import { theme } from './constants';


const Stack = createStackNavigator()


export default function App({ skipLoadingScreen }) {
  const { isLaodingComplete, setIsloadingComplete,
    handleRessourceAsync } = useImageLoadAtStartup()

  if (!isLaodingComplete && !skipLoadingScreen) {
    return <AppLoading
      startAsync={handleRessourceAsync}
      onError={(error) => console.warn(error)}
      onfinish={setIsloadingComplete(true)}
    />
  }
  const SCREENS_OPTIONS =
  {
    title: null,
    headerStyle: {
      height: theme.sizes.base * 6,
      borderBottomColor: 'transparent',
      elevation: 0
    },
    headerLeftContainerStyle: {
      alignItems: 'center',
      marginLeft: 24,
      paddingRight: theme.sizes.base * 2,
    },
    headerRightContainerStyle: {},
    headerBackImage: () => <Image source={require('./assets/icons/back.png')} />,
    headerBackTitleVisible: false,
    headerBackTitle: null,
  }

  return (
    <Block>
      <NavigationContainer theme={{
        colors: {
          background: 'white'
        }
      }}>
        <Stack.Navigator>
          <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
          <Stack.Screen name="Login" component={Login} options={SCREENS_OPTIONS} />
          <Stack.Screen name="Signup" component={Signup} options={SCREENS_OPTIONS} />
          <Stack.Screen name="Forgot" component={Forgot} options={SCREENS_OPTIONS} />
          <Stack.Screen name="Browse" component={Browse} options={SCREENS_OPTIONS} />
          <Stack.Screen name="Settings" component={Settings} options={SCREENS_OPTIONS} />
          <Stack.Screen name="Explore" component={Explore} options={SCREENS_OPTIONS} />
          <Stack.Screen name="Product" component={Product} options={SCREENS_OPTIONS} />
        </Stack.Navigator>
      </NavigationContainer>
    </Block>
  );
}
