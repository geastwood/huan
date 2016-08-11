import curry2 from './core/curry2';
import always from './always';

/**
 * Number -> a -> [a]
 */
export default curry2((times, v) => Array.apply(null, Array(times)).map(always(v)));
