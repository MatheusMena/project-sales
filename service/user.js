const users = [] // integrar com DB posteriormente

export function register(body){
const user = users.find((item) => item.email === body.email)
if(user) {
    throw new Error('usuário inserido já possui uma conta')
}
users.push(body)
return body
}

export function Login(body){
    const user = users.find((item) => item.email === body.email)
    if(!user) {
        throw new Error('usuário inserido não pertence a uma conta')
    }  
    if(!user.password !== body.password) {
        throw new Error('Senha incorreta')
    }  
}