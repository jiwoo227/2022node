const express = require('express')
const router = express.Router()

const EmployeeController = require('../controller/employeeController')

router.get('/showAll' , EmployeeController.showAll)
router.get('/show', EmployeeController.show)
router.get('/insert', EmployeeController.insert)
router.put('/update', EmployeeController.update)
router.delete('/delete', EmployeeController.destory)

module.exports = router