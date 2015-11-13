export default class Identity {
  constructor(v) {
    this.value = v;
  }
  map(f) {
    return new Identity(f(this.value));
  }
  ap(v) {
    return new Identity(this.value(v.value));
  }
}

Identity.of = v => new Identity(v);