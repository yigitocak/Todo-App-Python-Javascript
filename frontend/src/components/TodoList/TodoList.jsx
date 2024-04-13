import "./TodoList.scss"
import TodoItem from "../TodoItem/TodoItem";

const TodoList = ({setTodos, todos}) => {
    return (
        <ul
            className="todo__list"
        >
            {todos.map(todo => (
                    <TodoItem key={todo.id} task_name={todo.task_name} setTodos={setTodos} todos={todos}/>
                )
            )}
        </ul>
    )
}

export default TodoList