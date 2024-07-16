import { useState } from "react"

function Todos () {
    const [todos, setTodos] = useState([]);

    return (
        <div>
            <input placeholder="Enter new Todo...." type="text" onKeyUp={handleTodo}/>
            <ul>
                {todos.map(todo => {

                }

                )}
            </ul>
        </div>
    )
}

export default Todos;