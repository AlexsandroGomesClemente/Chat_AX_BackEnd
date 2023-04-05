import {Request, Response } from 'express'
import { User } from '../models/User'

export const loginUser = async (req:Request, res:Response) => {
    const emailLog = req.body.email as string
    const passwordLog = req.body.password as string
    const user =  await User.findAll({
        where:{
            email:emailLog,
            password: passwordLog
        }
    })

    if (user.length > 0) {
        res.status(200).send({data:"Logado com sucesso", user})
    } else {
        res.status(400).send({data:"Usuario incorreto"})
    }
  
    
}


export const registerUser = async (req:Request, res:Response) => {
    const name = req.body.name as String
    const email = req.body.email as String
    const password = req.body.password as String
    const newUser = {
        name,
        email,
        password
    }

    if ( name !== '' && email !== '' && password !== '') {
        const user = await User.create(newUser);
        res.status(200).send({data: "Usuario cadastro com sucesso"});
    }else {
        res.status(400).send({data: "Usuario não cadastrado"});
    }

    
}


export const getUser = async (req:Request, res:Response) => {
    const user =  await User.findAll()
    res.status(200).send(JSON.stringify(user))
}