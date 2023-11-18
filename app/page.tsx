import React from 'react'
import cookie from "cookies-next"
import { verifyToken } from "@/acess/jwtAcess"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { Avatar } from "@nextui-org/react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import UserAvatar from '@/components/avatarComp'


export default async function Home() {

  const data = () => {
    const userCookie = cookies().get('authorization')

    if (!userCookie) {
      redirect('/login')
    }

    verifyToken(userCookie)
  }

  data()

  const click = () => {
    cookies().delete('authorization')
    redirect('/login')
  }

  return (
    <>
      <div className='flex pt-10 items-center h-[100%] justify-center text-white'>
        <UserAvatar />
      </div>
    </>

  )
}


