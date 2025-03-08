import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Plane, Users } from "lucide-react"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Plane className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">SkyOps</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="text-sm font-medium text-primary">
              Home
            </Link>
            <Link href="/dashboard" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              Dashboard
            </Link>
            <Link href="/flights" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              Flights
            </Link>
            <Link href="/maintenance" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              Maintenance
            </Link>
            <Link href="/hub" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              Hub Management
            </Link>
            <Link href="/reports" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              Reports
            </Link>
            <Link href="/eco-routes" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              Eco Routes
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm">
              <Users className="mr-2 h-4 w-4" />
              Login
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="container py-10">
          <div className="grid gap-6">
            <div className="flex flex-col md:flex-row justify-between gap-4">
              <div>
                <h1 className="text-3xl font-bold tracking-tight">Welcome to SkyOps</h1>
                <p className="text-muted-foreground">Your comprehensive flight operations management system.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Plane className="h-5 w-5 text-primary" />
            <span className="text-lg font-semibold">SkyOps</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2025 SkyOps Flight Operations Management. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
              Terms
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
              Privacy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}