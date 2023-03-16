import { Login } from '../../../../service/user'

export default function requestHandler(req, res) {
  //http://localhost:3000/api/user/login
  try {
    const user = Login(req.body)
    res.status(200).json(user)
  } catch (error) {
    res.status(400).json(error.message)
  }
}
