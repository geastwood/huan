var Const = class {
  constructor(v) {
    this.value = v;
  }
  map() {
    return Const.of(this.value);
  }
};

Const.of = v => (new Const(v));

export default Const;



