import React from 'react'
import { doSignOut } from '@/app/actions';
export default function Logout() {
    
    return (
        <form action={doSignOut}>
            <button type="submit">
                Logout
            </button>
        </form>
    )
}
