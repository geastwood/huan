import curry from 'lodash.curry';
import {reduce, contains, prop, compose, concat, push, tap, condition} from './fp';
import defaultTo from './defaultTo';
import always from './always';

export default curry((key, xs) => {
  var ls = [], hasKey = prop(key), has = compose(contains(ls), hasKey);
  return reduce((carry, v) => {
    return condition(has, always(carry), compose(concat(carry), tap(push(ls), hasKey)))(v);
  }, [], xs);
});
