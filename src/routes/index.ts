import { Router } from "express";
import * as userController from '../controllers/userController'

const router = Router()

// Rotas para Login & Registro do usuario.
router.get('/getUsers', userController.getUser)
router.post('/login', userController.loginUser)
router.post('/register', userController.registerUser)



export default router

