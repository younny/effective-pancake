import { Dimensions, Platform, PixelRatio } from 'react-native'

const { width, height } = Dimensions.get('window')

export default {
    screenWidth: width, //TODO. Handle device rotation.
    screenHeight: height,
    pd: {
        base: 10,
        double: 20
    }
}