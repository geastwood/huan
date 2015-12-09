import curry from '../lib/core/curry2';

export var repeat = curry((time, f) => {
  while (--time >= 0) {
    f();
  }
});
