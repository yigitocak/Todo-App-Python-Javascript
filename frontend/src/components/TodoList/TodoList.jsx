import "./TodoList.scss"
import TodoItem from "../TodoItem/TodoItem";

const TodoList = ({data, render}) => {
    if(!data) <div>Loading...</div>
    return (
        <ul className="todo__list">
            {data.map(item => (
                <TodoItem
                    render={render}
                    key={item.id}
                    id={item.id}
                    name={item.task_name}
                    status={item.status}
                />
            ))}
        </ul>
    );
};

export default TodoList