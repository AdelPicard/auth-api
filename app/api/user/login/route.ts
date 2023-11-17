import connectDB from "../../../../libs/mongo"
import User from "../../../../models/user"
import { NextResponse } from 'next/server'
import { createToken } from "../../../../acess/jwtAcess"

export async function POST(req:any) {
    const { name, email, password } = await req.json()
    await connectDB()
    const userEmail = await User.find({email: email})
    const userPassword = await User.find({password: password})

    const _userToken = createToken(email, name)
    
    if (userEmail.length < 1) { 
        return NextResponse.json({
            msg: "Email não existente"
        }, {status:400})
    }

    if (userPassword.length < 1) {
        return NextResponse.json({
            msg: "Senha inválida"
        }, {status: 400})
    }
  
    return NextResponse.json({
        _userToken
    })
  }