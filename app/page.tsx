'use client';
import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import Image from 'next/image';
// hero icons v2
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const result = await signIn('credentials', {
            email,
            password,
            redirect: false // Desativa o redirecionamento automático do NextAuth
        });

        if (result?.error) {
            alert('Credenciais inválidas!');
        } else {
            Cookies.set('auth', 'true');
            router.push('/pages');
        }
    };

    return (
        <main className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <Image
                src="/assets/logo_redlub_column.png"
                alt="Imagem"
                width={200}
                height={200}
            />
            <h1 className="my-6 text-2xl">Entre no dashboard</h1>
            <form onSubmit={handleSubmit} className="flex flex-col">
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="E-mail"
                    required
                    className="p-2 mb-4 border border-gray-300 rounded"
                />
                <div className="relative">
                    <input
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Senha"
                        required
                        className="pr-10 p-3 mb-4 border border-gray-300 rounded"
                    />
                    <button
                        type="button"
                        className="absolute inset-y-0 right-3 flex items-center justify-center"
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        {showPassword ? <EyeSlashIcon className="h-5 w-5 mb-3.5" /> : <EyeIcon className="h-5 w-5 mb-3.5" />}
                    </button>
                </div>
                <button type="submit" className="p-2 bg-blue-500 text-white rounded">Entrar</button>
            </form>
        </main>
    );
}
