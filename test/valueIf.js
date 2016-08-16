var huan = require('../lib')['default'];

exports.valueIf = function(t) {
  var obj = {a: 'a_1', b: 'b_1', c: 'c_1'};
  var de = t.deepEqual;

  de(huan.valueIf(function(v) {
    return v.key !== 'a';
  }, obj), ['b_1', 'c_1']);
  de(huan.valueIf(huan.always(false), obj), []);
  de(huan.valueIf(huan.always(true), obj), ['a_1', 'b_1', 'c_1']);
  t.done();
};
