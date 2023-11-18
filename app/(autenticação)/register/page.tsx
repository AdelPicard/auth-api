"use client"

import AuthButton from "@/components/authButton";
import AuthCard from "@/components/authCard";
import AuthInput from "@/components/authInput";
import Link from "next/link";
import { setCookie } from "cookies-next"
import { useRouter } from "next/navigation";

import { useState } from "react";

const RegisterPage = () => {
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
            const res = await fetch('api/user/cadastro/', {
                method: "POST",
                body: JSON.stringify(formData)
            })

            const json = await res.json()

            if (res.status !== 201) throw new Error(json.msg)
            setCookie('authorization', json)
            router.push('/')
        } catch (error:any) {
            setError(error.message)
            console.log(error.message)
        }
    }

    return (
        <>
            <AuthCard title="Crie sua conta">
                <form className="" onSubmit={handleForm}>
                    <AuthInput label="NOME" type="text" placeholder="digite um nome" required value={formData.name} onChange={(e:any) => { handleFormEdit(e, 'name') }}/>
                    <AuthInput label="E-MAIL" type="email" placeholder="digite um e-mail" required value={formData.email} onChange={(e:any) => { handleFormEdit(e, 'email') }}/>
                    <AuthInput label="SENHA" type="password" placeholder="digite uma senha" required value={formData.password} onChange={(e:any) => { handleFormEdit(e, 'password') }}/>
                    <AuthButton>
                        Registrar
                    </AuthButton>
                    {error && <p className="text-[12px] text-[#d91111]">{error}</p>}
                    <div className="flex pt-2 flex-wrap">
                        <p className="text-[12px] pr-[1px]">Já possui uma conta?</p><Link className="text-[12px] text-[#115ed9]" href="/login">Entre agora!</Link>
                    </div>
                </form>
            </AuthCard>
        </>
    );
}

export default RegisterPage;