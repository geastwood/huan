import {curry} from 'lodash';

/**
 * (a -> Bool) -> [a] -> [[a], [a]]
 */
export default curry((f, xs) => {
  return xs.reduce((carry, v) => {
    ((true === f(v)) ? carry[0] : carry[1]).push(v);
    return carry;
  }, [[], []]);
});