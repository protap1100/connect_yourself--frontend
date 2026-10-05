"use server"

import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export type ActionState = {
    success: boolean;
    statusCode: number;
    message: string;
    data?: {
        accessToken: string;
        refreshToken: string;
    };
} | null;

export const loginAction = async (prevState: ActionState, formData: FormData): Promise<ActionState> => {
    const email = formData.get("email");
    const password = formData.get("password");

    const payload = { email, password };

    try {
        // Updated port from 6000 (restricted) to an unrestricted port (e.g., 5000)
        const res = await fetch(`http://localhost:8080/api/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        });

        // Safe handling for non-JSON or HTTP error
        if (!res.ok) {
            const errorText = await res.text();
            console.error("Backend response error:", errorText);
            return {
                success: false,
                statusCode: res.status,
                message: "Authentication failed or invalid server response."
            };
        }

        const result = await res.json();

        if (result.success && result.data) {
            const cookieStore = await cookies();

            cookieStore.set("accessToken", result.data.accessToken, {
                httpOnly: true,
                maxAge: 60 * 60 * 24,
                sameSite: "lax",
                path: "/",
            });

            cookieStore.set("refreshToken", result.data.refreshToken, {
                httpOnly: true,
                maxAge: 60 * 60 * 24 * 7,
                sameSite: "lax",
                path: "/",
            });

            redirect("/dashboard");
        }

        return result;
    } catch (error) {
        // rethrow redirect error so Next.js handles navigation properly
        if ((error as Error).message === "NEXT_REDIRECT") {
            throw error;
        }

        console.error("Network/Server Error:", error);
        return {
            success: false,
            statusCode: 500,
            message: "Unable to connect to the authentication server."
        };
    }
};