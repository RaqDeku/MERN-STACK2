import { useState, useEffect } from 'react'
// import { useNavigate } from 'react-router-dom'
// import { useSelector, useDispatch } from 'react-redux'
import NewNote from '../components/newNote'
import Note from '../components/note'
import Footer from '../components/footer'
import NoteSlice from '../features/notes/noteSlice'
import '../css/Dashoard.css'

export const Dashboard = () => {

  const [note, setNote] = useState([])

  // const navigate = useNavigate()
  // const dispatch = useDispatch()
  // const {user} = useSelector(state => state.auth)

  // useEffect(() => {
  //     dispatch(NoteSlice.getNote)
  // }, [dispatch])

  function addNote(newNote){
    setNote(prevNotes => {
      return (
        [...prevNotes, newNote]
      )
    })
  }

  function deleteNote(id) {
    setNote((prevNotes) => {
      return (prevNotes.filter(
        (noteItem, index) => {
          return (
            index !== id
          )
        }
      ))
    })
  }

  return (
    <>
      <NewNote onAdd={addNote}/>
      {note.map((noteItem, index) => {
        return (
          <Note
          key={index}
          id={index} 
          title={noteItem.title} 
          content={noteItem.content} 
          onDelete={deleteNote}/>
        )
      })}
      <Footer />
    </>
  )
}


export default Dashboard
