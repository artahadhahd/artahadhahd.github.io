<p>Does this work too?</p>

# I am testing something...
```hs
fib :: [Integer]
fib = 1 : 1 : zipWith (+) fib (tail fib)
```