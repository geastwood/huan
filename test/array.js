var arr = require('../lib/array');
var huan = require('../lib/huan');
var get = huan.get;

exports.groupBy = function(t) {
  var id = get('id'),
    name = get('name');

  t.deepEqual(arr.groupBy(id, [
      {id: 1, name: 'fei'},
      {id: 1, name: 'fei'},
      {id: 1, name: 'fei'}
    ]),
    {
      '1': [
        {id: 1, name: 'fei'},
        {id: 1, name: 'fei'},
        {id: 1, name: 'fei'}
      ]
    }
  );

  // empty return empty
  t.deepEqual(arr.groupBy(id, []), {});

  t.deepEqual(arr.groupBy(id, [
      {id: 1, name: 'fei'},
      {id: 1, name: 'fei'},
      {id: 1, name: 'fei'},
      {id: 2, name: 'fei'}
    ]),
    {
      '1': [
        {id: 1, name: 'fei'},
        {id: 1, name: 'fei'},
        {id: 1, name: 'fei'}
      ],
      2: [
        {id: 2, name: 'fei'}
      ]
    }
  );

  // group by name
  t.deepEqual(arr.groupBy(name, [
      {id: 1, name: 'fei'},
      {id: 1, name: 'fei'},
      {id: 1, name: 'fei'},
      {id: 2, name: 'fei'}
    ]),
    {
      'fei': [
        {id: 1, name: 'fei'},
        {id: 1, name: 'fei'},
        {id: 1, name: 'fei'},
        {id: 2, name: 'fei'}
      ]
    }
  );

  t.done();
};

exports['groupBy - key fn return undefined'] = function(t) {
  var data1 = [
      {id: 1, name: 'fei'},
      {id: 1, name: 'fei'},
      {id: 1, name: 'fei'},
      {id: 2, name: 'fei'}
    ],
    id = get('id1');

  t.deepEqual(arr.groupBy(id, data1),
    {
      '@@error': [
        {id: 1, name: 'fei'},
        {id: 1, name: 'fei'},
        {id: 1, name: 'fei'},
        {id: 2, name: 'fei'}
      ]
    }
  );
  t.done();
};
