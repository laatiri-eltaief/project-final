const mongoose=require('mongoose')
const express=require('express')
const { createHost, getHost, deleteHost, updateHost } = require('../controllers/HostController')
const router=express.Router()

router.post('/',createHost);
router.get('/', getHost);
router.delete('/:HostId',deleteHost);
router.put('/:HostId', updateHost);
module.exports = router;