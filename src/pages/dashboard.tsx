import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Helmet } from "react-helmet-async"

export function DashboardPage() {
  return (
    <>
      <Helmet>
        <title>CostQ | Home</title>
      </Helmet>
      <div className="grid gap-4">
      <Card>
        <CardHeader>
          <CardTitle>Welcome</CardTitle>
          <CardDescription>
            This is your dashboard
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Start building your application from here. The sidebar navigation is fully functional.
          </p>
        </CardContent>
      </Card>
    </div>
    </>
  )
}
