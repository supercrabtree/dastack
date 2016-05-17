# dastack [![Build Status](https://travis-ci.org/supercrabtree/dastack.svg?branch=master)](https://travis-ci.org/supercrabtree/dastack)

All of the implementations of stacks I found attached everything to the
`prototype` and didn't make good use of private encapsulation, getters,
non-enumerable methods, etc.

So here it is, a clean implementation of a stack written in straight simple
es5.

## API

#### Create a stack

```js
var createStack = require('dastack');

var stack = createStack(); // => Creates an empty stack

var stack = createStack(1, 2, 3); // => Creates a stack with initial values
```

#### stack.size

The only property on the stack is `size`, works exactly the same as the `length`
property on Array.

```js
var stack = createStack(1, 2, 3);

stack.size // => 3
```

#### stack.push()

Add a new element to the top of the stack.

```js
var stack2 = createStack(1, 2, 3);

stack.size // => 3
```

#### stack.pop()

Remove the top element from the top of the stack.

```js
var stack = createStack(1, 2, 3);

stack.pop() // => 3

stack.size // => 2
```

#### stack.peek()

Get the top element from the top of the stack, but do not remove it.

```js
var stack = createStack(1, 2, 3);

stack.peek() // => 3

stack.size // => 3
```

#### stack.clear()

Empty the stack.

```js
var stack = createStack(1, 2, 3);

stack.clear()

stack.size // => 0
```

#### stack.toString()

Get the current stack as a string.

```js
var stack = createStack(1, 2, 3);

stack.toString() // => "1,2,3"
```

#### stack.toArray()

Copy the current stack into a regular array.

```js
var stack = createStack(1, 2, 3);

stack.toArray() // => [1, 2, 3]
```
