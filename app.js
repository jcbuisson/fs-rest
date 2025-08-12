import express from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const app = express()


app.use(express.json())

app.get('/api/users/:id', async (req, res) => {
   const id = parseInt(req.params.id)
   const user = await prisma.User.findUnique({
      where: { id }
   })
   res.send(user)
})

app.post('/api/users', async (req, res) => {
   const user = await prisma.User.create({
      data: req.body
   })
   res.send(user)
})

app.put('/api/users/:id', async (req, res) => {
   const id = parseInt(req.params.id)
   const user = await prisma.User.findUnique({
      where: { id }
   })
   const updatedUser = await prisma.User.update({
      where: { id },
      data: req.body,
   })
   res.send(updatedUser)
})

app.patch('/api/users/:id', async (req, res) => {
   const id = parseInt(req.params.id)
   const user = await prisma.User.findUnique({
      where: { id }
   })
   const updatedUser = await prisma.User.update({
      where: { id },
      data: req.body,
   })
   res.send(updatedUser)
})

app.delete('/api/users/:id', async (req, res) => {
   const id = parseInt(req.params.id)
   const user = await prisma.User.delete({
      where: { id }
   })
   res.send(user)
})

app.get('/api/users', async (req, res) => {
   const users = await prisma.User.findMany({})
   res.send(users)
})

app.listen(3109, () => console.log(`App listening at http://localhost:3109`))
