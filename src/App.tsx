import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  type Task = {
    title: string
  }
  const [text, setText] = useState('');
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = () => {
    if(!text) return;
    const task: Task = {
      title: text
    };
    setTasks([...tasks, task]);
    setText('');
  };
  const deleteTask = (index: number) => {
    setTasks(tasks.filter((task, i) => i !== index));
  }

  return (
    <div className='App'>
      <img src={logo} className="App-logo" alt="logo" />
      <h2>TODO App</h2>
      <div>
        <ul>
          {tasks.map((task, index) => <li id={`item-${index+1}`} key={index}>
            {task.title}
            <button type='button' onClick={() => deleteTask(index)}>complete</button>
          </li>)}
        </ul>
        <input value={text} onChange={(e) => setText(e.target.value)}></input>
        <button type='button' onClick={() => addTask()}>add</button>
      </div>
    </div>
  );
}

export default App
