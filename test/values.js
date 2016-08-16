var huan = require('../lib')['default'];

exports.values = function(t) {
  var de = t.deepEqual;
  var obj = {
    1: '1', 2: '2'
  };
  Object.defineProperty(obj, 'foo', {
    value: 'f'
  });

  de(huan.values({
    name: 'fei',
    knows: 'js',
    nothing: (void 0)
  }), ['fei', 'js', undefined]);

  de(huan.values({}), []);
  de(huan.values(obj), ['1', '2']);
  t.done();
};
