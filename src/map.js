import isPlainObject from 'lodash.isplainobject';
import curry from './core/curry2';
export default curry((f, u) => {
  return isPlainObject(u) ? Object.keys(u).reduce((carry, key) => {
    carry[key] = f(u[key]);
    return carry;
  }, {}) : u.map(v => f(v));
});
