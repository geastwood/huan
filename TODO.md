# TODO

- [ ] complete code examples in README
- [ ] write test for reduce.js
- [ ] extract mergeObj from fp.js

* research safeGet
```
var safeGet = curry((propName, dft, obj) => {
  var v;
  if (obj != null) {
    return (v = prop(propName, obj)) != null ? v : dft;
  }
  return dft;
});

// with the purpose to replace
if (v && v.length > 100) {
  // something
} else {
  // something else
}
```
var fields = ['timeStampAsDate', 'bidObserverClientId', 'type', 'userId', 'trackingServer', 'entryPoint'];
//var classNameMap = {
//  userId: 'col-md-4',
//  type: 'col-md-1',
//  bidObserverClientId: 'col-md-1',
//  entryPoint: 'col-md-1'
//};
//var getClassName = v => compose(map(defaultTo('col-md-2')), ap(classNameMap), map(prop))(v);
```
