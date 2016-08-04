var huan = require('../lib')['default'];
var uniqByKey = huan.uniqByKey;
var uniqBy = huan.uniqBy;

exports.uniqByKey = t => {
  t.deepEqual(uniqByKey('id')([
    {name: 'fei', id: 1},
    {name: 'liu', id: 2},
    {name: 'fl', id: 3},
    {name: 'fei', id: 1},
    {name: 'fei'},
    {name: 'fei'}
  ]), [
    {name: 'fei', id: 1},
    {name: 'liu', id: 2},
    {name: 'fl', id: 3},
    {name: 'fei'}
  ]);
  t.done();
};
exports.uniqBy = t => {
  var id = v => v.id;
  t.deepEqual(uniqBy(id)([
    {name: 'fei', id: 1},
    {name: 'liu', id: 2},
    {name: 'fl', id: 3},
    {name: 'fei', id: 1},
    {name: 'fei'},
    {name: 'fei'}
  ]), [
    {name: 'fei', id: 1},
    {name: 'liu', id: 2},
    {name: 'fl', id: 3},
    {name: 'fei'}
  ]);
  t.deepEqual(uniqBy(Math.abs, [-1, -5, 2, 10, 1, 2]), [-1, -5, 2, 10])
  t.done();
};
