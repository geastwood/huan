import curry2 from './core/curry2';
import {reduce} from './fp';

export default curry2((ks, xs = []) => {
  return reduce((o, k, i) => {
    o[k] = xs[i];
    return o;
  }, {}, ks);
});
