const taskReducer = (toDoTasks, action) => {
    switch (action.type) {
        case 'ADD_TASK':
            return [...toDoTasks, {
                id: Date.now(),
                text: action.toDoText,
                completed: false }
            ];
        case 'TOGGLE_TASK':
            return toDoTasks.map(toDoTask =>
                toDoTask.id === action.id ? { ...toDoTask, completed: !toDoTask.completed } : toDoTask
            );
        case 'DELETE_TASK':
            return toDoTasks.filter(toDoTask => toDoTask.id !== action.id);
        default:
            return toDoTasks;
    }
}

export default taskReducer;