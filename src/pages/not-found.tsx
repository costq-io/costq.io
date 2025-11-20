import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"
import { Home } from "lucide-react"
import { Helmet } from "react-helmet-async"

export function NotFoundPage() {
  const navigate = useNavigate()

  return (
    <>
      <Helmet>
        <title>CostQ | 404 Not Found</title>
      </Helmet>
      <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <div className="flex flex-col items-center text-center space-y-8 max-w-md">
        <div className="space-y-4">
          <h1 className="text-9xl font-bold">404</h1>
          <h2 className="text-2xl font-semibold">Page Not Found</h2>
          <p className="text-muted-foreground text-base">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>
        <Button
          onClick={() => navigate("/app/home")}
          size="lg"
        >
          <Home className="mr-2 h-4 w-4" />
          Go Home
        </Button>
      </div>
    </div>
    </>
  )
}
