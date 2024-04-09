import "./TodoForm.scss"

const TodoForm = () => {
    function submitHandler(e) {
        e.preventDefault()

        e.target.reset()
    }
    return (
        <form
            className="todo__form"
            onSubmit={submitHandler}
        >
            <label
                className="todo__label"
                htmlFor="todoInputId"
            >Just do it.</label>
            <input
                name="todoInput"
                className="todo__input"
                id="todoInputId"
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