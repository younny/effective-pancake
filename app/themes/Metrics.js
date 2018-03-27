import { Dimensions, Platform, PixelRatio } from 'react-native'

const { width, height } = Dimensions.get('window')

export default {
    screenWidth: width,
    screenHeight: height
}