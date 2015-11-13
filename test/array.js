var arr = require('../lib/');
var fp = require('../lib/fp');
var Maybe = require('../lib/instance/Maybe').Maybe;
var get = fp.get;

var id = get('id');
var id1 = get('id1');
var name = get('name');

exports.groupBy = function(t) {

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
    ];
  t.deepEqual(arr.groupBy(id1, data1),
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
