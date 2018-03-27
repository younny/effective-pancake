//@flow

import * as React from 'react'
import {
    View,
    Text,
    Button
} from 'react-native'
import { connect } from 'react-redux'
import { startup } from '../../redux/startup/actions'
import style from './LoginScreen.style.js'

type Props = {
    navigator: any,
    startup: Function
};

class LoginScreen extends React.Component<Props> {

    componentDidMount(){
        this.props.startup()
    }

    _onPress = () => this.props.navigator.push({ screen: 'home.HomeScreen', title: 'Home Screen' })

    render() {
        return(
            <View style={style.container}>
                <View style={style.contentContainer}>
                    <Text> This is Login screen </Text>
                    <Button title={"Go Home"} onPress={this._onPress} />
                </View>
            </View>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        startup: () => dispatch(startup())
    }
}

export default connect(null, mapDispatchToProps)(LoginScreen)
