# What is Haskell?
Haskell is a purely functional, general purpose, statically typed programming language developed by some mathematicians in 1987, just a few years before Python. It was named after Haskell Curry, a mathematician who had a great impact on Functional Programming. Haskell hands down has one of the coolest logos of all time. In the logo you can see a monad, represented by >>=.

![Haskell](../Assets/haskell_logo.png)

It's actually not a monad, but something related to monads (the `bind operator` if you want to learn more). But I don't wanna talk about monads because they're *really* complicated to explain even to someone who has some experience in programming. But in case you wanted to know the definition: a monad is a monoid in the category of endofunctors. I have no idea what that means, but I can use monads.

As you can see, a lot of mathematical stuff is used in the language, like category theory and lambda calculus.

Here's how you write the Fibonacci Sequence in it.
```hs
fib = 1 : 1 : zipWith (+) fib (tail fib) :: [Integer]
```

This will give us an infinite list of Integers (well, theoretically).

`Integer` can be an arbitrarily large integer - unlike `Int` which is basically in range -2^63 to 2^63-1 (machine dependant, check with `maxBount :: Int` in GHCi). The limit depends on your memory. So the more memory you have, the closer you get to really large numbers.

Haskell always forgets about the last element that it calculated, in case it's not needed. So hypothetically, the only other thing stopping you from having an infinite list of integers is just the fact that you're printing those numbers. That takes memory too.

Since Haskell evaluates functions lazily, no fibonacci number will be calculated until you tell it to print them.

So anyways, as you can see Haskell is an exciting language for a mathematician. And highly rewarding if you know what you're doing, since it's surprisingly fast if you write correct and sometimes can challenge much faster languages such as C++.

But because it was developed by mathematicians, there are some weird stuff about it. Like what the fuck is a zygohistomorphism? (sorry for the vulgar language)

So let's open Haskell docs to see what it is.

```
Zygohistomorphic prepromorphisms

Used when you really need both semi-mutual recursion and history and to repeatedly apply a natural transformation as you get deeper into the functor. Zygo implements semi-mutual recursion like a zygomorphism. Para gives you access to your result à la paramorphism. 
```

Do you understand anything from this? I don't, and don't expect anyone to.

[Haskell can apparently do Lifting](https://wiki.haskell.org/Lifting) too. What an awesome language.

I love Haskell. And I don't want it to change.