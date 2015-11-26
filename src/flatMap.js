import {curry} from 'lodash';
import {concat, reduce} from './fp';

/**
 * (a -> [a]) -> [a] -> [a]
 */
export default curry((f, xs) => reduce((carry, item) => concat(carry, f(item)), [], xs))