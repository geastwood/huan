import curry3 from './core/curry3'
import isPlainObject from 'lodash.isplainobject'

export default curry3((acc, init, xs) => {
    return isPlainObject(xs)
        ? Object.keys(xs).reduce((carry, key) => {
              init[key] = acc(xs[key])
              return init
          }, init)
        : xs.reduce(acc, init)
})
