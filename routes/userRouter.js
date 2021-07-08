// const router = require('express').Router()
import express from 'express';
import { register, login, logout, refreshToken, getUser, addCart, history } from '../controllers/userCtrl.js'
import auth from '../middleware/auth.js'

var router = express.Router();

router.post('/register', register)

router.post('/login', login)

router.get('/logout', logout)

router.get('/refresh_token', refreshToken)

router.get('/infor', auth,  getUser)

router.patch('/addcart', auth, addCart)

router.get('/history', auth, history)


export default router