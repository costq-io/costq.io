import { LoginForm } from "@/components/login-form"
import { Helmet } from "react-helmet-async"

export function LoginPage() {
  return (
    <>
      <Helmet>
        <title>CostQ | Login</title>
      </Helmet>
      <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10">
        <div className="flex w-full max-w-sm flex-col gap-6">
          <LoginForm />
        </div>
      </div>
    </>
  )
}
