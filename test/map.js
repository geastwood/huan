var map = require('../lib')['default'].map;

exports.map = t => {
  var obj = {
    a: 1,
    b: 2
  };
  t.deepEqual(map(v => v + 1)(obj), {a: 2, b: 3});
  t.done();
};
