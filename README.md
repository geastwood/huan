## API

### defaultTo

`a -> b -> a | b`

```javascript
var hasDefault = huan.defaultTo(42);
hasDefault(null); // 42
hasDefault(20); // 20
```

### chunk

`Number n => n -> [a] -> [[a]]`

### flatMap

`(a -> [a]) -> [a] -> [a]`

### difference

`[a] -> [a] - [a]`

### mapObj

### filterObj

### reduceObj

### omit

`[k] -> {k: v} -> {k: v}`

### pick

`[k] -> {k: v} -> {k: v}`

### pluck

`String a => a -> [{a: v}] -> [v]`

### project

`[k] -> [{k: v}] -> [{k: v}]`

### pair

`[a] -> [[a]]`

### patch

`v -> [k] -> {k: v} -> {k: v}`

### valueIf

`(a -> Bool) -> {k: v} -> [v]`

### values

`{k: v} -> [v]`

### groupBy

`String k => (a -> k) -> [a] -> {k: [a]}`

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

