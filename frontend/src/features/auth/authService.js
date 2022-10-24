import axios from 'axios'

// Sending Request to register User
let URL = "http://localhost:8000/user/"

const register = async (userData) => {
    
    let response = await axios.post(URL + 'register', userData)

    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return register.data
}

// Sending Request to Login User
const login = async (userData) => {
    
    let response = await axios.post(URL + 'login', userData)

    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return login.data
}


// Logging user user out
const logout = async() => {
    localStorage.removeItem('user')
}

const authService = {
    register, logout, login
}

export default authService

