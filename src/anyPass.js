import {reduce, map, isObject, isArray} from './fp';
import curry from 'lodash.curry';
import reduceObj from './reduceObj';
import mapObj from './mapObj';

var acc = v => (carry, f) => carry || f(v);
var pred = (carry, status) => carry || status;

export default curry((xs, v) => {
  return isArray(v) ?
    reduce(pred, false, map(v_v => {
      return reduce(acc(v_v), false, xs);
    }, v)) :
    isObject(v) ?
      reduce(pred, false, reduceObj((c, v_v) => {
        return c.concat(reduce(acc(v_v), false, xs));
      }, [], v)) :
      reduce(acc(v), false, xs);
});
