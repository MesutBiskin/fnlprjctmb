"use client"
import Image from "next/image"
import { useState } from "react"
import Link from "next/link";


export default function Register() {
   
    const [email, setEmail] = useState(); // email and password states 
    const [password, setPassword] = useState();
    const [creatingUser, setCreatingUser] = useState(false);
    const [ userCreated, setUserCreated] = useState(false);
    const [ error, setError] = useState(false);

    // Register Formunu line 22 de submit ettik ve 
    //bu function`i formdda hanldeformsubmit ile calistirdik.line 22
    // Formdan event aldik bunu ev ile functiona koyduk
   async function handleFormSubmit(ev) {
    ev.preventDefault();            // html de formunu apidaki register route gonderiyoruz
    setCreatingUser(true); 
    setError(false);   // hata mesajlari.user olustururken
    setUserCreated(false);
   
        const response = await fetch('/api/register', {
        method: 'POST',
        body: JSON.stringify({email, password}),
        headers: {'Content-Type': 'application/json'},
    });
    if (response.ok) { 
        setUserCreated(true);
    }
     else {
        setError(true)
     }
    if (!response.ok) {
        setError(true);
    }
    
        setCreatingUser(false);
        
}
   
    return (

        <section className="mt-8">
        <h1 className="text-center text-primary text-4xl mb-4">
            Register
        </h1>
        {userCreated &&(
            <div className="my-4 text-center">
                User created.<br /> Now you can{''}
                <Link className= "underline" href={'/login'}>Login &raquo;</Link>
            </div>
        )}
        {error && (
            <div className="my-4 text-center">
                An error has occured <br /> 
                Please try again later
        </div>
        )}
      <form className="bock max-w-xs mx-auto" onSubmit={handleFormSubmit}>
        <input type="email" placeholder="email" value={email}
        disabled={creatingUser}
        onChange={ev => setEmail(ev.target.value)} />
        <input type="password" placeholder="password" value={password}
         disabled={creatingUser}
        onChange={ev => setPassword(ev.target.value)}/>

        <button type="submit"  disabled={creatingUser}>
            Register
         </button >
        <div className="my-4 text-center text-gray-500">
            or login with provider
            </div>
            <button  onClick= {() => signIn('google', {callbackUrl:'/'})}
             className="flex gap-4 justify-center">
            <Image src={'/assets/google.png'} alt={""} width={32} height={32} />
        Login with Google
        </button>
        <div className="text-center my-4 text-gray-500 border-t pt-4">
            Existing Account? {' '} <Link href={'/login'}>Login here &raquo;</Link>
        </div>
      </form>
     
        </section>
    )
}