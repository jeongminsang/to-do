import { useState } from "react";
import{ useParams } from "react-router-dom";
import Loading from "./Loading";
import { fetchDelete, fetchPatch } from "../util/api";
import useFetch from "../util/useFetch";
import useScrollTop from "../util/useScrollTop";

const TodoDetails = () => {
    const { id } = useParams();
    const [todo, isPending, error] = useFetch(`http://localhost:3001/todos/${id}`)

    //advanced
    useScrollTop();

    const handleDeleteClick = () => {
        /* delete 버튼을 누르면 다시 home으로 리다이렉트 되어야 합니다. */
        /* useNavigate()를 이용하여 로직을 작성해주세요. */
        fetchDelete('http://localhost:3001/todos/', id);
    }



    return (
        <div className="todo-details">
            { isPending && <Loading/> }
            { error && <div>{ error }</div> }
            { todo && (
                <article>
                    <h2>{ todo.title }</h2>
                    <p>{ todo.time }</p>
                    <button onClick={handleDeleteClick}>delete</button>
                </article>
                
            )}
        </div>
    )
}

export default TodoDetails; 