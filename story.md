provided an array of object, such as
[
  {
    description: 'some long description'
  },
  ...
]

filter through the array, extract the description, if the description longer than 10, slice the description to 10 and add
'...', if smaller than 10, just return the string.
Notice that item in array may not have a *description* property

```
// imperative code may look like this
arr.filter(item => {
  if (item.description === undefined) {
    return false;
  }
  if (item.description && item.description.length > 10) {
    return item.description.slice(0, 10) + '...';
  } else {
    return item.description;
  }
  return false;
});
```


implement via huan
```
me.down('tfDefinedColumnSets').setValue(record.get('setId'))
```
