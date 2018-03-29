import Fonts from './Fonts'
import Colors from './Colors'
import Metrics from './Metrics'

/* This file contains common styles from screens and components. */
export default {
    screen: {
        container: {
            flex: 1,
            padding: Metrics.pd.base
        }
    },
    component: {

    },
    layout: {
        centring: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
        },
        tableRow: {
            flex: 1,
            alignSelf: 'stretch',
            flexDirection: 'row'
        }
    }
}