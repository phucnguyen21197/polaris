"use client";

import { ClerkProvider, SignInButton, useAuth, SignUpButton, UserButton } from "@clerk/nextjs";
import { ConvexReactClient, Authenticated, Unauthenticated, AuthLoading } from "convex/react";
import { ReactNode } from "react";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { ThemeProvider } from "./theme-provider";
import { UnauthenticatedView } from "@/features/auth/components/unauthenticated-view";
import { AuthLoadingView } from "@/features/auth/components/authenticated-view";



const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);
export const Providers = ({children}: {children: ReactNode}) => {
    return (
        <ClerkProvider>
            <ConvexProviderWithClerk client = {convex} useAuth={useAuth}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    enableSystem
                    disableTransitionOnChange
                >
                    <Authenticated>
                        <UserButton/>
                        {children}
                    </Authenticated>
                    <Unauthenticated>
                        <UnauthenticatedView/>
                        <SignInButton/>
                        <SignUpButton/>
                    </Unauthenticated>
                    <AuthLoading>
                        <AuthLoadingView/>
                    </AuthLoading>
                </ThemeProvider>
            </ConvexProviderWithClerk>
        </ClerkProvider>
    );
};