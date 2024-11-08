import InputDefault from "./inputDefault";
import InputSubmit from "./inputSubmit";
export default function FormLogin() {
    return (
        <div className="w-screen flex">
            <div className="w-[45%] h-screen">
                <img className="object-cover w-full h-full" src="Login-Photo-1.png" alt="Login" />
            </div>

            <div className="w-1/2 flex flex-col items-center justify-center">
                <h1 className="text-slate-200 mb-4 text-center font-tungstenMedium text-4xl">Olá, bem-vindo de volta</h1>
                <form action="" className="w-96">
                    <div className="flex flex-col text-left mb-4">
                        <span className="text-slate-200 mb-2 font-poppins">Email</span>
                        <InputDefault
                            type="email"
                            placeholder="Digite seu e-mail"
                        />
                    </div>
                    <div className="flex flex-col text-left mb-4">
                        <span className="text-slate-200 mb-2 font-poppins">Senha</span>
                        <InputDefault
                            type="password"
                            placeholder="Digite sua senha"
                        />
                    </div>
                    <div className="flex justify-between mb-6">
                        <div className="flex items-center gap-2">
                            <input type="checkbox" name="" id="" />
                            <span className="text-slate-200 font-poppins text-sm">Lembrar email</span>
                        </div>
                        <a className="text-purple-alert font-poppins " href="">Esqueci minha senha</a>
                    </div>
                    <InputSubmit
                        value="Entrar"/>
                </form>
                <div className="mt-4">
                    <p className="text-slate-200 font-poppins">Voce não tem uma conta? <a className="text-purple-alert font-poppins" href="">Cadastre-se aqui.</a></p>
                </div>
            </div>
        </div>
    );
}
