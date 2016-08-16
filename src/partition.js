import curry from './core/curry2';
import reduce from './reduce';

/**
 * split xs into two groups which are packed into an array
 * takes a `function` and a `list`
 * f -> predicate function, if true -> value will be in the first group, otherwise second group
 */

/**
 * (a -> Bool) -> [a] -> [[a], [a]]
 */
export default curry((f, xs) => {
  return reduce((carry, v) => {
    ((true === f(v)) ? carry[0] : carry[1]).push(v);
    return carry;
  }, [[], []], xs);
});
