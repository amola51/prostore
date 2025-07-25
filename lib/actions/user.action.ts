'use server'
import { signInFromScheme } from "../validators"
import { signIn, signOut } from '@/auth'
import { isRedirectError } from "next/dist/client/components/redirect-error";

// Sign in ther user credencials
export async function signInWithCredencials(prevState:unknown, formData: FormData) {
    try {
        const user = signInFromScheme.parse({
            email: formData.get('email'),
            password: formData.get('password'),
        });
        await signIn('credentials', user);
        return { success: true, message: 'Signed in successfully' }
    } catch (error) {
        if(isRedirectError(error)){
            throw error;
        }
        return { success: false, message: 'Invalid email or password' }
    }
}

// Sign user out

export async function signOutUser(){
    await signOut();
}