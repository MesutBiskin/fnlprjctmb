'use client';
import { useSession } from 'next-auth/react'
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { redirect } from 'next/navigation';


export default function ProfilePage(){
  
    const session = useSession();
    const [userName, setUserName] = useState('');
    const {status} = session;

    useEffect(() => {
    if (status === 'authenticated') { 
    setUserName(session.data.user.name);
    }    
    }, [session, status]);



    function handleProfileInfoUpdate(ev) {
        ev.preventDefault();
        fetch('/api/profile', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({name: userName}),
        })
    }
   

    if( status === 'loading' ){
        return 'Loading...';
    }
    if (status === 'unauthenticated ') {
        return redirect('/login');

    }
    const userImage = session.data.user.image;

            async function handleDeleteUser(ev) {
                ev.preventDefault();
                try {
                  const response = await fetch('/api/profile', {
                    method: 'DELETE',
                  });
            
                  if (response.ok) {
                    // Redirect to the login page or any other page after successful deletion
                    router.push('/login');
                  } else {
                    console.error('Error deleting user:', response.statusText);
                  }
                } catch (error) {
                  console.error('Error deleting user:', error);
                }
              }        
            
return (
    <section className="mt-8">
        <h1 className="text-center text-primary text-4xl mb-4">
            Profile
        </h1>
        <div  className='max-w-md mx-auto'>
            <div className='flex gap-2 items-center'>
        <div className='bg-gray-300 p-2 rounded-lg relative '>
           <Image className="rounded-lg w-full h-full" src={userImage} width={250} height={250} alt={'avatar'} />
           <button type='button'>Change avatar</button>
        </div>
        <form className='grow' onSubmit={handleProfileInfoUpdate}>
            <input type='text' placeholder="First and Last name" 
            value={userName} onChange={ev => setUserName(ev.target.value)}/>
            <input type="email" disabled={true} value={session.data.user.email} />
            <button type="submit" className='mb-2'>Save</button>
            
            <button type="button" onClick={handleDeleteUser} className="text-red-500">Delete</button>
        </form>
       </div>
        </div> 
    </section>
)

}