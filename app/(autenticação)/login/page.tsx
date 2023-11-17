'use client'

import AuthButton from "@/components/authButton";
import AuthCard from "@/components/authCard";
import AuthInput from "@/components/authInput";
import Link from "next/link";
import { setCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { useState } from 'react'


const LoginPAge = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    })

    const router = useRouter()
    const [error, setError] = useState('')

    const handleFormEdit = (event:any, name:any) => {
        setFormData({
            ...formData,
            [name]: event.target.value
        })
    }

    const handleForm = async (event:any) => {
        try {
            event.preventDefault()
            const res = await fetch('api/user/login/', {
                method: "POST",
                body: JSON.stringify(formData)
            })

            const json = await res.json()

            if (res.status !== 200) throw new Error(json.msg)
            setCookie('authorization', json)
            router.push('/')
        } catch (error:any) {
            setError(error.message)
        }
    }

    return (
        <>
            <AuthCard title="Entre na sua conta">
                <form className="flex flex-col" onSubmit={handleForm}>
                    <AuthInput label="E-MAIL" type="email" placeholder="digite um e-mail" value={formData.email} required onChange={(e:any) => { handleFormEdit(e, 'email') }}/>
                    <AuthInput label="SENHA" type="password" placeholder="digite uma senha" value={formData.password} required onChange={(e:any) => { handleFormEdit(e, 'password') }}/>
                        <a className="text-[12px] text-[#115ed9] pt-1" href="#">Esqueceu sua senha?</a>
                    <AuthButton>
                        Entrar
                    </AuthButton>

                    {error && <p className="text-[12px] text-[#d91111]">{error}</p>}
                    
                    <div className="flex pt-2 flex-wrap">
                        <p className="text-[12px] pr-[1px]">Ainda não possui um conta?</p><Link className="text-[12px] text-[#115ed9]" href="/register">Registre-se!</Link>
                    </div>
                </form>
            </AuthCard>
        </>
    );
}

export default LoginPAge;