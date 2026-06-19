'use server'
import { signOut } from "@/auth";

async function doSignOut() {
        await signOut();
};

export { doSignOut };