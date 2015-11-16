import {curry} from 'lodash';
import Id from './instance/identity';
import {ifNothing, map, compose, contains, reduce} from './fp';
import {Maybe} from './instance/Maybe';

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
    (rst, x) => compose(branch(rst, x), ifNothing('@@error'), Maybe.of, f)(x),
    {},
    xs
  );
});
