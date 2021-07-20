// const router = require('express').Router()
import express from 'express';
import { getWeddingPlans, createWeddingPlans, deleteWeddingPlans, updateWeddingPlans } from '../controllers/weddingPlanCtrl.js'
import auth from '../middleware/auth.js'
import authAdmin from '../middleware/authAdmin.js'


var router = express.Router();

router.route('/wedding_plans')
    .get(getWeddingPlans)
    .post(auth, authAdmin, createWeddingPlans)


router.route('/wedding_plans/:id')
    .delete(auth, authAdmin, deleteWeddingPlans)
    .put(auth, authAdmin, updateWeddingPlans)



export default router