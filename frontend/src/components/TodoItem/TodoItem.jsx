import React, { useState } from 'react';
import "./TodoItem.scss";
import trashBin from "../../assets/icons/trash-bin.svg";
import done from "../../assets/icons/done.svg";
import axios from "axios";
import { baseUrl } from "../../utils/utils";

const TodoItem = ({ name, id, render, status }) => {
    const [deleting, setDeleting] = useState(false);
    const [finished, setFinished] = useState(status === "done");

    const handleDelete = async () => {
        setDeleting(true);
        setTimeout(async () => {
            await axios.delete(`${baseUrl}tasks/delete/${id}/`);
            render();
        }, 800); // Match this duration with the CSS animation
    };

    const handleFinish = async () => {
        if (!finished) {
            setFinished(true);
            await axios.put(`${baseUrl}tasks/finish/${id}/`);
            render();
        }
    };

    return (
        <li className={`todo__item ${deleting ? 'todo__item--delete' : ''} ${finished ? 'todo__item--done' : ''}`}>
            <p className={`todo__done ${finished ? 'animate-strike' : ''}`}>{name}</p>
            <div>
                <button className="todo__button--done" onClick={handleFinish}>
                    <img
                        src={done}
                        alt="done icon"
                        className="todo__button-image"
                    />
                </button>
                <button className="todo__button--trash" onClick={handleDelete}>
                    <img
                        src={trashBin}
                        alt="trash bin icon"
                        className="todo__button-image"
                    />
                </button>
            </div>
        </li>
    );
};

export default TodoItem;
