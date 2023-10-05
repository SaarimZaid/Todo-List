import React, { useState } from 'react'
import './taskForm.css'
import TagButton from './TagButton'

const TaskForm = ({setTasks}) => {
    const [taskData, setTaskData] = useState({
        task: '',
        status: 'todo',
        tags: []
    })

    const handleChange = (e) => {
        const {name, value} = e.target

        setTaskData((prev) => {
            return {...prev, [name]: value}
        })
    }

    const handleTags = (selectedTag) => {
        if(taskData.tags.some(item => item === selectedTag)){
            const filteredTags = taskData.tags.filter(item => item !== selectedTag)
            setTaskData(prev => {
                return {...prev, tags: filteredTags}
            })
        }else{
            setTaskData(prev => {
                return {...prev, tags: [...prev.tags, selectedTag]}
            })
        }
    }
    // console.log(taskData.tags)
    const checkHandle = (tag) => {
        return taskData.tags.some(item => item === tag)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(taskData)
        setTasks((prev) => {
            return [...prev, taskData]
        })
        setTaskData({
            task: '',
            status: 'todo',
            tags: []
        })
    }
  return (
    <div className='app'>
        <header className='header'>
            <form onSubmit={handleSubmit}>
                <input 
                    type='text' 
                    name='task'
                    required
                    value={taskData.task}
                    className='task_input' 
                    placeholder='Add Task'
                    onChange={handleChange}
                />

                <div className='select_tag_and_status'>
                    <div className='select_tag'>
                        <TagButton tagName='HTML' tag={handleTags} selected={checkHandle('HTML')} />
                        <TagButton tagName='CSS' tag={handleTags} selected={checkHandle('CSS')} />
                        <TagButton tagName='JAVASCRIPT' tag={handleTags} selected={checkHandle('JAVASCRIPT')} />
                        <TagButton tagName='REACT' tag={handleTags} selected={checkHandle('REACT')} />
                    </div>
                    <div className='status_and_button'>
                        <select 
                            className='select_status' 
                            name='status'
                            onChange={handleChange} 
                            value={taskData.status}
                        >
                            <option value='todo'>To Do</option>
                            <option value='doing'>Doing</option>
                            <option value='done'>Done</option>
                        </select>
                        <button type='submit' className='task_submit'>Add Todo</button>
                    </div>
                </div>
            </form>
        </header>
    </div>
  )
}

export default TaskForm