import curry from './core/curry2';
import {prop} from './fp';

/**
 * k -> [{k: v}] -> [v]
 */
export default curry((k, xs) => xs.map(prop(k)));
