import reduce from './reduce';
import always from './always';

/**
 * [(a -> Bool)] -> (a -> Bool)
 * @param fns
 */
export default (fns = []) => {
  if (fns.length === 0) {
    return always(true);
  }

  return v => reduce((rst, f) => rst && f(v), true, fns);
}
