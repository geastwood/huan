import isPlainObject from 'lodash.isplainobject';
import curry from 'lodash.curry';
export default curry((f, u) => {
  return isPlainObject(u) ? Object.keys(u).reduce((carry, key) => {
    carry[key] = f(u[key]);
    return carry;
  }, {}) : u.map(v => f(v));
});