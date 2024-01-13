import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import store from './store';
import LandingAppStack from './navigation/LandingAppStack'

const appColor = '#000';
const App = () => {
  return (
    <>
      <StatusBar backgroundColor={appColor} barStyle="light-content" />
      <Provider store={store}>
        <NavigationContainer>
          <LandingAppStack/>
          {/* <TabNavigator/> */}
          {/* <AuthStack/> */}
        </NavigationContainer>
      </Provider>
    </>
  )
}

export default App;