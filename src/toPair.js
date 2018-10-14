import reduceObj from './reduceObj'

/**
 * {k:v} -> [[k,v]]
 */
export default reduceObj((carry, { key, value }) => carry.concat([[key, value]]))([])
