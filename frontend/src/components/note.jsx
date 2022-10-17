import React from 'react'

const Note = () => {
  return (
    <>
        <div className='note'>
        <h1 contentEditable='true'>This is the Note Title</h1>
        <p contentEditable='true'>This is the Note Content</p>
        </div>
    </>
  )
}

export default Note