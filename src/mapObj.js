import curry2 from './core/curry2'
import reduce from './reduce'

export default curry2(function(f, obj) {
    return reduce(
        (carry, key) => {
            carry[key] = f({ key, value: obj[key] })
            return carry
        },
        {},
        Object.keys(obj),
    )
})
