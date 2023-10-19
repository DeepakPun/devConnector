import React, { Fragment, useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Spinner from '../layout/Spinner'
import { getProfileById } from '../../actions/profile'
import { useParams } from 'react-router-dom'

const Profile = ({ getProfileById, profile: { profile, loading }, auth }) => {
  const id = useParams()
  console.log(id)
  useEffect(() => {
    getProfileById(id)
    console.log(profile)
  }, [getProfileById, id])


  return <div>Profile</div>
}

Profile.propTypes = {
  getProfileById: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth,
})

export default connect(mapStateToProps, { getProfileById })(Profile)
