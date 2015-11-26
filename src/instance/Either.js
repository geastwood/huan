import curry from 'lodash.curry';
import {falcy} from '../fp';

var Either = class {
  constructor(left, right) {
    this.left = left;
    this.right = right;
  }

  map(f) {
    if (falcy(this.right)) {
      return new Either(f(this.left), this.right);
    }
    return new Either(this.left, f(this.right));
  }
  extract() {
    return falcy(this.right) ? this.left : this.right;
  }
  chain(f) {
    return f(((falcy(this.right))? this.left : this.right));
  }
}

Either.of = curry(function (left, right) {
  return new Either(left, right);
});

export default Either;
