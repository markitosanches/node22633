import { useState } from 'react'
import Header from './components/Header'
import ManyTasks from './components/ManyTasks'
import AddTask from './components/AddTask'
function App() {

  //1 - Global
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctor appointment',
        day: 'Feb 5, 2023',
        reminder: true
    },
    {
        id: 2,
        text: 'Meeting College',
        day: 'Mar 5, 2023',
        reminder: true
    },
    {
        id: 3,
        text: 'Gifts',
        day: 'Dec 12, 2023',
        reminder: false
    }
])

//2 Delete
const deleteTask = (id) => {
  //console.log(id)
  setTasks(tasks.filter((task) => task.id !== id))
}
//3 Update
const toggleReminder = (id) => {
  //console.log(id)
  setTasks(tasks.map((task)=> task.id === id ? {...task, reminder:!task.reminder} : task))
}
//4 Insert
const addTask = (task) => {
  //console.log(task)
  const id = Math.floor(Math.random() * 1000)
  const newTask = {id, ...task}
  //console.log(newTask)
  setTasks([...tasks, newTask])
} 

//5 toggle form
const [showAddTask, setShowAddTask] = useState(false)
    
  return (
    <div className='container'>
      <Header showAdd={showAddTask} onAdd={() => setShowAddTask(!showAddTask)}/>

      { showAddTask &&
        <AddTask onAdd={addTask}/>
      }
      {tasks.length > 0 ? (
        <ManyTasks tasks={tasks} onDeleteMany={deleteTask} onToggleMany={toggleReminder}/>
      ):(
        'No tasks'
      )}
    </div>
  );
}

export default App;
