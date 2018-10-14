import curry from './core/curry2'
import { prop } from './fp'

import uniq from './core/uniq'

export default curry((key, xs) => {
    return uniq(xs, prop(key))
})
