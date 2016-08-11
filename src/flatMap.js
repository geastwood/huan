import curry from './core/curry2';
import {concat, reduce} from './fp';

/**
 * (a -> [a]) -> [a] -> [a]
 * @level 1
 */
export default curry((f, xs) => reduce((carry, item) => concat(carry, f(item)), [], xs))
