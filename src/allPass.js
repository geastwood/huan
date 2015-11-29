import {reduce, map, isObject, isArray} from './fp';
import curry from 'lodash.curry';
import reduceObj from './reduceObj';
import mapObj from './mapObj';

var acc = v => (carry, f) => carry && f(v);
var pred = (carry, status) => carry && status;

/**
 * [(f -> Bool)] -> a -> Bool
 * @param xs
 */
export default curry((xs, v) => {
  return isArray(v) ?
    reduce(pred, true, map(v_v => {
      return reduce(acc(v_v), true, xs);
    }, v)) :
    isObject(v) ?
      reduce(pred, true, map(f => f(v), xs)) :
      reduce(acc(v), true, xs);
});
