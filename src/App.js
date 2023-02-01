import { useState } from "react";
import "./App.css";
function App() {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);

  const handleSubmit = e => {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo('');
  };

  return (
    <div>
      <input
        type="text"
        value={todo}
        onChange={e => setTodo(e.target.value)}
      />
      <button onClick={handleSubmit}>Add</button>
      <ul>
        {todos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}


export default App;
