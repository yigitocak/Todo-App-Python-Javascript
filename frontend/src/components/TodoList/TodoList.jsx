import "./TodoList.scss"
import TodoItem from "../TodoItem/TodoItem";

const TodoList = () => {
    return (
        <ul
            className="todo__list"
        >
            <TodoItem />
        </ul>
    )
}

export default TodoList