import axios from 'axios'
import { setAlert } from './alert'
import {
  AUTH_ERROR,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  USER_LOADED,
  LOGOUT,
} from './types'
import setAuthToken from '../utils/setAuthToken'
// Load User
export const loadUser = () => async dispatch => {
  if (localStorage.token) {
    setAuthToken(localStorage.token)
  }

  try {
    const res = await axios.get(`/api/auth`)

    dispatch({
      type: USER_LOADED,
      payload: res.data,
    })

    dispatch(loadUser())
  } catch (error) {
    dispatch({ type: AUTH_ERROR })
  }
}

// Register user
export const register =
  ({ name, email, password }) =>
  async dispatch => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const body = JSON.stringify({ name, email, password })

    try {
      const res = await axios.post('/api/users', body, config)
      console.log(res.data)
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      })

      dispatch(loadUser())
    } catch (error) {
      const errors = error.response.data.errors

      if (errors) {
        errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
      }

      await dispatch({ type: REGISTER_FAIL })
    }
  }

// Login user
export const login = (email, password) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  }

  const body = JSON.stringify({ email, password })

  try {
    const res = await axios.post('/api/auth', body, config)
    console.log(res.data)
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    })

    dispatch(loadUser())
  } catch (error) {
    const errors = error.response.data.errors

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
    }

    await dispatch({ type: LOGIN_FAIL })
  }
}

// Logout user / Clear Profile
export const logout = () => dispatch => {
  dispatch({ type: LOGOUT })
}