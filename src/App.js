import React, {useState} from 'react';
import './App.css';
import Form from "./components/Form";

import TodoList from "./components/TodoList";


function App() {
  const [inputText, setInputText] = useState("");
  return (
    <div className="App">
     <header>
       <h1>Austin's to-do list</h1>
     </header>
     <Form />
     <TodoList />
    </div>
  );
}

export default App;
