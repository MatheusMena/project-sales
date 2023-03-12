import { useState } from "react";
import Link from "next/link";
import { setCookie } from "cookies-next";
import { useRouter } from "next/router";

export default function register() {
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: ''
    })

    const [err, setErr] = useState('')

    const router = useRouter();

    const handleChange = (e: { target: { value: any; }; }, inputValue: any) => {
        setUser({
            ...user,
            [inputValue]: e.target.value
        })
    }

    const formValidation = async (e: { preventDefault: () => void; }) => {
        try {
            e.preventDefault()
            const response = await fetch('/api/user/register', {
                method: 'POST',
                body: JSON.stringify(user)
            })
            const data = await response.json()
            if (response.status !== 201) throw new Error(data)
            setCookie('authorization', data)
            router.push('/homePage')
            console.log(response.status)
            console.log(data)
        } catch (error: any) {
            setErr(error.message)
        }
        console.log(user)
    }

    return (
        <div className="flex items-center justify-center min-h-screen lg:px-20 text-center bg-slate-300">

            <form onSubmit={formValidation} className="bg-slate-100 lg:static absolute z-10 rounded-r-lg shadow-2xl flex flex-col items-center justify-center w-screen h-screen sm:w-1/2 sm:h-[50%] sm:py-10 lg:h-[80vh] lg:px-20 ">
                <h1 className="py-10 text-5xl font-sans">Criar conta</h1>

                <div className="bg-slate-300 rounded-md  p-3 my-1 flex items-center">

                    <input
                        onChange={(e) => handleChange(e, 'name')}
                        required
                        value={user.name}
                        className=" bg-slate-300 rounded-md w-56 outline-none placeholder:italic"
                        type="text"
                        placeholder="Nome"
                    />
                </div>
                <div className="bg-slate-300 rounded-md  p-3 my-1 flex items-center">

                    <input
                        onChange={(e) => handleChange(e, 'email')}
                        required
                        value={user.email}
                        className=" bg-slate-300 rounded-md w-56 outline-none placeholder:italic"
                        type="email"
                        placeholder="Email"
                    />
                </div>
                <div className="bg-slate-300 rounded-md p-3 my-1 flex items-center">
                    <input
                        onChange={(e) => handleChange(e, 'password')}
                        required
                        value={user.password}
                        className="bg-slate-300 rounded-md w-56 outline-none placeholder:italic"
                        type="password"
                        placeholder="Senha"
                    />
                </div>
                <div className="flex justify-center my-10">
                    <button className="bg-green-500 m-1 p-2 rounded-lg hover:bg-green-600">
                        Criar Conta
                    </button>
                </div>
                <div className="text-rose-700">
                    {err}
                </div>
                <Link href="/LoginPage" className=''>
                    ja possui uma conta?
                </Link>
            </form>

        </div>
    );
}
