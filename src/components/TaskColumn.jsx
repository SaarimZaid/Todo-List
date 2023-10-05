import React from 'react'
import './taskColumn.css'
import TaskCard from './TaskCard'

const TaskColumn = ({taskColumnName, img, tasks, status, handleDelete}) => {
  return (
    <section className='section'>
        <h2 className='section_heading'>
            <img src={img} className='task_icon' alt={taskColumnName} />
            {taskColumnName}
        </h2>
        {tasks.map((tasks, index) => {
          return tasks.status === status && <TaskCard key={index} tasks={tasks} handleDelete={handleDelete} index={index} />
        })} 
        {/* <TaskCard /> */}
    </section>
  )
}

export default TaskColumn