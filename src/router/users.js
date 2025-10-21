import express from 'express'
import ControllerUser from '../controller/users.js'
// importar controller
//o objetivo da rota é disponibilizar o endpoint e jogar para o controller responsável 
//ctrl ; para comentar tudo

const router = express.Router()
// api/v1
router.get('/users', ControllerUser.FindAll) //pegar todos
 router.get('/user/:index', ControllerUser.FindOne) //pegar um
 router.post('/user', ControllerUser.Create) //cadastrar um
 router.put('/user/:index',ControllerUser.Update) //alterar um
 router.delete('/user/:index', ControllerUser.Delete) //deletar um

export default router