import express from 'express'
import { PrismaClient } from '@prisma/client'
const router = express.Router()
const prisma = new PrismaClient()


router.get('/Listar-usuarios', async (req, res) => {

try {

    const users = await prisma.user.findMany()

    res.status(200).json({message: 'Usuario encontrados com sucesso', users})
    
}catch (err) {
  console.error(err) // Mostra o erro real
  res.status(500).json({ message: 'Erro no servidor, tente novamente' })
}


})
export default router