import { useState } from "react";
import "./App.css";
function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [editTodo, setEditTodo] = useState(false);
  const [currentTodo, setCurrentTodo] = useState();

  const handlesubmit = (event) => {
    event.preventDefault();
    setTodos([...todos, { task: todo, completed: false }]);
    setTodo("");
  };
  const handlekeydown = (event) => {
    if (event.keyCode === 13) {
      handlesubmit(event);
    }
  };
  const handleDelete = (index) => {
    setTodos(todos.filter((todo, i) => i !== index));
  };

  const handleEdit = (index, todo) => {
    let data = todos.filter((todo, i) => i == index);
    if (data) {
      setCurrentTodo({ ...todo });
      return setEditTodo(true);
    }
  };

  function handleEditInputChange(e) {
    // set the new state value to what's currently in the edit input box
    setCurrentTodo({ ...currentTodo, task: e.target.value });
    console.log(currentTodo);
  }

  console.log(editTodo, currentTodo);
  console.log(todos);
  return (
    <div className="App">
      {editTodo ? (
        <>
          <input
            type="text"
            value={currentTodo.task}
            onChange={(e) => handleEditInputChange(e)}
            onKeyDown={handlekeydown}
          />
          {/* <button onClick={handlesubmit}>Update</button> */}
        </>
      ) : (
        <>
          <input
            type="text"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            onKeyDown={handlekeydown}
          />
          <button onClick={handlesubmit}>ADD</button>
        </>
      )}

      {todos.map((data, index) => (
        <div>
          <h2 key={index}>{data.task}</h2>
          <button onClick={() => handleDelete(index)}>delete</button>
          <button onClick={() => handleEdit(index, data)}>Edit</button>
        </div>
      ))}
    </div>
  );
}

export default App;
