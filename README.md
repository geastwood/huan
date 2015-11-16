## API

### groupBy

Splits a list into sub-lists stored in an object, based on the result of calling
 a String-returning function on each element,
 and grouping the results according to values returned.

Dispatches to the groupBy method of the second argument, if present.

Acts as a transducer if a transformer is given in list position.

```javascript
huan.groupBy(function(lang) {
    return (lang.name === 'js' || lang.name === 'php') ? 'not-typed' : 'type';
  },
  {
    'not-typed': [{name: 'js'}, {name: 'php'}],
    typed: [{name: 'scala'}, {name: 'haskell'}]
  }
);
```
