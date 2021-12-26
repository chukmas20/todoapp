import './App.css';
import { useState } from 'react';
import Form from './components/Form';
import Todolist from './components/Todolist';

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
        <header>
            <h3> My todo list</h3>
        </header>
          <Form todos={todos} setTodos={setTodos} setInputText={setInputText} inputText={inputText}/>
          <Todolist todos={todos} />
    </div>
  );
}

export default App;
