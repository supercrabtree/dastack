module.exports = function dastack() {
  'use strict';


  // the private internal array the stack will proxy

  var dataStore;


  // if arguments are passed, set them as the initial contents of the dataStore

  if (arguments.length) {
    dataStore = Array.prototype.slice.call(arguments);
  } else {
    dataStore = [];
  }


  var stack = {


    // properties

    get size() {
      return dataStore.length;
    },


    // methods

    push: function (item) {
      dataStore.push(item);
      return stack;
    },

    pop: function () {
      return dataStore.pop();
    },

    peek: function () {
      return dataStore[dataStore.length-1];
    },

    clear: function () {

      // popping them all out of the array is marginally
      // less performant than just setting dataStore = []
      // but prevents the memory leaks that could occur.

      while (dataStore.length) {
        dataStore.pop();
      }
      return stack;
    },

    toString: function () {
      return dataStore.toString();
    },

    toArray: function () {
      return dataStore.slice();
    }
  };

  return Object.freeze(stack);
};

