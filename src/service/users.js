import User from "../model/users.js"
import jwt from 'jsonwebtoken'

const JWT_SEGREGO = "S3GR3D0"


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

    async Login(email, senha) {
        if (!email || !senha) {
            throw new Error("Email ou senha inválidos.")
        }

        const user = await User.findOne({ where: { email } })

        if (!user || user.senha !== senha) {
            throw new Error("Email ou senha inválidos.")
        }

        return jwt.sign({ id: user.id, nome: user.nome}, JWT_SEGREGO,
            { expiresIn: 60 * 60 }
         )
    }

}
export default new ServiceUser()