import jwt from "jsonwebtoken"

const users = [] // integrar com DB posteriormente

const secret = process.env.JWT_SECRET

function createToken(user){
return jwt.sign({email: user.emal, password: user.password}, secret)
}

function tokenReader(token){
try {
    return jwt.verify(token, secret)
} catch (error) {
    throw new Error("token inválido")
}
}

export function tokenVerify(token){
tokenReader(token)
}

export function register(body){
const user = users.find((item) => item.email === body.email)
if(user) {
    throw new Error('usuário inserido já possui uma conta')
}
users.push(body)
const token = createToken(body)
return token
}

export function Login(body){
    const user = users.find((item) => item.email === body.email)
    if(!user) {
        throw new Error('usuário inserido não pertence a uma conta')
    }  
    if(user.password !== body.password) {
        throw new Error('Senha incorreta')
    }
    const token = createToken(user)
    return token
}