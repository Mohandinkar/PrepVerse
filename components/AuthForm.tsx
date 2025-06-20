"use client"
import Link from "next/link"
import Image from "next/image"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {toast} from "sonner";
import {Form} from "@/components/ui/form"
import {useRouter} from "next/navigation"
import CustomFormField from "@/components/FormField";

// const formSchema = z.object({
//     username: z.string().min(2).max(50),
// })

const AuthFormSchema = (type:FormType) =>{
    return z.object({
        name: type === "sign-up" ? z.string().min(2).max(50) : z.string().optional(),
        email: z.string().email(),
        password: z.string().min(5),
    })
}



const AuthForm = ({type}:{type:FormType}) => {

    const router = useRouter()
    // 1. Define your form.
    const formSchema = AuthFormSchema(type)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email:"",
            password: ""
        },
    })

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        try{
            if(type === "sign-up"){
                toast.success("Account created successfully. Please sign in");
                router.push("/sign-in");

            }
            else{
                toast.success("Signed in successfully");
                router.push("/");
            }

        }catch(e){
            console.log(e)
            toast.error(`There was an error ${e}`)
        }

    }

    const isSignIn = type === "sign-in";

    return (
        <div className="card-border lg:min-w-[566px]">
            <div className="flex flex-col gap-6 card py-14 px-10 " >
                <div className="flex flex-row gap-2 justify-center">
                    <Image src="/logo.svg" alt="logo" width={38} height={32}/>
                    <h2 className="text-primary-100">PrepVerse</h2>
                </div>
                <h3>Practice job interview with AI</h3>

            <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full mt-4 form">
                {
                    !isSignIn &&( <CustomFormField control={form.control}
                                            name="name"
                                            label="Name"
                                            placeholder="Your Name"/>)
                }

                <CustomFormField control={form.control}
                                 name="email"
                                 label="Email"
                                 placeholder="Your Email Address"
                                 type="email"/>

                <CustomFormField control={form.control}
                                 name="password"
                                 label="Password"
                                 placeholder="Enter your password"
                                 type="password"/>
                
                <Button type="submit" className="btn">{isSignIn ? "Sign in" : "Create an account"}</Button>
            </form>
        </Form>
                <p className="text-center">{
                    isSignIn ? "Don't have an account?" : "Already have an account?"
                }
                    <Link href={!isSignIn ? "/sign-in" : "/sign-up"} className="text-user-priimary ml-1 font-bold">
                        {!isSignIn ? "Sign in" : "Sign up"}
                    </Link>
                </p>
        </div>
        </div>
    )
}
export default AuthForm
