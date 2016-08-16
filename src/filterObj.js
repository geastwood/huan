import reduceObj from './reduceObj';
import curry2 from './core/curry2';

/**
 * ({k:v} -> Bool) -> {k:v} -> {k:v}
 * @level 1
 */
export default curry2((f, obj) => {
  return reduceObj((carry, item) => {
    if (true === f(item)) {
      carry[item.key] = item.value;
    }
    return carry;
  }, {}, obj);
});
