import { register } from "../../../../service/user";

export default function requestHandler(req, res) {
    //http://localhost:3000/api/user/register
    try {
        const user = register(req.body)
        res.status(201).json(user)
    } catch (error) {
        res.status(400).json(error.message)
    }
}
