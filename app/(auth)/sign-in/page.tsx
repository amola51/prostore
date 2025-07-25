import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { APP_NAME } from "@/lib/constants";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CredencialsSignInForm from "./credencials-signin-form";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
    title: "Sign In",
    description: "",
}
const SignInPage = async (props: {
    searchParams: Promise<{
        callbackUrl: string
    }>
}) => {
    const { callbackUrl } = await props.searchParams;
    // on successfully login redirect to home
    const session = await auth();
    if(session){
        return redirect(callbackUrl || '/');
    }
    // else login page
    return <div className="w-full max-w-md mx-auto">
        <Card>
            <CardHeader className="space-y-4">
                <Link href="/" className="flex-center">
                <Image src='images/logo.svg' width={100} height={100} alt={`${APP_NAME} logo`} priority={true}/>
                </Link> 
                <CardTitle  className="text-center">
                    Sign In
                </CardTitle>
                <CardDescription  className="text-center">
                    Sign in to your account
                </CardDescription>
                <CardContent className="space-y-4">
                    <CredencialsSignInForm />
                </CardContent>

            </CardHeader>

        </Card>
    </div>
}

export default SignInPage;