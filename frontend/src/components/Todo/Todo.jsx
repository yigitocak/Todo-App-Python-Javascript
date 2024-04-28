import "./Todo.scss"
import {TodoForm} from "../TodoForm/TodoForm"
import TodoList from "../TodoList/TodoList";
import {useEffect, useState} from "react";
import axios from "axios";
import {baseUrl} from "../../utils/utils";

const Todo = () => {
    const [fetchedData, setFetchedData] = useState([])

    const fetch = async () => {
        const response = await axios.get(`${baseUrl}tasks/`)
        setFetchedData(response.data)
    }

    useEffect(() => {
        fetch()
    },[])

    if(!fetchedData){
        <div>Loading...</div>
    }
    return (
        <section
            className="todo"
        >
            <TodoForm render={fetch}/>
            <TodoList data={fetchedData} render={fetch}/>
        </section>
    )
}

export default Todo