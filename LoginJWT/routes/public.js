import express from 'express'
import bcrypt from 'bcrypt'
import JWT from 'jsonwebtoken'

import { PrismaClient } from '@prisma/client'



const prisma = new PrismaClient()

const router = express.Router()
const JWT_SECRET = process.env.JWT_SECRET

// Rota de Cadastro
router.post('/cadastro', async (req, res) => {
    try { // try/catch é uma trava de segurança

        const User = req.body

        const salt = await bcrypt.genSalt(10)// força da senha
        const hashPassword = await bcrypt.hash(User.password, salt) // incriptando a senha


        const userDB = await prisma.User.create({
            data: {
                email: User.email,
                name: User.name,
                password: hashPassword, // usando o hash de senha
            },
        })

        res.status(201).json(userDB)
    }catch (err) {
  console.error(err) // Mostra o erro real
  res.status(500).json({ message: 'Erro no servidor, tente novamente' })
}

})

// Rota de login

router.post('/login', async (req, res) => {

    try {
        const userInfo = req.body
        // busca usuario no banco
        const user = await prisma.user.findUnique({ // Ir no prisma e buscar um usuario
            where: { email: userInfo.email } // procurar por email que esta no req.body
        })
        //verifica se tem o usuario
        if (!user) { 
            return res.status(404).json({ message: "Usuario não encontrado" })
        }

        const isMatch = await bcrypt.compare(userInfo.password, user.password) // comparar a senha com o hash de senha

        if (!isMatch) {
            return res.status(400).json({ message: "Senha invalida" })
        }

        //Gerar o Token JWT

        const token =JWT.sign({id: user.id}, JWT_SECRET, {expiresIn: '1m'}) // expiresIn = tempo de navegação

        res.status(200).json({ message: "Login efetuado com sucesso", token })

    }catch (err) {
  console.error(err) // Mostra o erro real
  res.status(500).json({ message: 'Erro no servidor, tente novamente' })
}

})

export default router