import "./Todo.scss"
import TodoForm from "../TodoForm/TodoForm"
import TodoList from "../TodoList/TodoList";

const Todo = () => {
    return (
        <section
            className="todo"
        >
            <TodoForm />
            <TodoList />
        </section>
    )
}

export default Todo