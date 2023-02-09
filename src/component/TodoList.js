import { Link } from "react-router-dom";
import{ useParams } from "react-router-dom";
import { fetchDelete, fetchPatch } from "../util/api";
import useFetch from "../util/useFetch";

const TodoList = ({ todos }) => {
    const { id } = useParams();
    const [todo, isPending, error] = useFetch(`http://localhost:3001/todos/${id}`)
    const handleDeleteClick = () => {
        /* delete 버튼을 누르면 다시 home으로 리다이렉트 되어야 합니다. */
        /* useNavigate()를 이용하여 로직을 작성해주세요. */
        fetchDelete('http://localhost:3001/todos/', id);
    }

    return (
        <div className="todo-list">
            {todos.map(todo => (
            <div className="todo-preview" key={todo.id} >
                <Link to={`/todos/${todo.id}`}>
                    <h2>{ todo.title }</h2>
                    <p>{ todo.time }</p>
                </Link>
                <button onClick={handleDeleteClick}>edit</button>
                <button onClick={handleDeleteClick}>delete</button>
            </div>
            ))}
        </div>
    )
  }
  
  export default TodoList; 