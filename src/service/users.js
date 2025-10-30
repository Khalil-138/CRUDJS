import User from "../model/users.js"


class ServiceUser {

    FindAll() {

        return User.FindAll()
    }
    async FindOne(id) {
        //verificar se o index é valido 0, 1 ou 2 na posição do array
        if (!id) {
            throw new Error("Favor informar o ID")
        }
        //preciso procurar um usurario no banco e retornar 
        const user = await User.findByPk(id)

        //User = banco || user= objeto

        if (!user) {
            throw new Error(`Usuário ${id} não encontrado`)
        }

        return user
    }
    async Create(nome, email, senha, ativo) {
        if (!nome || !email || !senha) {
            throw new Error("favor preencher todos os campos")

        }
        await User.create({
            nome, email, senha, ativo
        })
    }
    Update(id, nome) {
        //verificar se o index é valido 0, 1 ou 2 na posição do array
        User.Update(id, nome)
        //alterar o atributo do user
        // await user.save
    }

    async Delete(id) {
        if (!id) {
            throw new Error("Favor informar o ID")
        }
        const user = await User.findByPk(id)


        if (!user) {
            throw new Error(`Usuário ${id} não encontrado`)
        }


        await user.destroy()
    }
}

export default new ServiceUser()