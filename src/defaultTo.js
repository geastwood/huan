import curry from './core/curry2'

/**
 * a -> b -> a | b
 * @level 0
 */
export default curry((d, v) => (v == null || (typeof v === 'number' && isNaN(v)) || v !== v ? d : v))
