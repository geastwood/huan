import {curry} from 'lodash';
import {mcompose, compose, contains, reduce} from './fp';
import {Maybe} from './instance/Maybe';
import Either from './instance/Either';

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

  return reduce(
    (rst, x) => compose(branch(rst, x), mcompose(Either.of('@@error'), Maybe.of), f)(x),
    {},
    xs
  );
});
