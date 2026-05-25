const express=require('express')
const { regAdmin, loginAdmin, logoutAdmin, getDashboardStats } = require('../controller/adminController')
const router=express.Router()

router.post('/register',regAdmin)
router.post('/login',loginAdmin)
router.post('/logout',logoutAdmin)

router.get('/dashboard-stats',getDashboardStats)


module.exports=router