import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {logout, reset} from '../features/auth/authSlice'
import {FaSignInAlt, FaUserAlt, FaSignOutAlt} from 'react-icons/fa'


export const Header = () => {
  let dispatch = useDispatch()
  let navigate = useNavigate()

  const {user} = useSelector(state => state.auth)

  function Logout() {
    dispatch(logout())
    dispatch(reset())
    navigate('/')
  }
  return (
    <>
      <header>
        <div className='container-fluid'>
          <h1><Link className='link' to='/homepage'>Notes</Link></h1>
            <ul>
              { user ? (
                  <li>
                    <button className='btn btn-outline-dark' onClick={Logout}><FaSignOutAlt />LogOut</button>
                  </li>
              ) : (
                <>
                  <li>
                    <button className='btn btn-outline-dark'><Link className='link' to='/login'><FaSignInAlt />Login</Link></button>
                  </li>
                  <li>
                    <button className='btn btn-outline-dark'><Link className='link' to='/register'><FaUserAlt />Register</Link></button>
                  </li>
                </>
              ) }
            </ul>
        </div>
      </header>
    </>
  )
}

export default Header
