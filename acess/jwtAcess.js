import jwt from "jsonwebtoken";
import { textChangeRangeNewSpan } from "typescript";
require('dotenv').config()

const _secrect_key = process.env.JWT_SECRET_KEY

export const createToken = (email, name) => {
    return jwt.sign({ 
        email: email, 
        name: name
    }, _secrect_key)
}

export const readToken = (token) => {
    try {
        return jwt.verify(token, _secrect_key)
    } catch (error) {
        return { msg: "Token inválido!" }
    }
}

export const verifyToken = (token) => {
    return readToken(token)
}