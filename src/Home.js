import TodoList from "./component/TodoList";
import Loading from "./component/Loading";
import useInput from "./util/useInput";
import Input from "./component/Input";
import { fetchCreate } from "./util/api";
import { useState } from "react";

const Home = ({ todos, isPending }) => {
    const [title, titleBind] = useInput('');
    const [time, setTime] = useState(new Date().toLocaleString('ko-kr'));

    // setTime = new Date().toLocaleString('ko-kr')
    // select 컴포넌트에 들어가는 uniqueArr 속성에 blogs라고 보내보세요.
    // 작성자 부분에 중복되는 이름이 보이는 것을 확인할 수 있을 것입니다.
    // 중복되는 작성자의 이름을 어떻게 걸러내고 작성자 이름 하나만 남길 수 있는지 밑의 로직을 분석합니다.
    // const authrUnique = blogs && (blogs.filter((character, idx, arr) => {
    //     return arr.findIndex(item => item.author === character.author) === idx
    // }));

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {title, time}
        fetchCreate("http://localhost:3001/todos/", data)
    }
  
    return (
        <div className="home">
            {isPending}
            {
                todos ? 
                <form className="todoapp__inputbox" onSubmit={handleSubmit}>
                    <Input value={titleBind} />
                    <div label={"내용"} value={setTime} />
                    <button className="todoapp__inputbox-add-btn">추가</button>
                </form>
                :
            <Loading />
            }
            {todos && <TodoList todos={todos} />}
        </div>
    );
}
  
export default Home; 