"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { useActionState, useEffect } from "react"
import { toast } from "sonner"
import { loginAction } from "../_actions/LoginAction"

const LoginForm = () => {
    // Pass null as the initial state instead of false
    const [state, action, pending] = useActionState(loginAction, null);

    useEffect(() => {
        if (!state) return;

        if (state.success) {
            toast.success(state.message || "Login successful!");
        } else {
            toast.error(state.message || "Login failed");
        }
    }, [state]);

    return (
        <form action={action} className="space-y-4">
            <Card className="p-5 space-y-4">
                <Input 
                    name="email" 
                    type="email" 
                    placeholder="Enter Your Email" 
                    required 
                />
                <Input 
                    name="password" 
                    type="password" 
                    placeholder="Enter Your Password" 
                    required 
                />
                <Button type="submit" disabled={pending}>
                    {pending ? "Submitting..." : "Login"}
                </Button>
            </Card>
        </form>
    );
};

export default LoginForm;