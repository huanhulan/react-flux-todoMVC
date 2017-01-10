import {
    EventEmitter
} from 'events';
import assign from 'object-assign';
import TodoDispatcher from '../dispatcher/TodoDispatcher';
import StoreConstants from '../constants/StoreConstants';
import ActionsTable from '../constants/ActionConstants';

var EVT = StoreConstants.CHANGE_EVENT;
var STORAGE_KEY = 'todos-react-flux-1.0';

/**the real store**/
var _todos = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');

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
            _emitChange(action.type);
            break;
        case ActionsTable.REMOVE_ITEM:
            _removeItem(action.item);
            _emitChange(action.type);
            break;
        case ActionsTable.UPDATE_ITEM:
            _updateItem(action.from, action.to);
            _emitChange(action.type);
            break;
        case ActionsTable.ALL_DONE:
            _setAllToCompleted();
            _emitChange(action.type);
            break;
        case ActionsTable.TOGGLE_COMPLETE:
            _toggleItem(action.item);
            _emitChange(action.type);
            break;
        case ActionsTable.REMOVE_COMPLETED:
            _removeAllCompletedItem();
            _emitChange(action.type);
            break;
        case ActionsTable.ALL_UNDONE:
            _setAllToUncompleted();
            _emitChange(action.type);
            break;
        default:
            console.log(`uncaught action ${action.type}`);
            break;
    }
}

/**private methods start**/
function _getIndexInTodos(item) {
    for (var i = _todos.length - 1; i >= 0; i--) {
        if (item.id === _todos[i].id) {
            return i;
        }
    }
    return -1;
}

// inform the view to update
function _emitChange(type) {
    console.log(`--changed in ${new Date()}, the type is ${type}---`);
    console.log(`the new todo list is ${JSON.stringify(_todos)}`);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(_todos));
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
    return _todos[_getIndexInTodos(fromItem)] = toItem;
}

function _setAllToCompleted() {
    return _todos.map(todo => todo.completed = true);
}

function _setAllToUncompleted(argument) {
    return _todos.map(todo => todo.completed = false);
}

function _toggleItem(item) {
    var todo = _todos[_getIndexInTodos(item)];
    todo.completed = !todo.completed;
}

function _removeAllCompletedItem(item) {
    var res = _todos.filter(todo => !todo.completed);
    _todos = res;
}

// remember to do this
export default TodoStore;
