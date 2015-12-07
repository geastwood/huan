var uniqByKey = require('../lib/uniqByKey');
var uniqBy = require('../lib/uniqBy');

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
  t.done();
};
