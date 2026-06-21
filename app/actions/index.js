'use server'
import { signIn,signOut } from "@/auth";

async function doSignOut() {
        await signOut();
};
async function doSignInWithGoogle() {
        await signIn('google',{ callbackUrl: '/' });
}
async function doSignInWithGithub() {
        await signIn('github',{ callbackUrl: '/' });
}

async function credentialSignIn(email, password) { 
        const response =await signIn('credentials', { email, password, callbackUrl: '/' });
        return response;
}

export { doSignOut, doSignInWithGoogle, doSignInWithGithub, credentialSignIn };