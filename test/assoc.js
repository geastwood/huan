var huan = require('../lib/')['default'];
var assoc = huan.assoc;

exports.assoc = t => {
  var de = t.deepEqual;
  var v1 = 'v1';
  var k1 = 'k1';
  var k2 = 'k2';
  var k3 = 'k3';
  var k4 = 'k4';

  de(assoc(['k1', 'k2'], []), {k1: undefined, k2: undefined});
  de(assoc(['k1', 'k2'], undefined), {k1: undefined, k2: undefined});
  de(assoc(['k1', 'k2'], ['v1', 'v2']), {k1: 'v1', k2: 'v2'});
  de(assoc(['k1', 'k2'], [v1, v1]), {k1: 'v1', k2: 'v1'});
  de(assoc(['k1', 'k2'], [v1, v1]), {k1: 'v1', k2: 'v1'});
  de(assoc([k1, k2, k3, k4], [v1, v1]), {k1: 'v1', k2: 'v1', k3: undefined, k4: undefined});
  de(assoc([k1], [v1, v1]), {k1: 'v1'});
  de(assoc([], []), {});
  t.done();
};

