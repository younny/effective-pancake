import R from 'ramda'
import Immutable from 'seamless-immutable'

const isImmutable = R.has('asMutable')

const toJS = (state) => state.asMutable({ deep: true })

const fromImmutable = R.when(isImmutable, toJS)

const toImmutable = (raw) => Immutable(raw)

export default {
    isImmutable,
    out: (state) => toImmutable(state),
    in: (raw) => fromImmutable(raw)
}