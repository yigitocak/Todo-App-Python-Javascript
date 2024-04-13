import "./Todo.scss"
import TodoForm from "../TodoForm/TodoForm"
import TodoList from "../TodoList/TodoList";
import {useState} from "react";

const Todo = () => {
    const [inputState, setInputState] = useState("")
    const [todos, setTodos] = useState([])

    const handleInput = (e) => {
        setInputState(e.target.value)
    }

    function submitHandler(e) {
        e.preventDefault()

        if(inputState === "") return

        setTodos([...todos,
                {
                    id: crypto.randomUUID(),
                    task_name: inputState,
                    priority: 0,
                    status: "open"
                }
            ]
        )

        setInputState("")
    }

    return (
        <section
            className="todo"
        >
            <TodoForm submitHandler={submitHandler} handleInput={handleInput} inputState={inputState}/>
            <TodoList setTodos={setTodos} todos={todos}/>
        </section>
    )
}

export default Todo