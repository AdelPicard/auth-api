import cookie from "cookies-next"
import { verifyToken } from "@/acess/jwtAcess"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"


export default async function Home() {

  const data = () => {
    const userCookie = cookies().get('authorization')

    if (!userCookie) {
      redirect('/login')
    }

    verifyToken(userCookie)
    console.log('Tudo certo!')
    console.log(userCookie)
  }

  data()


  return (
    <div className='flex items-center justify-center text-white'>
      Página segura - Perfil do usuário
    </div>
  )
}


