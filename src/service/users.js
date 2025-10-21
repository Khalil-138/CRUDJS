import ModelUser from "../model/users.js"


class ServiceUser {

    FindAll() {
    
        return ModelUser.FindAll()
    }
    FindOne(index) {
        //verificar se o index é valido 0, 1 ou 2 na posição do array
        return ModelUser.FindOne(index)
    }
    Create(nome) {
        return ModelUser.Create(nome)
    }
    Update(index, nome) {
         //verificar se o index é valido 0, 1 ou 2 na posição do array
        return  ModelUser.Update(index, nome)
    }
    Delete(index) {
         //verificar se o index é valido 0, 1 ou 2 na posição do array

        return ModelUser.Delete(index)
    }
}

export default new ServiceUser()