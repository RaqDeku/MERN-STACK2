import {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AddNote from '../components/noteAddButton'
import { createNote } from '../features/notes/noteSlice'


const NewNote = (props) => {

  const dispatch = useDispatch()


  const [isExpanded, setExpansion] = useState(false)

  const [noteData, setNote] = useState({
    title:'',
    content:''
  })

  let {title, content} = noteData

  function onChange(e) {
    setNote((prevState) => {
      return {
        ...prevState,
        [e.target.name]:e.target.value
      }
    })
  }

  function expandTextfield(){
    setExpansion(true)
  }

  function Submit(e) {
    e.preventDefault()

    props.onAdd(noteData)
    dispatch(createNote(noteData))
    setNote({
      title:'',
      content:''
    })

  }

  return (
    <>
        <form className='create-note' onSubmit={Submit}>
          <div>
            {isExpanded ? (<input
              id='title' 
              name='title' 
              value={title}
              onChange={onChange}
              placeHolder='Title'>
            </input>) : null
            }

            <textarea
              id='content' 
              name='content' 
              value={content}
              onChange={onChange}
              onClick={expandTextfield}
              placeHolder='Write Notes Here. . .' 
              rows={isExpanded ? 3 : 1}>
            </textarea>
          </div>
          <AddNote />
        </form>
    </>
  )
}

export default NewNote