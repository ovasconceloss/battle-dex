import { z } from "zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

export const SignUpForm: React.FC = () => {
    const formSchema = z.object({
        username: z.string().min(2, { message: "Username must be at least 2 characters." }),
        password: z.string().min(8, { message: "Password must be at least 8 characters." }),
        confirmPassword: z.string().min(8, { message: "Password must be at least 8 characters." }),
        email: z.string().min(1, { message: "This field has to be filled." }).email("This is not a valid email."),
    }).refine(
        (values) => { return values.password === values.confirmPassword; },
        {
            message: "Passwords must match!",
            path: ["confirmPassword"],
        }
    );

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            username: "",
            password: "",
            confirmPassword: ""
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="h-full flex flex-col space-y-8">
                <FormField control={form.control} name="username" render={({ field }) => (
                    <FormItem>
                        <FormLabel>Username</FormLabel>
                        <FormControl>
                            <Input placeholder="jonhdoe2006" {...field} />
                        </FormControl>
                        <FormMessage className="h-5" />
                    </FormItem>
                )}
                />
                <FormField control={form.control} name="email" render={({ field }) => (
                    <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                            <Input placeholder="example@example.com" {...field} />
                        </FormControl>
                        <FormMessage className="h-5" />
                    </FormItem>
                )}
                />
                <FormField control={form.control} name="password" render={({ field }) => (
                    <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                            <Input type="password" {...field} />
                        </FormControl>
                        <FormMessage className="h-5" />
                    </FormItem>
                )}
                />
                <FormField control={form.control} name="confirmPassword" render={({ field }) => (
                    <FormItem>
                        <FormLabel>Confirm Password</FormLabel>
                        <FormControl>
                            <Input type="password" {...field} />
                        </FormControl>
                        <FormMessage className="h-5" />
                    </FormItem>
                )}
                />
                <Button type="submit" className="w-full p-5 mt-auto cursor-pointer">Create Account</Button>
            </form>
        </Form>
    )
}