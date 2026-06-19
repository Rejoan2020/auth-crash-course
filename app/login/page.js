import Login from '@/app/components/Login'; 
import { signIn, singOut, auth } from '@/auth';
import {redirect} from 'next/navigation';

export default async function login() { 
  const session = await auth();

  return (
    <>
    {session?.user ? (
      redirect('/')
    ) : (
      <Login />
    )}
    </>
  );
}
