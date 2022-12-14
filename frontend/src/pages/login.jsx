import {useState, useEffect} from 'react'
import {FaSignInAlt} from 'react-icons/fa'
import {useSelector , useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'
import { login, reset } from '../features/auth/authSlice'
import Input from '../components/input'
import Loading from '../components/loading'
import Footer from '../components/footer'

const Login = () => {

  const [formData , setFormData] = useState({
    email:'',
    password:'',
  })

  let { email, password } = formData

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {user, isLoading, isSuccess, isError, message} = useSelector(
    state => state.auth)



  useEffect(() => {
    if(isError){
      toast.error(message)
    } 
    
    if(isSuccess || user) {
      dispatch(reset())
      navigate('/dashboard')
    }
  }, [user, isError, isSuccess, message, navigate, dispatch])

  function onChange(e) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]:e.target.value
    }))
  }

  function onSubmit(e) {
    // e.preventDefault()

    const userData = {
        email,
        password,
    }

    dispatch(login(userData))
  }

  if (isLoading) {
    return <Loading />
  }

  return (
    <>
      <div className='card'>
            <section>
                <h1><FaSignInAlt />Login</h1>
                <p>Login to continue</p>
            </section>
            <section>
                <form className='form' onSubmit={onSubmit}>
                    <div className="form-floating mb-3">
                        <Input
                        name='email' 
                        type="email" 
                        id="floatingInput" 
                        placeHolder="name@example.com"
                        onChange={onChange}
                        value={email} 

                        />
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating mb-3">
                        <Input
                        name='password' 
                        type="password" 
                        id="floatingPassword" 
                        placeHolder="Password"
                        onChange={onChange}
                        value={password} 

                        />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>
                    <button 
                    type="submit" 
                    className="btn btn-dark mb-3 btn-lg">Login
                    </button>
                </form>
            </section>
      </div>
      <Footer />
    </>
  )
}

export default Login
