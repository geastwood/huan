import curry2 from './core/curry2';

export default curry2(function (f, obj) {
  return Object.keys(obj).reduce((carry, key) => {
    carry[key] = f({key, value: obj[key]});
    return carry;
  }, {});
});
