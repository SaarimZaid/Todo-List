import React, { useEffect, useState } from 'react'
import './App.css'
import TaskForm from './components/TaskForm'
import TaskColumn from './components/TaskColumn'
import todo from './assests/todo.png'
import doing from './assests/doing.png'
import done from './assests/done.png'

const oldTask = localStorage.getItem('tasks')

const App = () => {

  const [tasks, setTasks] = useState(JSON.parse(oldTask) || [])
  // console.log(tasks)

  useEffect(()=>{
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])
  
  const handleDelete = (taskIndex) => {
    const newTasks = tasks.filter((task, index) => index !== taskIndex)
    setTasks(newTasks)
  }

  return (
    <div className='app'>
      <TaskForm setTasks={setTasks} />
      <div className='main_section'>
        <TaskColumn taskColumnName='To Do' img={todo} tasks={tasks} status='todo' handleDelete={handleDelete} />
        <TaskColumn taskColumnName='Doing' img={doing} tasks={tasks} status='doing' handleDelete={handleDelete} />
        <TaskColumn taskColumnName='Done' img={done} tasks={tasks} status='done' handleDelete={handleDelete} />
      </div>
    </div>
  )
}

export default App