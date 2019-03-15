var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
let ListStore = assign({}, EventEmitter.prototype, {
  items: ["第一个测试数据"],

  getAll: function () {
    return this.items;
  },

  addNewItemHandler: function (text) {
    this.items.push(text);
    console.log(this.items)
  },

  emitChange: function () {
    this.emit('change');
  },

  addChangeListener: function (callback) {
    this.on('change', callback);
  },

  removeChangeListener: function (callback) {
    this.removeListener('change', callback);
  }
});
export default ListStore;