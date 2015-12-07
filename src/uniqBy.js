import curry from 'lodash.curry';
import uniq from './core/uniq';

export default curry((f, xs) => {
  return uniq(xs, v => f(v));
});
