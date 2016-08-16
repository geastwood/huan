import reduce from './reduce';
import always from './always';

/**
 * [(a -> Bool)] -> (a -> Bool)
 */
export default (fns = []) => {
  // no condition -> return true
  if (fns.length === 0) {
    return always(true);
  }
  return v => reduce((rst, f) => (rst || f(v)), false, fns);
}
