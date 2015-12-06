import curry from 'lodash.curry';
import {prop, compose, splats, extract} from './fp';
import map from './map';
import {Maybe} from './instance/Maybe';
import ap from './ap';
var mcompose = (...fns) => u => fns.reduceRight((v, f) => map(f, v), u);

export default curry((xs, obj) => {
  if (xs.length === 0) return obj;
  return compose(extract, splats(mcompose)(map(prop, xs.reverse())))(Maybe.of(obj));
});