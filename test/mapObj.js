var fp = require('../lib/fp');
var mapObj = require('../lib/mapObj');

exports.mapObj = t => {
  t.deepEqual(mapObj(v => v, {}), {});

  t.deepEqual(
    mapObj(function(o) {
      return o.value + 1;
    })({a: 1, b: 2}),
    {a: 2, b: 3}
  );

  t.deepEqual(
    mapObj(o => `${o.key}-${o.value + 1}`)({a: 1, b: 2}),
    {a: 'a-2', b: 'b-3'}
  );

  t.done();
};
