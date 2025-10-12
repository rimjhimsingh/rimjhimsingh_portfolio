import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home } from "lucide-react"
import { Suspense } from "react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#f5f2e8] dark:bg-background flex flex-col items-center justify-center text-center p-4">
      <h1 className="text-6xl font-bold text-red mb-4">404</h1>
      <h2 className="text-3xl font-semibold mb-6">Page Not Found</h2>
      <p className="text-lg mb-8 max-w-md">Sorry, the page you are looking for doesn't exist or has been moved.</p>
      <Suspense fallback={<Button className="bg-red hover:bg-red/80 text-white">Loading...</Button>}>
        <Button asChild className="bg-red hover:bg-red/80 text-white">
          <Link href="/">
            <Home className="mr-2 h-4 w-4" /> Back to Home
          </Link>
        </Button>
      </Suspense>
    </div>
  )
}
