import {reduce} from './fp';
import curry3 from './core/curry3';

export default curry3((acc, init, obj) => {
  return reduce((carry, key) => {
    return acc(carry, {key, value: obj[key]});
  }, init, Object.keys(obj));
});
