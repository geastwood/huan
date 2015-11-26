import curry from 'lodash.curry';
import {prop} from './fp';

/**
 * k -> [k: v] -> [v]
 */
export default curry((k, xs) => xs.map(prop(k)));
