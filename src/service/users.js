import User from "../model/users.js"
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

const JWT_SEGREGO = "S3GR3D0"
const SALT = 10 //12


class ServiceUser {

    FindAll() {

        // return User.FindAll()
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
    async Create(nome, email, senha, ativo, permissao) {
        if (!nome || !email || !senha) {
            throw new Error("favor preencher todos os campos")
            //const senhaCriptografada = "teste"

        }
        const senhaCriptografada = await bcrypt.hash(String(senha), SALT)

        await User.create({
            nome,
            email,
            senha: senhaCriptografada,
            ativo,
            permissao
        })
    }
    async Update(id, nome, senha, email, ativo) {
        const ouldUser = User.findByPk(id)

        ouldUser.senha = senha
            ? await bcrypt.hash(String(senha), SALT)
            : ouldUser.senha

        //verificar se o index é valido 0, 1 ou 2 na posição do array
        //oldUser.nome = nome || oldUser.nome
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

        if (
            !user
            || !(await bcrypt.compare(String(senha), user.senha))
        ) {
            throw new Error("Email ou senha inválidos.")
        }

        return jwt.sign({ id: user.id, nome: user.nome, permissao: user.permissao }, JWT_SEGREGO,
            { expiresIn: 60 * 60 }
        )
    }

}
export default new ServiceUser()