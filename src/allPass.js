import {reduce} from './fp';

/**
 * [(a -> Bool)] -> (a -> Bool)
 * @param fns
 */
export default fns => v => reduce((rst, f) => rst && f(v), true, fns);
