import { Navigation } from 'react-native-navigation'

import LoginScreen from './auth/LoginScreen'
import HomeScreen from './home/HomeScreen'

const registerScreens = (store, Provider) =>{
  Navigation.registerComponent('auth.LoginScreen', () => LoginScreen, store, Provider),
  Navigation.registerComponent('home.HomeScreen', () => HomeScreen)
}

export default registerScreens