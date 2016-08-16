var huan = require('../lib')['default'];
var mapObj = huan.mapObj;

exports.mapObj = t => {
  var de = t.deepEqual;

  de(mapObj(v => v, {}), {});

  de(
    mapObj(function({value}) {
      return value + 1;
    })({a: 1, b: 2}),
    {a: 2, b: 3}
  );

  de(
    mapObj(o => `${o.key}-${o.value + 1}`)({a: 1, b: 2}),
    {a: 'a-2', b: 'b-3'}
  );

  t.done();
};
