import { Provider } from 'react-redux'
import { Navigation } from 'react-native-navigation'

import createStore from './store'
import registerScreens from './containers'

registerScreens(createStore(), Provider)

Navigation.startSingleScreenApp({
            screen: {
                screen: 'auth.LoginScreen',
                title: 'Login Screen'
            }
        })
