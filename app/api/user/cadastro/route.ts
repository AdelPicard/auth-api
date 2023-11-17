import mongoose from "mongoose"
import connectDB from "../../../../libs/mongo"
import User from "../../../../models/user"
import { NextResponse } from 'next/server'
import { createToken } from "../../../../acess/jwtAcess"



export async function POST(req:any) {
  const { name, email, password } = await req.json()
  await connectDB()
  const userEmail = await User.find({email: email})

  const _userToken = createToken(email, name)
  
  if (userEmail.length > 0) {
    return NextResponse.json({
      msg: "Endereço de e-mail já está sendo usado"
    }, {status: 400})
  } else {
    await User.create({ name, email, password })
    return NextResponse.json({
      _userToken
    }, {status: 201})
  }

}