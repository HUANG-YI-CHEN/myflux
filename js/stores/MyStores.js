var AppDispatcher = require('../dispatcher/MyDispatcher');
var EventEmitter = require('events').EventEmitter;
var TodoConstants = require('../constants/MyConstants');
var assign = require('object-assign');

var CHANGE_EVENT = 'change';
var _data = [];

var TodoStore = assign({}, EventEmitter.prototype, {
  getAll: function() {
    return _data;
  },
  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
});

AppDispatcher.register(function(action) {
  switch(action.actionType) {
    case TodoConstants.ADD_ITEM:
      create(action.text);
      TodoStore.emitChange();
      break;
    default:
  }
});


function create(text) {
  _data.push({
    id: (+new Date() + Math.floor(Math.random() * 999999)).toString(36),
    text: text
  });
}


module.exports = TodoStore;
