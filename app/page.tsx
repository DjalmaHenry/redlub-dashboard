'use client';
import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
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
        <main className="p-4 md:p-10 mx-auto max-w-7xl">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    required
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Senha"
                    required
                />
                <button type="submit">Entrar</button>
            </form>
        </main>
    );
}
