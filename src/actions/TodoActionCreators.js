import ActionsTable from './../constants/ActionConstants';
import TodoDispatcher from './../dispatcher/TodoDispatcher';

const TodoActionCreator = {
    addTodoItemToStore(todo) {
        let action = {
            type: ActionsTable.ADD_ITEM,
            item: todo
        };

        return TodoDispatcher.dispatch(action);
    },
    removeTodoFromStore(todo) {
        let action = {
            type: ActionsTable.REMOVE_ITEM,
            item: todo
        };

        return TodoDispatcher.dispatch(action);
    },
    updateTodoInStore(oldTodo, newTodo) {
        let action = {
            type: ActionsTable.UPDATE_ITEM,
            from: oldTodo,
            to: newTodo
        };

        return TodoDispatcher.dispatch(action);
    },
    toggleStateForTodo(todo) {
        let action = {
            type: ActionsTable.TOGGLE_COMPLETE,
            item: todo
        };

        return TodoDispatcher.dispatch(action);
    },
    removeAllCompletedTodoInStore(todo) {
        let action = {
            type: ActionsTable.REMOVE_COMPLETED,
            item: todo
        };

        return TodoDispatcher.dispatch(action);
    },
    setAllTodoToCompleted() {
        let action = {
            type: ActionsTable.ALL_DONE
        };

        return TodoDispatcher.dispatch(action);
    },
    setAllTodoToUncompleted() {
        let action = {
            type: ActionsTable.ALL_UNDONE
        };

        return TodoDispatcher.dispatch(action);
    }
};

export default TodoActionCreator;