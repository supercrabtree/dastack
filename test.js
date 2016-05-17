import test from 'ava';
import createStack from './';

console.log();
console.log(Date.now());

test('stack creation', t => {

  var stack = createStack();
  t.is(stack.size, 0);

  var stack2 = createStack(1, 2, 3);
  t.is(stack2.size, 3);

});

test('stack.push', t => {

  var stack = createStack();
  stack.push('banana');
  t.is(stack.size, 1);

});

test('stack.pop', t => {

  var stack = createStack();
  stack.push('banana');
  var popped = stack.pop();
  t.is(popped, 'banana');

});
