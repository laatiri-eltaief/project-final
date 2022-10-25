const mongoose=require('mongoose')
const express=require('express')
const { createActivity, getActivity, deleteActivity, updateActivity } = require('../controllers/ActivityController')
const router=express.Router()

router.post('/',createActivity);
router.get('/', getActivity);
router.delete('/:ActivityId',deleteActivity);
router.put('/:ActivityId', updateActivity);
module.exports = router;