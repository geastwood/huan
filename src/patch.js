import {curry} from 'lodash';
import difference from './difference';
/**
 * [k] -> {k: v} -> {k: v}
 */
export default curry((dft, props, obj) => {
  difference(props, Object.keys(obj)).forEach(key => obj[key] = dft);
  return obj;
});
