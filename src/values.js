import reduceObj from './reduceObj'

/**
 * {String: a} -> [a]
 *
 * @param obj
 * @returns {*}
 */
export default obj => reduceObj((carry, { value }) => carry.concat(value), [], obj)
