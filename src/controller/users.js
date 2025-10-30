import ServiceUser from '../service/users.js'

class ControllerUser {

    FindAll(_, res) {
        try {
            const user = ServiceUser.FindAll()
            res.status(200).send({ user })

        } catch (error) {
            res.status(500).send({ error: error.message })
        }
    }

    async FindOne(req, res) {
        try {
            const id = req.params.id

            const nome = await ServiceUser.FindOne(id)

            res.status(200).send({ nome })
        } catch (error) {
            res.status(500).send({ error: error.message })
        }
    }

    async Create(req, res) {
        try {
            const { nome, email, senha, ativo } = req.body

            await ServiceUser.Create(nome, email, senha, ativo)
            
            res.status(201).send()
        } catch (error) {
            res.status(500).send({ error: error.message })
        }
    }

   async Update(id, nome, email, senha, ativo) {
        if (!id){
            
        }
            const id = req.params.id
            const nome = req.body.nome

            ServiceUser.Update(id, nome)
            
            res.status(200).send()
        } catch (error) {
            res.status(500).send({ error: error.message })
        }
    }

    async Delete(req, res) {
        try {
            const id = req.params.id
            await ServiceUser.Delete(id)
            res.status(204).send()
        } catch (error) {
            res.status(500).send({ error: error.message })
        }
    }
}
export default new ControllerUser()