import {curry} from 'lodash';
import Id from './instance/identity';
import {ifNothing, map, compose, contains, extract} from './huan';

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

  // a -> Maybe -> a -> b
  return xs.reduce((rst, x) => compose(branch(rst, x), ifNothing('@@error'), f)(x), {});
});

