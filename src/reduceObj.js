import {reduce} from './fp';

export default (acc, init, obj) => {
  return reduce((carry, key) => {
    return acc(carry, {key, value: obj[key]});
  }, init, Object.keys(obj));
};
