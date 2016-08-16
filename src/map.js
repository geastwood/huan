import isPlainObject from 'lodash.isplainobject';
import reduce from './reduce';
import curry from './core/curry2';

/**
 * @level 1
 */
export default curry((f, u) => {
  return isPlainObject(u) ? reduce(f, {}, u) : u.map(v => f(v));
});
