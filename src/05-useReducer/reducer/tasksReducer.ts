interface Todo {
    id: number;
    text: string;
    completed: boolean;
}
interface TaskState {
    todos: Todo[];
    length: number;
    completed: number;
    pending: number;
}

export type TaskAction =
    | { type: 'ADD_TODO', payload: string }
    | { type: 'TOGGLE_TODO', payload: number }
    | { type: 'DELETE_TODO', payload: number }

export const taskReducer = (
    state: TaskState, 
    action: TaskAction
): TaskState => {
    switch (action.type) {
        case 'ADD_TODO':
            const newTodo: Todo = {
                id: Date.now(),
                text: action.payload,
                completed: false,
            }

            // ! Esto NO se debe de hacer, NO SE DEBE MUTAR UN STATE
            // state.todos.push(newTodo);
            const addTodoArray = [...state.todos, newTodo]
            
            return buildState(addTodoArray);
        case 'DELETE_TODO':
            const deleteTodoArray = state.todos.filter((todo) => todo.id !== action.payload);
            return buildState(deleteTodoArray);
        case 'TOGGLE_TODO':
            const toggleTodoArray = state.todos.map((todo)=>{
                if(todo.id === action.payload){
                    return {...todo, completed: !todo.completed} 
                }
                return todo;
            });
            return buildState(toggleTodoArray);
        default:
            return state;
    }
}
const buildState = (todos:Todo[]):TaskState => {
    const completedTodos = todos.filter((todo) => todo.completed).length;
    const pendingTodos = todos.length - completedTodos;
    return {
        todos,
        pending: pendingTodos,
        completed: completedTodos,
        length: todos.length
    }
} 
