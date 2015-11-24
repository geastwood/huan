var values = require('../lib/values');

exports.values = function(t) {
  t.deepEqual(values({
    name: 'fei',
    knows: 'js',
    nothing: (void 0)
  }), ['fei', 'js', undefined]);
  t.done();
};
