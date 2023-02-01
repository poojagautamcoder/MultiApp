import { useState } from "react";
import "./App.css";
function App() {
  const[newTodo, setnewTodo] = useState("")
  const [state, setState] = useState([]);
  const AddnewTodo = () =>{
    let todo = setState({...state, newTodo})
    return todo
  }
  console.log(state.newTodo, "1111111111111111");
  return (
    <div className="App">
      <input value={newTodo} onChange={e => setnewTodo(e.target.value)}  />
      <button onClick={AddnewTodo}>ADD</button>
      {state.map((data, index) => {
        return <h1 key={index}>{data.newTodo}</h1>;
      })}
    </div>
  );
}

export default App;
