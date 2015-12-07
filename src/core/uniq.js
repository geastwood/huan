import {reduce, contains, compose, concat, push, tap, condition} from '../fp';
import always from '../always';

export default (xs, hasKey) => {
  var ls = [], has = compose(contains(ls), hasKey);
  return reduce((carry, v) => {
    return condition(has, always(carry), compose(concat(carry), tap(push(ls), hasKey)))(v);
  }, [], xs);
};
