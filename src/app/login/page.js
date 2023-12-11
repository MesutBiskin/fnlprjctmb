"use client"
import {signIn} from "next-auth/react";
import { useState } from "react";
import Image from "next/image"

export  default function LoginPage() {
    const [email, setEmail] = useState(''); // email and password states 
    const [password, setPassword] = useState('');
    const [loginInProgress, setLoginInProgress] = useState(false);

    //Defines an asynchronous function handleFormSubmit that is called when the login form is submitted.
    // It prevents the default form submission, sets the loginInProgress state to true, calls the signIn function from NextAuth.js 
    // with the provided credentials, and then sets loginInProgress back to false.
    async function handleFormSubmit(ev) {
        ev.preventDefault();
        setLoginInProgress(true);
        
        await signIn('credentials', {email, password, callbackUrl:'/'});
        
      
        setLoginInProgress(false);
    }

    return(
        <section className="mt-8">
            <h1 className="text-center text-primary text-4xl mb-4">
            Login
        </h1>
        <form className="max-w-xs mx-auto" method="POST" onSubmit={handleFormSubmit}>
        <input type="email" name="email" placeholder="email" value={email}
             disabled={loginInProgress}
             onChange={ev => setEmail(ev.target.value)} />

        <input type="password" name="password" placeholder="password" value={password}
             disabled={loginInProgress}
            onChange={ev => setPassword(ev.target.value)}/>

        <button disabled={loginInProgress}  type="submit">Login</button>
        <div className="my-4 text-center text-gray-500">
            or login with provider
            </div>
            <button type="button" onClick={() => signIn('google', {callbackUrl: '/'})}
            className="flex gap-4 justify-center">
            <Image src={'/assets/google.png'} alt={""} width={32} height={32} />
             Login with Google
        </button>
        </form>
        </section>
    );
}