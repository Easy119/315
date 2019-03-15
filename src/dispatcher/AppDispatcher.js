// var Dispatcher = require('flux').Dispatcher;
import {Dispatcher} from "flux"
let AppDispatcher  = new Dispatcher();  
import ListStore from "../stores/ListStore"

AppDispatcher.register(function (action) {
  switch(action.actionType) {
    case 'ADD_NEW_ITEM':
      ListStore.addNewItemHandler(action.text);
      ListStore.emitChange();
      break;
    default:
      // no op
  }
})
export default AppDispatcher;  