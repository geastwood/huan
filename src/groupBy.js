import curry from 'lodash.curry';
import {compose, contains, reduce} from './fp';
import defaultTo from './defaultTo';

/**
 * String k => (a -> k) -> [a] -> {k: [a]}
 */
export default curry((f, xs) => {
  var ls = [],
    hasFn = contains(ls),
    branch = curry((rst, x, key) => {
      if (hasFn(key)) {
        rst[key].push(x);
      } else {
        ls.push(key);
        rst[key] = [x];
      }
      return rst;
    });

  return reduce((rst, x) => compose(branch(rst, x), defaultTo('@@error'), f)(x), {}, xs);
});
