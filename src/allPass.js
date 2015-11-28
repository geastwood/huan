import {reduce} from './fp';
import curry from 'lodash.curry';

/**
 * [(f -> Bool)] -> a -> Bool
 * @param xs
 */
export default curry((xs, v) => {
  return reduce((carry, f) => carry && f(v), true, xs)
});
