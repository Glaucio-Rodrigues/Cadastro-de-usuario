import express from 'express'
import publicRoutes from './routes/public.js'
import privateRoutes from './routes/private.js'
import auth from './middlewares/auth.js'
import dotenv from 'dotenv'
import cors from 'cors' //importando o cors

dotenv.config()


const app = express()

app.use(express.json()) // avisar a aplicação que irá usar json
app.use(cors())//habilitando o cors

app.use('/', publicRoutes)
app.use('/',auth, privateRoutes)


app.listen(3000, ()=> console.log("Servidor funcionando!")) // porta onde o servidro vai rodar

// login MOngo -> glauciorodrigues2236
// senha -> 9Lx6BHYCnpwCLEbU
// mongodb+srv://glauciorodrigues2236:9Lx6BHYCnpwCLEbU@users.eyovdbx.mongodb.net/?retryWrites=true&w=majority&appName=Users
//Generate a Random JWT secret Key comando note abaico
// node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
// foi instalado tamebm o dotnev -> npm install dotenv
// usar o npm install cors para autorizar a entrada do site no backend