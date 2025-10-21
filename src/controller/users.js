import ServiceUser from '../service/users.js'

class ControllerUser {

 FindAll(_, res) {
    try { 
        const nomes = ServiceUser.FindAll()
        res.status(200).send({ nomes })
        
    } catch (error) {
        res.status(500).send({ error: error.message })
    }
}
    FindOne(req, res) {
    try { 
        const index = req.params.index 


        const nome = ServiceUser.FindOne(index)
        res.status(200).send({nome})
    } catch (error) {
        res.status(500).send({ error: error.message })
    }
}
    Create(req, res) {
    try { 
        console.log(req.body.nome)
        ServiceUser.Create(nome)
        res.status(201).send()
        
    } catch (error) {
        res.status(500).send({ error: error.message })
    }
}
   Update(req, res) {
    try { 
        const index = req.params.index 
        const nome = req.body.nome
        ServiceUser.Update(index, nome)
        res.status(200).send()
        
    } catch (error) {
        res.status(500).send({ error: error.message })
    }
}
   Delete(req, res) {
    try { 
        const index = req.params.index
        ServiceUser.Delete(index)
        res.status(204).send(resultado)
        
    } catch (error) {
        res.status(500).send({ error: error.message })
    }
   
   
    }
}
export default new ControllerUser()