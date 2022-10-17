import {FaPenAlt, FaPhoneAlt} from 'react-icons/fa'
import Note from './note'

const NoteAddButton = () => {
    const createNote = () => {
    }
  return (
    <>
        <button className='add_note' onClick={createNote}><FaPenAlt /></button>
    </>
  )
}

export default NoteAddButton