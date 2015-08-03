//myaction


var AppDispatcher = require('../dispatcher/MyDispatcher');
var TodoConstants = require('../constants/MyConstants');

var TodoActions = {

  /**
   * @param  {string} text
   */
  create: function(text) {
    AppDispatcher.dispatch({
      actionType: TodoConstants.ADD_ITEM,
      text: text
    });
  }

  /**
  updateText: function(id, text) {
    AppDispatcher.dispatch({
      actionType: TodoConstants.TODO_UPDATE_TEXT,
      id: id,
      text: text
    });
  },
	*/

};

module.exports = TodoActions;
