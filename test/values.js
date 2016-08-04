var huan = require('../lib')['default'];

exports.values = function(t) {
  t.deepEqual(huan.values({
    name: 'fei',
    knows: 'js',
    nothing: (void 0)
  }), ['fei', 'js', undefined]);
  t.done();
};
