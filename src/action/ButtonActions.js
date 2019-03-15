import AppDispatcher from "../dispatcher/AppDispatcher"

var ButtonActions = {
  addNewItem(text) {
    AppDispatcher.dispatch({
      actionType: 'ADD_NEW_ITEM',
      text: text
    });
  },
};
export default ButtonActions