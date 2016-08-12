import {reduce} from './fp';
import always from './always';

/**
 * [(a -> Bool)] -> (a -> Bool)
 */
export default (fns = []) => {
  // no condition -> return false
  if (fns.length === 0) {
    return always(false);
  }
  return v => reduce((rst, f) => (rst || f(v)), false, fns);
}
