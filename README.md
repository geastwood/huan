# API

## Reflection
`* -> Bool`

### isPlainObject
check parameter is an object, delegate to lodash.isPlainObject which is,
    > Checks if value is a plain object, that is, an object created by the Object constructor or one with a [[Prototype]] of null.

### isArray
check parameter is an array.

### isUndefined
check against `undefined`.

## Array

### concat
`[*] -> [*] -> [*]`
concat two arrays.

### push
`a -> [a] -> [a]`
push an element to array.

## General

### id
`a -> a`
identity function.

### defaultTo

`a -> b -> a | b`
a function accepts a default value and returns a new function. This function 
will return the passed value if it is not one of `null`, `undefined` or `NaN`

```javascript
var hasDefault = huan.defaultTo(42);
hasDefault(null); // 42
hasDefault(20); // 20
```

### chunk
a function first takes a number `n`, which determine how to split the second parameter `xs`, which 
is a list. 
`Number n => n -> [a] -> [[a]]`
```
var a = [1,2,3,4,5];
var splitByTo(2)(a);// [[1,2], [3,4], [5]]
```

### flatMap
also known as `chain`, which concats results from functions

`(a -> [a]) -> [a] -> [a]`

### assoc
`[a] -> [b] -> {a: b}`
receives two arrays (a, b) and associate them into object, with `a` as key, `b` as value.
a.length < b.length -> b will be cut
a.length > b.length -> b's value will be `undefined`

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
  [{name: 'js'}, {name: 'php'}, {name: 'haskell'}, {name: 'scala'}]
); 
    =>
{
  'not-typed': [{name: 'js'}, {name: 'php'}],
  typed: [{name: 'scala'}, {name: 'haskell'}]
}
```

