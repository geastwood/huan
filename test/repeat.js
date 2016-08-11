var huan = require('../lib/')['default'];
var repeat = huan.repeat;

exports.repeat = t => {
  var de = t.deepEqual;
  var v1 = 1;
  var f1 = () => {};
  var arr = [1,2,3];

  de(repeat(1, 1), [1]);
  de(repeat(0, 1), [], 'repeat 0 times should return empty array');
  de(repeat(3, 1), [1, 1, 1]);
  de(repeat(2)(f1), [f1, f1], 'repeat with function should work as well');
  de(repeat(3)(arr), [[1,2,3], [1,2,3], [1,2,3]]);
  t.done();
};

