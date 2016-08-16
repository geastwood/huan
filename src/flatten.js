import {isArray} from './fp';
import reduce from './reduce';

// TODO support later ArrayLike
export default function flatten(xs) {
  return reduce((acc, v) => {
    return acc.concat(isArray(v) ? flatten(v) : v);
  }, [], xs);
}
