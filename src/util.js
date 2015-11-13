export var inherit = function(parent, child) {
  var f = function() {};
  f.prototype = parent.prototype;
  child.prototype = new f();
  return child;
};
