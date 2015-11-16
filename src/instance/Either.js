import {curry} from 'lodash';

var Either = class {
  constructor(left, right) {
    this.left = left;
    this.right = right;
  }

  map(f) {
    if (this.right == null) {
      return new Either(f(this.left), this.right);
    }
    return new Either(this.left, f(this.right));
  }
  extract() {
    return this.right == null ? this.left : this.right;
  }
  chain(f) {
    return f((this.right == null ? this.left : this.right));
  }
}

Either.of = curry(function (left, right) {
  return new Either(left, right);
});

export default Either;
