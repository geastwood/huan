import reduceObj from './reduceObj';

/**
 * {String: a} -> [a]
 *
 * @param obj
 * @returns {*}
 */
export default obj => {
  return reduceObj((carry, v) => carry.concat(v.value), [], obj);
};
