const express = require('express')
const router = express.Router()

// @router        GET api/users
// @desc          Test
// @access        Public
router.get('/', (req, res) => res.send('Auth Route'))

module.exports = router
