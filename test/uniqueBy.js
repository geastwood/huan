var uniqueBy = require('../lib/uniqueBy');

exports.uniqueBy = t => {
  t.deepEqual(uniqueBy('id')([
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
