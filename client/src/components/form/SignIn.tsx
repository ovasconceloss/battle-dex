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

export const SignInForm: React.FC = () => {
    const formSchema = z.object({
        password: z.string().min(8, { message: "Password must be at least 8 characters." }),
        email: z.string().min(1, { message: "This field has to be filled." }).email("This is not a valid email."),
    });

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="h-full flex flex-col space-y-8">
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
                <Button type="submit" className="w-full p-5 mt-auto text-md cursor-pointer">Log In</Button>
            </form>
        </Form>
    )
}