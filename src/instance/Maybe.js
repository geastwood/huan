import {inherit} from '../util';

var Maybe = function(v) {
  if (v == null) {
    return new Nothing()
  }
  return new Just(v);
};

Maybe.of = v => {
  if (v instanceof Maybe) {
    return v;
  }
  return new Maybe(v);
};

var Just = inherit(Maybe, function(v) {
  this.value = v;
});

Just.prototype.map = function(f) {
  return new Maybe(f(this.value));
};

Just.prototype.extract = function() {
  return this.value;
};
Just.prototype.ap = function(v) {
  return v.map(this.value);
};
Just.prototype.chain = function(f) {
  return f(this.value);
};

Just.prototype.toString = function() {
  return `Just:${this.value}`;
};

var Nothing = inherit(Maybe, function() {
  this.value = undefined;
});

Nothing.prototype.map = function() {
  return new Nothing();
};
Nothing.prototype.ap = function() {
  return this;
};
Nothing.prototype.extract = function() {
  return undefined;
};

Nothing.prototype.toString = function() {
  return 'Nothing';
};
Maybe.Just = Just;
Maybe.Nothing = Nothing;
export default Maybe;
