import reduceObj from './reduceObj';
/**
 * (a -> Boolean) -> {String: a} -> [a]
 */
export default (f, obj) => {
  return reduceObj((carry, v) => carry.concat((true === f(v)) ? v.value : []), [], obj);
};