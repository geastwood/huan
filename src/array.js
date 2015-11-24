import {curry} from 'lodash';
import {mcompose, compose, contains, reduce, property, complement} from './fp';
import {pick, patch} from './object';
import {Maybe} from './instance/Maybe';
import Either from './instance/Either';

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

/**
 * k -> [k: v] -> [v]
 */
export var pluck = curry((prop, xs) => {
  return xs.map(property(prop));
});


/**
 * [k] -> [{k: v}] -> [{k: v}]
 */
export var project = curry((props, xs) => {
  return xs.map(compose(patch(props), pick(props)));
});

/**
 * [a] -> [a] -> [a]
 */
export var difference = curry((arr1, arr2) => arr1.filter(complement(contains(arr2))));