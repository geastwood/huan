var arr = require('../lib/array');
var huan = require('../lib/huan');
var Maybe = require('../lib/instance/Maybe').Maybe;
var get = huan.get;
var id = Maybe.of(get('id'));
var id1 = Maybe.of(get('id1'));
var name = Maybe.of(get('name'));

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
