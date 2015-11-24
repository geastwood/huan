import reduceObj from './reduceObj';

export default function(f, obj) {
  return reduceObj({}, (carry, item) => {
    if (true === f(item)) {
      carry[item.key] = item.value;
    }
    return carry;
  }, obj);
};
