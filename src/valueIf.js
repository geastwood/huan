import reduceObj from './reduceObj'
/**
 * ({k:v} -> Boolean) -> {k:v} -> [v]
 */
export default (f, obj) => reduceObj((carry, v) => carry.concat(true === f(v) ? v.value : []), [], obj)
