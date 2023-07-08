With this block of code you can get the contents of variable x based on its memory address:

```py
from ctypes import string_at

x = 14
print(string_at(id(x) + 24))
```

Keep in mind that `id(x)` returns the memory address where x has been stored.
We have to add 24 to the memory address of `x` to get the value of it because an `int` object has 24 bytes of metadata.

For larger integers than what an `int32_t` can hold, we have to use a different method.
```py
import ctypes

x = 32871637867213678216387612736

int_at = lambda addr, size: int.from_bytes(ctypes.string_at(addr, size), 'little')

def compute_large(x):
    size = int_at(id(x) + 16, 8)
    res = 0
    for i in reversed(range(size)):
        res = res << 30 | int_at(id(x) + 24 + i * 4, 4)
    return res

assert compute_large(x) == x
```
If this fails for you, you might want to change `'little'` to `'big'`

For `str` objects though, there's 48 bytes of metadata.

```py
x = 'Hello World!'
print(string_at(id(x) + 48))    
```

## Summary
Every object in Python has a **big** metadata
