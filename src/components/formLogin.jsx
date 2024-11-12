import InputDefault from "./inputDefault";
import InputSubmit from "./inputSubmit";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {faLock} from '@fortawesome/free-solid-svg-icons'

export default function FormLogin() {
    return (
        <div className="w-screen flex">
            <div className="w-[45%] h-screen">
                <img className="object-cover w-full h-full" src="Login-Photo-2.png" alt="Login" />
            </div>

            <div className="w-1/2 flex flex-col items-center justify-center">
                <h1 className="text-slate-200 mb-4 text-center font-anton text-4xl">Olá, bem-vindo de volta</h1>
                <form action="" className="w-96">
                    <div className="flex flex-col text-left mb-4">
                        <span className="text-slate-200 mb-2 font-roboto">Email</span>
                        <div className="flex items-center bg-dark-blue-2 pl-3 focus-within:outline focus-within:outline-2 focus-within:outline-purple-alert">
                            <FontAwesomeIcon className="text-purple-alert" icon={faEnvelope} />
                            <InputDefault
                                type="email"
                                placeholder="Digite seu e-mail"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col text-left mb-4">
                        <span className="text-slate-200 mb-2 font-roboto">Senha</span>
                        <div className="flex items-center bg-dark-blue-2 pl-3 focus-within:outline focus-within:outline-2 focus-within:outline-purple-alert">
                            <FontAwesomeIcon className="text-purple-alert" icon={faLock} />
                            <InputDefault
                                type="password"
                                placeholder="Digite sua senha"
                            />
                        </div>
                    </div>
                    <div className="flex justify-between mb-6">
                        <div className="flex items-center gap-2">
                            <input className="text-dark-blue-2" type="checkbox" name="" id="" />
                            <span className="text-slate-200 font-roboto text-sm">Lembrar email</span>
                        </div>
                        <a className="text-purple-alert font-roboto " href="">Esqueci minha senha</a>
                        
                    </div>
                    <InputSubmit
                        value="Entrar"/>
                </form>
                <div className="mt-4">
                    <p className="text-slate-200 font-roboto">Voce não tem uma conta? <a className="text-purple-alert font-roboto" href="">Cadastre-se aqui.</a></p>
                </div>
            </div>
        </div>
    );
}
