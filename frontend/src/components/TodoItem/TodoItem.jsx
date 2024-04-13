import "./TodoItem.scss"
import trashBin from "../../assets/icons/trash-bin.svg"
import done from "../../assets/icons/done.svg"

const TodoItem = ({ setTodos, todos, task_name }) => {
    return(
        <li
            className="todo__item"
        >
            {task_name}
            <div>
                <button
                    className="todo__button--done"
                ><img
                    src={done}
                    alt="trash bin icon"
                    className="todo__button-image"
                /></button>
                <button
                    className="todo__button--trash"
                ><img
                    src={trashBin}
                    alt="trash bin icon"
                    className="todo__button-image"
                /></button>
            </div>
        </li>
    )
}

export default TodoItem