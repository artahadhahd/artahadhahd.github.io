# What is Haskell?
Haskell is a purely functional, general purpose, statically typed programming language developed by some mathematicians in 1990.

Here's how you write the Fibonacci Sequence in it.
```hs
fib :: [Integer]
fib = 1 : 1 : zipWith (+) fib (tail fib)
```