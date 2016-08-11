import reduceObj from './reduceObj';

/**
 * (a -> Bool) -> {} -> {}
 * @level 1
 */
export default function(f, obj) {
  return reduceObj((carry, item) => {
    if (true === f(item)) {
      carry[item.key] = item.value;
    }
    return carry;
  }, {}, obj);
};
