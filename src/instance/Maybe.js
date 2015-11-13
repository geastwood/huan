var inherit = function(parent, child) {
  var f = function() {};
  f.prototype = parent.prototype;
  child.prototype = new f();
  return child;
};

export var Maybe = function(v) {
  if (v == null) {
    return new Nothing()
  }
  return new Just(v);
};

Maybe.of = function(v) {
  return new Maybe(v);
};

export var Just = inherit(Maybe, function(v) {
  this.value = v;
});

Just.prototype.map = function(f) {
  return new Maybe(f(this.value));
};

Just.prototype.toString = function() {
  return 'Just';
}

export var Nothing = inherit(Maybe, function() {
  this.value = null;
});

Nothing.prototype.map = function() {
  return new Nothing();
};

Nothing.prototype.toString = function() {
  return 'Nothing';
}

