import { useState, useContext, useEffect } from 'react'
import { UserContext } from './UserContext'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const LogIn = () => {
  const [userName, setUserName] = useState('')
  const [pass, setPass] = useState('')
  const { setUser, setTasks, APP_API_URL } = useContext(UserContext)
  const navigate = useNavigate()

  useEffect(() => {
    console.log('Hi! from loading')
    sessionStorage.removeItem('doMeToken')
    setUser(false)
  }, [setUser])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (userName.length === 0) {
      alert('Must provide username')
      return
    }
    if (pass.length === 0) {
      alert('Must provide password')
      return
    }
    // console.log(userName)
    let payload = { 'type': 'login', 'username': userName, 'password': pass }
    let response = await axios.post(`${APP_API_URL}/login`, payload)
    // console.log('response')
    // console.log(response.data.msg)
    // console.log(response.data.id)
    if (response.data.msg === 'invalid') {
      alert('Invalid username and/or password')
      return
    }
    setUser(true)
    sessionStorage.setItem('doMeToken', response.data.msg)
    sessionStorage.setItem('id', response.data.id)
    let head = { headers: { 'Authorization': `Bearer ${sessionStorage.getItem('doMeToken')}` } }
    payload = { 'type': 'load', 'userId': sessionStorage.getItem('id') }
    response = await axios.post(`${APP_API_URL}/tasks`, payload, head)
    setTasks(response.data.tasks)
    navigate('/')
  }

  return (
    <div>
      <div className="app-name-bar"><Link className="app-name" to="/" ><div >Do me.</div></Link></div>
      <div className='cont-container' >
        <div className='container column-flex cool-green no-border'>
          <h1 className="form-title off-white" >Login</h1>
          <form className='login-form' onSubmit={handleSubmit}>
            <div className='form-entry off-black-font'>
              <label htmlFor='username'>username</label>
              <input value={userName} onChange={(e) => setUserName(e.target.value)} type='text' placeholder='username' id='userName' name='userName' />
            </div>
            <div className='form-entry off-black-font'>
              <label htmlFor='password'>password</label>
              <input value={pass} onChange={(e) => setPass(e.target.value)} type='password' placeholder='********' id='password' name='password' />
            </div>
            <button type='submit'>Log In</button>
          </form>
          <footer className='login-footer'>
            <p>Don't have an account? Register <Link to="/register">here</Link></p>
          </footer>
        </div>
      </div>
    </div>
  )
}

export default LogIn