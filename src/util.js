export var inherit = function(parent, child) {
  var f = function() {};
  f.prototype = parent.prototype;
  child.prototype = new f();
  return child;
};

export var debug = v => {
  console.log(v);
  return v;
};
