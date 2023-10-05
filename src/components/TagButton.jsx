import React from 'react'
import './tagButton.css'

const TagButton = ({tagName, tag, selected}) => {
  const styleTag = {
    HTML: {backgroundColor: 'lightBlue'},
    CSS: {backgroundColor: 'lightGreen'},
    REACT: {backgroundColor: 'orange'},
    JAVASCRIPT: {backgroundColor: 'yellow'},
    DEFAULT: {backgroundColor: '#f9f9f9'}
  }
  return (
    <div className='select_tag'>
        <button 
          type='button' 
          className='tag' 
          onClick={() => {
            tag(tagName)
          }}
          style={selected ? styleTag[tagName] : styleTag.DEFAULT}
        >
          {tagName}
        </button>
    </div>
  )
}

export default TagButton