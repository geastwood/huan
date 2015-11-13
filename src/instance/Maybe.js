import {inherit} from '../util';

export var Maybe = function(v) {
  if (v == null) {
    return new Nothing()
  }
  return new Just(v);
};

Maybe.of = v => new Maybe(v);

export var Just = inherit(Maybe, function(v) {
  this.value = v;
});

Just.prototype.map = function(f) {
  return new Maybe(f(this.value));
};

Just.prototype.extract = function() {
  return this.value;
};
Just.prototype.ap = function(v) {
  return new Maybe(this.value(v));
};

Just.prototype.toString = function() {
  return 'Just';
};

export var Nothing = inherit(Maybe, function() {
  this.value = null;
});

Nothing.prototype.map = function() {
  return new Nothing();
};
Nothing.prototype.ap = function() {
  return this;
};
Nothing.prototype.extract = function() {
  return null;
};

Nothing.prototype.toString = function() {
  return 'Nothing';
}
