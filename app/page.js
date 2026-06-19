import React from 'react'
import {auth } from '@/auth';
import Login from '@/app/components/Login';
import Logout from '@/app/components/Logout';
export default async function page() {
  const session = await auth();
  return (
    <>
    {session?.user ?
    <div>
      Hello {session?.user?.name}!
      <Logout/>
    </div>
    :
    <Login />
    }
    </>
  )
}
