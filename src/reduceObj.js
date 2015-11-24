import {reduce} from './fp';
export default function(init, f, obj) {
  return reduce((carry, key) => {
    return f(carry, {key, value: obj[key]});
  }, init, Object.keys(obj));
};
