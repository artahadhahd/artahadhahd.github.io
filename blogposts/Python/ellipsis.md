```py
a = a[0] = [[]]
print(a)
>>> [[...]]
print(a[0])
>>> [[...]]
print(a[0][0][0][0][0])
>>> [[...]]
assert a == a[0] == a[0][0]

a[0][0][0] = 1
assert a[0] == 1
```

Here the Ellipsis (or  `...`) isn't an Ellipsis, it's Python's way of telling us that it's a recursive definition. Otherwise the REPL would have shown us `Ellipsis`.
```py
>>> ...
Ellipsis
>>>
```