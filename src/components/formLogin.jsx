import InputDefault from "./inputDefault";

export default function FormLogin() {
    return (
        <div className="w-screen flex">
            <div className="w-[45%] h-screen">
                <img className="object-cover w-full h-full rounded-r-lg" src="Login-Photo.jpeg" alt="Login" />
            </div>

            <div className="w-1/2 flex flex-col justify-center ">
                <h3 className="text-slate-200 mb-4 text-center">Olá, bem-vindo de volta</h3>
                <form action="" className="">
                    <div className="flex flex-col text-left mb-4">
                        <span className="text-slate-200 mb-2">Email</span>
                        <InputDefault
                            type="email"
                            placeholder="Digite seu e-mail"
                        />
                    </div>
                    <div className="flex flex-col text-left mb-4">
                        <span className="text-slate-200 mb-2">Senha</span>
                        <InputDefault
                            type="password"
                            placeholder="Digite sua senha"
                        />
                    </div>
                    <input className="text-slate-200 bg-blue-500 px-4 py-2 rounded w-full cursor-pointer" type="submit" value="Entrar" />
                </form>
            </div>
        </div>
    );
}
