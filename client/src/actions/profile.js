import axios from 'axios'
import { setAlert } from './alert'

import {
  ACCOUNT_DELETED,
  CLEAR_PROFILE,
  GET_PROFILE,
  PROFILE_ERROR,
  UPDATE_PROFILE,
} from './types'

// Get current user's profile
export const getCurrentProfile = () => async dispatch => {
  try {
    const res = await axios.get('/api/profile/me')

    dispatch({
      type: GET_PROFILE,
      payload: res.data,
    })
  } catch (error) {
    dispatch({
      type: PROFILE_ERROR,
      payload: {
        msg: error.response.data.msg,
        status: error.response.status,
      },
    })
  }
}

// Create or update a profile
export const createProfile =
  (formData, navigate, edit = false) =>
  async dispatch => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }

      const res = await axios.post('/api/profile', formData, config)

      dispatch({
        type: GET_PROFILE,
        payload: res.data,
      })

      dispatch(
        setAlert(edit ? 'Profile Updated' : 'Profile created', 'success')
      )

      if (!edit) {
        navigate('/dashboard')
      }
    } catch (error) {
      const errors = error.response.data.errors

      if (errors) {
        errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
      }

      dispatch({
        type: PROFILE_ERROR,
        payload: {
          msg: error.response.data.msg,
          status: error.response.status,
        },
      })
    }
  }

// Add experience
export const addExperience = (formData, navigate) => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const res = await axios.put('/api/profile/experience', formData, config)

    dispatch({
      type: UPDATE_PROFILE,
      payload: res.data,
    })

    dispatch(setAlert('Experience added', 'success'))
  } catch (error) {
    const errors = error.response.data.errors

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
    }

    dispatch({
      type: PROFILE_ERROR,
      payload: {
        msg: error.response.data.msg,
        status: error.response.status,
      },
    })
  }
}

// Add education
export const addEducation = (formData, navigate) => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const res = await axios.put('/api/profile/education', formData, config)

    dispatch({
      type: UPDATE_PROFILE,
      payload: res.data,
    })

    dispatch(setAlert('Education added', 'success'))
  } catch (error) {
    const errors = error.response.data.errors

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
    }

    dispatch({
      type: PROFILE_ERROR,
      payload: {
        msg: error.response.data.msg,
        status: error.response.status,
      },
    })
  }
}

// delete experience
export const deleteExperience = id => async dispatch => {
  try {
    const res = await axios.delete(`/api/profile/experience/${id}`)

    dispatch({
      type: UPDATE_PROFILE,
      payload: res.data,
    })

    dispatch(setAlert('Experience removed', 'success'))
  } catch (error) {
    const errors = error.response.data.errors

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
    }

    dispatch({
      type: PROFILE_ERROR,
      payload: {
        msg: error.response.data.msg,
        status: error.response.status,
      },
    })
  }
}

//Delete education
export const deleteEducation = id => async dispatch => {
  try {
    const res = await axios.delete(`/api/profile/education/${id}`)

    dispatch({
      type: UPDATE_PROFILE,
      payload: res.data,
    })

    dispatch(setAlert('Education removed', 'success'))
  } catch (error) {
    const errors = error.response.data.errors

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
    }

    dispatch({
      type: PROFILE_ERROR,
      payload: {
        msg: error.response.data.msg,
        status: error.response.status,
      },
    })
  }
}

// DELETE ACCOUNT and profile
export const deleteAccount = () => async dispatch => {
  if (
    window.confirm(
      'Are you sure you want to delete? This will also delete all information such as education, experience, posts etc. associated with this account. This cannot be undone.'
    )
  ) {
    try {
      await axios.delete(`/api/profile`)

      dispatch({
        type: CLEAR_PROFILE,
      })

      dispatch({
        type: ACCOUNT_DELETED,
      })

      dispatch(setAlert('Your account has been permanently deleted.'))
    } catch (error) {
      const errors = error.response.data.errors

      if (errors) {
        errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
      }

      dispatch({
        type: PROFILE_ERROR,
        payload: {
          msg: error.response.data.msg,
          status: error.response.status,
        },
      })
    }
  }
}
