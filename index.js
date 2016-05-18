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

  var stack = Object.create(null, {

    // properties

    size: {
      get: function () {
        return dataStore.length;
      }
    },


    // methods

    push: {
      value: function (item) {
        dataStore.push(item);
        return stack;
      }
    },

    pop: {
      value: function () {
        return dataStore.pop();
      }
    },

    peek: {
      value: function () {
        return dataStore[dataStore.length-1];
      }
    },

    clear: {
      value: function () {

        // popping them all out of the array is marginally
        // less performant than just setting dataStore = []
        // but prevents the memory leaks that could occur.

        while (dataStore.length) {
          dataStore.pop();
        }
        return stack;
      }
    },

    toString: {
      value: function () {
        return dataStore.toString();
      }
    },

    toArray: {
      value: function () {
        return dataStore.slice();
      }
    }

  });

  return stack;
};
