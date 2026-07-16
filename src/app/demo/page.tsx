//localhost:3000/demo

"use client";

import * as Sentry from "@sentry/nextjs"
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { POST } from "../api/demo/background/route";
import { useAuth } from "@clerk/nextjs";

export default function DemoPage(){
    const {userId} = useAuth();

    const [loading, setLoading] = useState(false);
    const [loading2, setLoading2] = useState(false);

    const HandleBlocking = async () => {
        setLoading(true);
        await fetch ("/api/demo/blocking", {method: "POST"});
        setLoading(false);
    };

    const HandleBackground = async () => {
        setLoading2(true);
        await fetch ("/api/demo/background", {method: "POST"});
        setLoading2(false);
    };


    //1) Client error - throw in the browser 
    const handleClientError = () => {
        Sentry.logger.info("USER try to click on client function",{userId})
        throw new Error("Client error: something went wrong with the browser!");
    };

    //2) API error - trigger server-side error
    const handleApiError = async () => {
        await fetch("/api/demo/error", {method: "POST"});
    };


    //3) Inngest error - trigger error in the background job
    const handleInngestError = async () => {
        await fetch ("api/demo/inngest-error", {method : "POST"})
    };


    return (
        <div className="p-8 space-x-4">
            <Button disabled ={loading} onClick={HandleBlocking}>
                {loading ? "Loading..." : "Blocking"}
            </Button>

            <Button disabled ={loading2} onClick={HandleBackground}>
                {loading2 ? "Loading..." : "Background"}
            </Button>
            <Button
                variant = "destructive"
                onClick={handleClientError}
            >
                Client error
            </Button>
            <Button
                variant = "destructive"
                onClick={handleApiError}
            >
                API error
            </Button>
            <Button
                variant = "destructive"
                onClick={handleInngestError}
            >
                Inngest error
            </Button>
        </div>
    );
};

