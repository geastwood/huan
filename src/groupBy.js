import curry from 'lodash.curry';
import {id, tap, push, concat, compose, contains, reduce, prop, condition} from './fp';
import always from './always';
import defaultTo from './defaultTo';

/**
 * String k => (a -> k) -> [a] -> {k: [a]}
 */
export default curry((f, xs) => {
  var ls = [];

  // reduce [] to an {}
  return reduce((rst, obj) => {
    return compose(
      condition(
        contains(ls),
        compose(always(rst), key => rst[key].push(obj)),
        compose(always(rst), push(ls), tap(v => rst[v] = [obj], id))
      ),
      defaultTo('@@error'), f)(obj)
  }, {}, xs);
});
