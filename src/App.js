import { useState } from "react";
import "./App.css";
function App() {
  const[newTodo, setnewTodo] = useState("")
  const [state, setState] = useState([
    {
      name: "pooja",
      age: "27",
      class: 5
    },
    {
      name: "sudhanshu",
      age: "23",
      class: 6
    }
  ]);

  const AddnewTodo = () =>{
    let todo = setState({...state, newTodo})
  }

  const addOnchange = (e) =>{
    console.log(e, "11111111111111111111")
    setnewTodo.name(e)
   
  }

  console.log(state, "1111111111111111");
  return (
    <div className="App">
      <input value={newTodo} onChange={e => setnewTodo(e.target.value)}  />
      <button onClick={AddnewTodo}>ADD</button>
      {state.map((data, index) => {
        return <h1 key={index}>{data.name}</h1>;
      })}
    </div>
  );
}

export default App;
