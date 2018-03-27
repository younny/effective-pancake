//@flow
import * as React from 'react'

import {
    View,
    Text
} from 'react-native'

type Props = {
    recipes: Array<Object>
};

class HomeScreen extends React.Component<Props> {
    render() {
        return (
            <View>
                <Text>Home Screen</Text>
            </View>
        )
    }
}

export default HomeScreen