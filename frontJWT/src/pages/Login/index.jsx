import { Link, useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import api from "../../services/api";
import 'bootstrap-icons/font/bootstrap-icons.css';

function Login() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    async function handleSubmit(event) {
        event.preventDefault();
        try {
            const response = await api.post('/login', {
                email: emailRef.current.value,
                password: passwordRef.current.value
            });

            const token = response.data.token;
            alert("Login OK!");
            localStorage.setItem("token", token);
            navigate('/listarUsuarios');
        } catch (err) {
            console.error("Erro completo:", err.response?.data || err.message);
            alert("Dados incorretos, verifique a senha e o email");
        }
    }

    return (
        <div className="max-w-xl mx-auto mt-10 bg-white p-8 border border-gray-400 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">Login</h2>
            <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                <input
                    ref={emailRef}
                    placeholder="Email"
                    type="email"
                    className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none"
                />
                <div className="relative">
                    <input
                        ref={passwordRef}
                        placeholder="Senha"
                        type={showPassword ? "text" : "password"}
                        className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none pr-10"
                    />
                    <i
                        className={`bi ${showPassword ? 'bi-eye-slash' : 'bi-eye'} absolute right-3 top-3 cursor-pointer text-gray-500`}
                        onClick={() => setShowPassword(!showPassword)}
                    ></i>
                </div>
                <button className="w-full bg-green-300 text-white py-2 px-4 rounded-md hover:bg-lime-800">Login</button>
            </form>
            <Link to="/" className="text-green-700 hover:underline mt-4 block text-center">
                Se não possue conta, Faça um cadastro!
            </Link>
        </div>
    );
}

export default Login;
