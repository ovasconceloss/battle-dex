import { Header } from "@/components/header/Header";
import { Footer } from "@/components/footer/Footer";
import { SignUpForm } from "@/components/form/SignUp";
import { SignInForm } from "@/components/form/SignIn";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const Account: React.FC = () => {
    return (
        <>
            <Header />
            <section className="w-full flex items-center justify-center">
                <hr className="w-[90rem] mb-2 border-1 border-zinc-900/5" />
            </section>
            <main className="w-full h-[100vh] py-5 px-10">
                <section className="flex flex-col items-center justify-center">
                    <Tabs defaultValue="signup" className="w-[35rem] p-5 bg-zinc-100/30 rounded-md">
                        <TabsList className="w-full">
                            <TabsTrigger
                                value="signup"
                                className="transition-all ease-in-out cursor-pointer hover:bg-zinc-200">Sign Up</TabsTrigger>
                            <TabsTrigger
                                value="signin"
                                className="transition-all ease-in-out cursor-pointer hover:bg-zinc-200">Sign In</TabsTrigger>
                        </TabsList>
                        <TabsContent value="signup" className="space-y-5">
                            <h1 className="my-10 text-center text-2xl font-bold">Welcome! Create your account</h1>
                            <SignUpForm />
                        </TabsContent>
                        <TabsContent value="signin" className="space-y-5">
                            <h1 className="my-10 text-center text-2xl font-bold">Welcome back! Log In</h1>
                            <SignInForm />
                        </TabsContent>
                    </Tabs>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default Account;