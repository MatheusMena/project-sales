export default function register() {
    return (
        <div className="flex items-center justify-center min-h-screen lg:px-20 text-center bg-slate-300">
            <div></div>
            <div className="bg-slate-100 lg:static absolute z-10 rounded-r-lg shadow-2xl flex flex-col items-center justify-center w-screen h-screen sm:w-1/2 sm:h-[50%] sm:py-10 lg:h-[80vh] lg:px-20 ">
                <h1 className="py-10 text-5xl font-sans">Criar conta</h1>
                <div className="bg-slate-300 rounded-md  p-3 my-1 flex items-center">
                    <input
                        className=" bg-slate-300 rounded-md w-56 outline-none placeholder:italic"
                        type="email"
                        placeholder="Email"
                    />
                </div>
                <div className="bg-slate-300 rounded-md p-3 my-1 flex items-center">
                    <input
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
            </div>
        </div>
    );
}
