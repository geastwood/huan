import curry from 'lodash.curry';
import difference from './difference';
/**
 * v -> [k] -> {k: v} -> {k: v}
 */
export default curry((dft, props, obj) => {
  difference(props, Object.keys(obj)).forEach(key => obj[key] = dft);
  return obj;
});
