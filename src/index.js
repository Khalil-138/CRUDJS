import express from 'express'
import router from './router/users.js';

const app = express(); 
app.use(express.json())

app.use('/api/v1', router)
//rotas
const port = 3000 // ou 3001 9090 9091 9000

app.listen(port, () => {
    console.info("Servidor rodando na porta " + port)

} )

