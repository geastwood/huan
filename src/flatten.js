import curry from './core/curry2';
import {reduce, concat, isArray} from './fp'

// TODO support later ArrayLike
export default function flatten(xs) {
  return reduce((acc, v) => {
    return acc.concat(isArray(v) ? flatten(v) : v);
  }, [], xs);
}
