import axios from 'axios';
import React, { useReducer } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const initialState = {
  username: '',
  password: '',
  errors: {}
}

const userReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_INPUT_FIELDS':
      return { ...state, [action.field]: action.value }

    case 'SIGNIN_FAILURE':
      return { ...state, errors: action.payload }

    default:
      return state
  }
}

export const SignIn = () => {
  const [userData, dispatch] = useReducer(userReducer, initialState)
  // console.log(user)
  const navigate = useNavigate()

  const handleChange = (e) => {
    dispatch({ type: 'UPDATE_INPUT_FIELDS', field: e.target.name, value: e.target.value })
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log('user=', userData)

    let errors = {}
    if(userData.username.trim() === "") errors.username = 'Username should not be Empty !'
    if(userData.password.trim() === '') errors.password = 'Password should not be Empty !'
    if(Object.keys(errors).length > 0) {
      dispatch({ type: 'SIGNIN_FAILURE', payload: errors })
      return
    }
    
    try{
      let response = await axios.get("https://natural-nest-723f4-default-rtdb.firebaseio.com/users.json")
            
      let usersArray = []
      Object.entries(response.data).map((user) => {
        usersArray.push(user[1])
      })

      if(isValidUser(usersArray)) {
        navigate('/')
      }
      else {
        let errors = {}
        errors.error = 'Not a valid user !'
        dispatch({ type: 'SIGNIN_FAILURE', payload: errors })
      }
    }
    catch (error) {
      let errors = {}
        errors.net_error = 'Network Error'
        dispatch({ type: 'SIGNIN_FAILURE', payload: errors })
    }
  }

  const isValidUser = (users) => {
    return users.some((user) => {
      if(user.username === userData.username && user.password === userData.password) {
        return true
      }
    })
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-lime-600 to-lime-500 px-4">
      <div className="w-full max-w-md bg-lime-600 p-8 rounded-lg shadow-lg text-white">
        {userData.errors.net_error &&  <p className="text-red-300 text-2xl text-center">{userData.errors.net_error}</p> }
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">Sign In</h1>
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Username Input */}
          {userData.errors.error &&  <p className="text-red-300 text-lg text-center">{userData.errors.error}</p> }
          <div>
            <input type="text" onChange={handleChange} name='username' placeholder="Enter username" className="w-full p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-white outline-0"/>
            {userData.errors.username && <p className="text-red-300 text-sm">{userData.errors.username}</p>}
          </div>
          
          {/* Password Input */}
          <div>
            <input type="password" onChange={handleChange} name = 'password' placeholder="Enter password" className="w-full p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-white outline-0"/>
            {userData.errors.password && <p className="text-red-300 text-sm">{userData.errors.password}</p>}
          </div>

          {/* Submit Button */}
          <div>
            <button type="submit"  className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300 cursor-pointer">
              Sign In
            </button>
          </div>

          {/* Register Link */}
          <p className="text-white text-sm text-center mt-4">
            If you haven't registered before, please{" "}
            <Link to="/register" className="text-green-300 font-medium hover:underline hover:text-green-400 transition duration-300">
              Register now
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};
