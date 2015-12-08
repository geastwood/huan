import curry from 'lodash.curry';
export var repeat = curry((time, f) => {
  while (--time >= 0) {
    f();
  }
});
