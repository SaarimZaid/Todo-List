import React from 'react'
import './taskCard.css'
import TagButton from './TagButton'
import dlt from '../assests/delete.png'

const TaskCard = ({tasks, handleDelete, index}) => {
  return (
    <div className='card'>
        <p>{tasks.task}</p>
        <div className='tag_dlt_Btn'>
            <div className='card_tag'>
              {tasks.tags.map((tag,index) => {
                return <TagButton tagName={tag} selected key={index} />
              })}
            </div>
            <div >
                <img src={dlt} className='dlt_icon' alt='dlt_button' onClick={() => handleDelete(index)}/>
            </div>
        </div>
    </div>
  )
}

export default TaskCard