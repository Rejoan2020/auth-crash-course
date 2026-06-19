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

export { doSignOut, doSignInWithGoogle, doSignInWithGithub };