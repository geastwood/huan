var huan = require('../lib')['default'];

exports.valueIf = function(t) {
  var obj = {a: 'a_1', b: 'b_1', c: 'c_1'};
  t.deepEqual(huan.valueIf(function(v) {
    return v.key !== 'a';
  }, obj), ['b_1', 'c_1']);
  t.done();
};
