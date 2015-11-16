import {curry} from 'lodash';
import {mcompose, extract, chain, id, map, compose, contains, reduce} from './fp';
import {Maybe} from './instance/Maybe';
import Either from './instance/Either';
import {debug} from './util';

/**
 * (a -> String) -> [a] -> {String: [a]}
 */
export var groupBy = curry((f, xs) => {
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
