import { Fragment, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/layout/Navbar'
import Landing from './components/layout/Landing'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import Alert from './components/layout/Alert'
import Dashboard from './components/dashboard/Dashboard'
import PrivateRoute from './components/routing/PrivateRoute'
import CreateProfile from './components/profile-forms/CreateProfile'

// Redux
import { Provider } from 'react-redux'
import store from './store'
import setAuthToken from './utils/setAuthToken'
import { loadUser } from './actions/auth'
import EditProfile from './components/profile-forms/EditProfile'
import AddExperience from './components/profile-forms/AddExperience'
import AddEducation from './components/profile-forms/AddEducation'

if (localStorage.token) {
  setAuthToken(localStorage.token)
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser())
  }, [])
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Routes>
            <Route exact path='/' element={<Landing />} />
          </Routes>
          <section className='container'>
            <Alert />
            <Routes>
              <Route exact path='/register' element={<Register />} />
              <Route exact path='/login' element={<Login />} />
              <Route
                exact
                path='/dashboard'
                element={<PrivateRoute component={Dashboard} />}
              />
              <Route
                exact
                path='/create-profile'
                element={<PrivateRoute component={CreateProfile} />}
              />
              <Route
                exact
                path='/edit-profile'
                element={<PrivateRoute component={EditProfile} />}
              />
              <Route
                exact
                path='/add-experience'
                element={<PrivateRoute component={AddExperience} />}
              />
              <Route
                exact
                path='/add-education'
                element={<PrivateRoute component={AddEducation} />}
              />
            </Routes>
          </section>
        </Fragment>
      </Router>
    </Provider>
  )
}

export default App
