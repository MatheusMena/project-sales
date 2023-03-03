import { EnvelopeIcon, LockClosedIcon } from "@heroicons/react/24/solid";
import { useRouter } from 'next/router'

export default function LoginPage() {
const router = useRouter() 
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen flex-1 px-20 text-center bg-slate-300">
        <div className="bg-white rounded-md shadow-2xl flex flex-col items-center  w-1/3 max-w-screen-lg h-96">
          <h1 className="py-10 text-5xl font-sans">Login</h1>
          <div className="bg-slate-100 w-72 p-4 my-1 flex items-center">
            <EnvelopeIcon className="w-5 text-cyan-900 mr-2" />
            <input
              className=" bg-slate-100 w-56 outline-none"
              type="email"
              placeholder="Email"
            />
          </div>
          <div className="bg-slate-100 w-72 p-4 my-1 flex items-center">
            <LockClosedIcon className="w-5 text-cyan-900 mr-2" />
            <input
              className="bg-slate-100 w-56 outline-none"
              type="password"
              placeholder="Senha"
            />
          </div>
          <div className="flex justify-center my-10">
            <button className="bg-green-500 m-1 p-2 rounded-lg hover:bg-green-600">Criar Conta</button>
            <button className="bg-indigo-500 m-1 p-2 rounded-lg hover:bg-indigo-600"
            onClick={() => router.push("/homePage")}
            >
                Entrar</button>
          </div>
        </div>
      </div>
    </>
  );
}