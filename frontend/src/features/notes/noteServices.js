import axios from "axios";

let URL = 'http://localhost:8000/note/'

const createNote = async(noteData, token) => {
    const config = {
        headers: {
            authorization: `Bearer ${token}`
        }
    }
    let response = await axios.post(URL + 'createnote', noteData, config)

    return response.data
    
}

const getNote = async(token) => {
    const config = {
        headers: {
            authorization: `Bearer ${token}`
        }
    }
    let response = await axios.get(URL + 'getnote', config)

    return response.data
    
}

const noteService = {
    createNote, getNote
}

export default noteService

