import {useState, useEffect} from 'react'
import {FaUser} from 'react-icons/fa'
import {useSelector , useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'
import { register, reset} from '../features/auth/authSlice'
import Input from '../components/input'
import Loading from '../components/loading'
import Footer from '../components/footer'

function Register() {
  const [formData, setFormData] = useState({
    name:'',
    email:'',
    password:'',
    password2:''
  })

  let { name, email, password, password2} = formData

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {user, isLoading, isSuccess, isError, message} = useSelector(
    state => state.auth)



  useEffect(() => {
    if(isError){
        toast.error(message)
    }
    if(isSuccess || user) {
        navigate('/dashboard')
        dispatch(reset())
    }
  }, [user, isError, isSuccess, message, navigate, dispatch])

  function onChange(e) {
    setFormData((prevState) => ({
        ...prevState,
        [e.target.name]:e.target.value
    }))
  }

  function onSubmit(e) {
    e.preventDefault()

    if (password !== password2) {
        toast.error('Password do not match')
    } else {
        const userData = {
            name,
            email,
            password,
        }

        dispatch(register(userData))
    }
  }

  if (isLoading) {
    return <Loading />
  }

  return (
    <>
        <div className='card'>
            <section>
                <h1><FaUser />Register</h1>
                <p>Please Create an Account</p>
            </section>
            <section>
                <form className='form' onSubmit={onSubmit}>
                    <div className="form-floating mb-3">
                        <Input
                        className="form-control input" 
                        name='name'
                        type="text" 
                        id="floatingInput" 
                        placeHolder="eg. John Parker"
                        onChange={onChange}
                        value={name} />
                        <label htmlFor="floatingInput">Full Name</label>
                    </div>
                    <div className="form-floating mb-3">
                        <Input
                        className="form-control input"
                        name='email' 
                        type="email" 
                        id="floatingInput" 
                        placeHolder="name@example.com"
                        onChange={onChange}
                        value={email} />
                        <label htmlFor="floatingInput">Email address</label>
                    </div>

                    <div className="form-floating mb-3">
                        <Input
                        className="form-control input"
                        name='password' 
                        type="password" 
                        id="floatingPassword" 
                        placeHolder="Password"
                        onChange={onChange}
                        value={password} />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>

                    <div className="form-floating mb-3">
                        <Input
                        name='password2' 
                        type="password" 
                        id="floatingPassword" 
                        placeHolder="Confirm Password"
                        onChange={onChange}
                        value={password2} />
                        <label htmlFor="floatingPassword">Confirm Password</label>
                    </div>
                    <button 
                    type="submit" 
                    className="btn btn-dark mb-3">Register
                    </button>
                </form>
            </section>
      </div>
      <Footer />
    </>
  )
}

export default Register