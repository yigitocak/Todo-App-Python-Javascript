import "./TodoForm.scss";
import { useState } from "react";
import axios from "axios";
import { baseUrl } from "../../utils/utils";

export const TodoForm = ({render}) => {
    const [inputField, setInputField] = useState("")

    const sendData = async (e) => {
        e.preventDefault()
        if(inputField.trim() === "") return
        const response = await axios.post(`${baseUrl}tasks/create/`, {
            task_name: inputField.trim()
        })
        setInputField("")
        render()
    }

    return (
        <form
            className="todo__form"
            onSubmit={sendData}
        >
            <label className="todo__label" htmlFor="todoInputId">
                Make it happen.
            </label>
            <input
                name="todoInput"
                className="todo__input"
                id="todoInputId"
                value={inputField}
                onChange={(e) => setInputField(e.target.value)}
                placeholder="Add a task."
            />
            <button type="submit" className="todo__button">
                I Got This!
            </button>
        </form>
    );
};
