import axios from 'axios'

// Sending Request to register User
let URL = "/user/"

const register = async (userData) => {
    
    let response = await axios.post(URL + 'register', userData)

    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return register.data
}

const login = async (userData) => {
    
    let response = await axios.post(URL + 'login', userData)

    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return register.data
}


// Logging user user out
const logout = async() => {
    localStorage.removeItem('user')
}

const authService = {
    register, logout, login
}

export default authService

