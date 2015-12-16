import curry from './core/curry2';
import {prop, compose, splats, extract, mcompose} from './fp';
import map from './map';
import Maybe from './instance/Maybe';

export default curry((xs, obj) => {
  if (xs.length === 0) return obj;
  return compose(extract, splats(mcompose)(map(prop, xs.reverse())))(Maybe.of(obj));
});
