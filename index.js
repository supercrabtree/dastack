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


  return Object.create(null, {


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
        return this;
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
        while (dataStore.length) {
          dataStore.pop();
        }
        return this;
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
};
