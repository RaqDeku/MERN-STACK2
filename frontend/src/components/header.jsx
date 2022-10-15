import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {logout, reset} from '../features/auth/authSlice'
import {FaSignInAlt, FaUserAlt, FaSignOutAlt} from 'react-icons/fa'

export const Header = () => {
  let dispatch = useDispatch()
  let navigate = useNavigate()

  let {user} = useSelector(state => state.auth)

  function Logout() {
    dispatch(logout())
    dispatch(reset())
    navigate('/')
  }
  return (
    <>
      <nav className='navbar navbar-expand-lg bg-warning'>
        <div className='container-fluid'>
        <header>
          <div className='navbar-brand'><Link to='/'>Notes</Link></div>
            <ul className='navbar-nav'>
              { user ? (
                  <li className='nav-item px-2'>
                    <button className='btn btn-outline-primary' onClick={Logout}><FaSignOutAlt />LogOut</button>
                  </li>
              ) : (
                <>
                  <li className='nav-item px-2'>
                    <button className='btn btn-outline-primary'><Link to='/login'><FaSignInAlt />Login</Link></button>
                  </li>
                  <li className='nav-item px-2'>
                    <button className='btn btn-outline-primary'><Link to='/register'><FaUserAlt />Register</Link></button>
                  </li>
                </>
              ) }
            </ul>
        </header>
        </div>
      </nav>
    </>
  )
}

export default Header
