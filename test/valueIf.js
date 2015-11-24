var valueIf = require('../lib/valueIf');

exports.valueIf = function(t) {
  var obj = {a: 'a_1', b: 'b_1', c: 'c_1'};
  t.deepEqual(valueIf(function(v) {
    return v.key !== 'a';
  }, obj), ['b_1', 'c_1']);
  t.done();
};
