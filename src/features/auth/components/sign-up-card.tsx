
"use client";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { FcGoogle } from "react-icons/fc";

import { Button } from "@/components/ui/button";
import { 
    Card, 
    CardContent, 
    CardHeader, 
    CardDescription,
    CardTitle 
} from "@/components/ui/card";

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { registerSchemas } from "../schemas";
import { useRegister } from "../api/use-register";
import { signUpWithGoogle } from "@/lib/oauth";

export const SignUpCard = () => {
    const { mutate, isPending } = useRegister();

    const form = useForm<z.infer<typeof registerSchemas>>({
        resolver: zodResolver(registerSchemas),
        defaultValues: {
            name: "",
            email: "",
            password: ""
        },
    });

    const onSubmit = (values: z.infer<typeof registerSchemas>) => {
        mutate({ json: values });
    }

    return (
        <Card className = "w-full h-full md:w-[487px] border-none shadow-none">
            <CardHeader className="flex items-center justify-center text-center p-7">
                <CardTitle className="text-2xl"><span className="text-red-700">Create </span>new account</CardTitle>
                <CardDescription>By signin in, you agree to our  <a href="/termsofservices" className="text-red-700">Terms of Services</a></CardDescription>
                
            </CardHeader>
            <div className = "px-7">
                <Separator />
            </div>
            <CardContent className = "p-7">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className = "space-y-4">
                        <FormField 
                            name = "name"
                            control = {form.control}
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input 
                                            {...field}
                                            type = "text"
                                            placeholder="Full name"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField 
                            name = "email"
                            control = {form.control}
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input 
                                            {...field}
                                            type = "email"
                                            placeholder="Email address"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField 
                            name = "password"
                            control = {form.control}
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input 
                                            {...field}
                                            type = "password"
                                            placeholder="Password"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        
                        <Button disabled={isPending} size="lg" className="w-full">
                            Create account
                        </Button>
                        <CardDescription>Already had an account? <a href="/sign-in" className="text-red-700">Sign in</a></CardDescription>
                    </form>
                </Form>
            </CardContent>
            <div className = "px-7">
                <Separator />
            </div>
           
            <CardContent className = "p-7 flex flex-col gap-y-4">
                <Button
                    onClick={() => signUpWithGoogle()}
                    variant = "secondary"
                    size = "lg"
                    className = "w-full"
                    disabled = {isPending}
                >
                    <FcGoogle className = "mr-2 size-5" />
                    Login with Google
                </Button>
            </CardContent>
            
        </Card>
    )
}
