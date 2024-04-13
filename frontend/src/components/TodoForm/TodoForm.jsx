import "./TodoForm.scss"
import {useState} from "react";

const TodoForm = ({ submitHandler, handleInput, inputState}) => {

    return (
        <form
            className="todo__form"
            onSubmit={submitHandler}
        >
            <label
                className="todo__label"
                htmlFor="todoInputId"
            >Make it happen.</label>
            <input
                name="todoInput"
                className="todo__input"
                id="todoInputId"
                value={inputState}
                onChange={handleInput}
                placeholder="Add a task."
            />
            <button
                className="todo__button"
            >
                I Got This!
            </button>
        </form>
    )
}

export default TodoForm