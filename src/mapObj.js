export default function (f, obj) {
  return Object.keys(obj).reduce((carry, key) => {
    carry[key] = f({key, value: obj[key]});
    return carry;
  }, {});
};
