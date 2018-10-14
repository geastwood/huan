import curry from './core/curry2'
import uniq from './core/uniq'

export default curry((f, xs) => {
    return uniq(xs, v => f(v))
})
