import { useState } from 'react'
import Header from './components/Header'
import ManyTasks from './components/ManyTasks'
function App() {

  //1 - Global
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctor appointment',
        date: 'Feb 5, 2023',
        reminder: true
    },
    {
        id: 2,
        text: 'Meeting College',
        date: 'Mar 5, 2023',
        reminder: true
    },
    {
        id: 3,
        text: 'Gifts',
        date: 'Dec 12, 2023',
        reminder: false
    }
])

//2 Delete
const deleteTask = (id) => {
  //console.log(id)
  setTasks(tasks.filter((task) => task.id !== id))
}
  return (
    <div className='container'>
      <Header/>
      <ManyTasks tasks={tasks} onDeleteMany={deleteTask}/>
    </div>
  );
}

export default App;
