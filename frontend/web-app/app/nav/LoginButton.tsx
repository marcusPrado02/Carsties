'use client'

import { Button } from "flowbite-react";
import { FC } from "react";
import { signIn } from "next-auth/react";

interface Props {
    
}
 
const LoginButton: FC<Props> = () => {
    return (
        <Button outline onClick={() => signIn('id-server', {callbackUrl: '/'})}>
            Login
        </Button>
    );
}
 
export default LoginButton; 