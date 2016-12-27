import {
    EventEmitter
} from 'events';
import assign from 'object-assign';
import TodoDispatcher from '../dispatcher/TodoDispatcher';
import StoreConstants from '../constants/StoreConstants';
import ActionsTable from '../constants/ActionConstants';

var EVT = StoreConstants.CHANGE_EVENT;

/**the real store**/
var _todos = [{
    id: 1,
    title: "test todo",
    completed: false
}];

/**public api of the store**/
var TodoStore = assign({}, EventEmitter.prototype, {
    attachChangeListner(cb) {
        this.on(EVT, cb);
    },
    removeChangeListner(cb) {
        this.removeListener(EVT, cb);
    },
    getAllTodos() {
        return _todos;
    },
    getActiveTodos() {
        return _todos.filter(todo => !todo.completed);
    },
    getCompletedTodos() {
        return _todos.filter(todo => todo.completed);
    }
});

/**bind store to dispatcher**/
// save dispatch token
TodoStore.dispatchToken = TodoDispatcher.register(handleAction);

// bind store to dispatcher
function handleAction(action) {
    switch (action.type) {
        case ActionsTable.ADD_ITEM:
            _addItem(action.item);
            _emitChange();
            break;
        case ActionsTable.REMOVE_ITEM:
            _removeItem(action.item);
            _emitChange();
            break;
        case ActionsTable.UPDATE_ITEM:
            _updateItem(action.from, action.to);
            _emitChange();
            break;
        case ActionsTable.ALL_DONE:
            _setAllToCompleted();
            _emitChange();
            break;
        case ActionsTable.TOGGLE_COMPLETE:
            _toggleItem(action.item);
            _emitChange();
            break;
        case ActionsTable.REMOVE_COMPLETED:
            _removeAllCompletedItem();
            _emitChange();
            break;
        default:
            console.log(`uncaught action ${action.type}`);
            break;
    }
}

/**private methods start**/
// TODO: localstorage
function _getIndexInTodos(item) {
    return _todos.indexOf(item);
}

// inform the view to update
function _emitChange() {
    console.log(`--changed in ${new Date()}---`)
    console.log(`the new todo list is ${JSON.stringify(_todos)}`);
    return TodoStore.emit(EVT);
}

// functions that mute todos
function _addItem(item) {
    return _todos.push(item);
}

function _removeItem(item) {
    return _todos.splice(_getIndexInTodos(item), 1);
}

function _updateItem(fromItem, toItem) {
    _todos[_getIndexInTodos(fromItem)] = toItem;
}

function _setAllToCompleted() {
    return _todos.map(todo => todo.completed = true);
}

function _toggleItem(item) {
    var todo = _todos[_getIndexInTodos(item)];
    console.log(todo)
    todo.completed = !todo.completed;
}

function _removeAllCompletedItem(item) {
    var res = _todos.filter(todo => !todo.completed);

    _todos = res;
}

// remember to do this
export default TodoStore;