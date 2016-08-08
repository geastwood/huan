import {reduce, isObject, isArray} from './fp';
import map from './map';
import curry2 from './core/curry2';

var acc = v => (carry, f) => carry && f(v);
var pred = (carry, status) => carry && status;

/**
 * [(* -> Bool)] -> * -> Bool
 * @param xs
 */
export default curry2((xs, v) => {
  return isArray(v) ?
    reduce(pred, true, map(v_v => {
      return reduce(acc(v_v), true, xs);
    }, v)) :
    isObject(v) ?
      reduce(pred, true, map(f => f(v), xs)) :
      reduce(acc(v), true, xs);
});
