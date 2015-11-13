export default class Either {
  constructor(left, right) {
    this.left = left;
    this.right = right;
  }

  map(f) {
    if (this.right != null) {
      return new Either(f(this.left), this.right);
    }
    return new Either(this.left, f(this.right));
  }

  static of(left, right) {
    return new Either(left, right);
  }
}


