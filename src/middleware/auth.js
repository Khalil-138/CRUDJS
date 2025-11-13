import jwt from 'jsonwebtoken'
import ServiceUser from '../service/users.js'
const JWT_SEGREGO = "S3GR3D0"

export default function authMiddleware(roles = []) {
    return async (req, res, next) => {

        try {
            const token = req.headers['authorization']
            if (!token) {
                throw new Error("Você não tem permissão para realizar esta ação")
            }
            const decoded = jwt.verify(token.split(' ')[1], JWT_SEGREGO)
            const user = await ServiceUser.FindOne(decoded.id)
            if(
                roles.length &&
                !roles.includes(user.permissao)
            ) {
                throw new Error("você não tem permissao para realizar esta ação")
            }

            req.headers.user = user

            next()
        } catch (error) {
            res.status(403).send({
                data: null,
                msg: error.message,
                error: true
            })

        }
    }

}

