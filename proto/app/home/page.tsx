import Link from "next/link"
import { ArrowRight, CheckCircle2, Plane, MapPin, Settings, Calendar } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold">
            <Plane className="h-5 w-5" />
            <span>AeroManage</span>
          </div>
          <nav className="hidden md:flex gap-6">
          <Button asChild variant="ghost" size="sm" className="bg-primary text-white hover:bg-primary-dark transition-colors">
            <Link href="/home" className="text-sm font-medium">
              Home
            </Link>
          </Button>           <Link href="/" className="text-sm font-medium text-primary">
              Dashboard
            </Link>
            <Link
              href="/flights"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Flights
            </Link>
            <Link
              href="/maintenance"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Maintenance
            </Link>
            <Link
              href="/hub"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Hub Management
            </Link>
            <Link
              href="/eco-routes"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Eco Routes
            </Link>
            <Link
              href="/reports"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              book flights
            </Link>
           
          </nav>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-sm font-medium transition-colors hover:text-primary">
              Log in
            </Link>
            <Button>Request Demo</Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Comprehensive Airline Management Solutions
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Streamline your airline operations, optimize hub management, and enhance passenger experience with
                    our integrated platform.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg">
                    Request Demo
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline">
                    View Solutions
                  </Button>
                </div>
              </div>
              <div className="hidden lg:block">
                <div className="mx-auto aspect-video overflow-hidden rounded-xl bg-muted/50 object-cover">
                  <img
                    alt="Airline management dashboard"
                    className="w-full"
                    height="550"
                    src="/new-image1.jpg" // Update this URL
                    width="1000"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Comprehensive Airline Management</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our platform provides all the tools airlines need to optimize operations, reduce costs, and improve
                  passenger satisfaction.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col items-start gap-2">
                <div className="rounded-lg p-2 bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Hub Management</h3>
                <p className="text-muted-foreground">
                  Optimize your hub operations with advanced scheduling, resource allocation, and connectivity analysis
                  tools.
                </p>
              </div>
              <div className="flex flex-col items-start gap-2">
                <div className="rounded-lg p-2 bg-primary/10">
                  <Plane className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Flight Operations</h3>
                <p className="text-muted-foreground">
                  Streamline flight planning, crew management, and real-time operations monitoring for maximum
                  efficiency.
                </p>
              </div>
              <div className="flex flex-col items-start gap-2">
                <div className="rounded-lg p-2 bg-primary/10">
                  <Settings className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Flight Maintenance</h3>
                <p className="text-muted-foreground">
                  Track maintenance schedules, manage parts inventory, and ensure regulatory compliance with our
                  comprehensive MRO solution.
                </p>
              </div>
              <div className="flex flex-col items-start gap-2">
                <div className="rounded-lg p-2 bg-primary/10">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Ticket Booking</h3>
                <p className="text-muted-foreground">
                  Provide seamless booking experiences with our customizable, scalable reservation system and revenue
                  management tools.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                    Trusted by leading airlines worldwide
                  </h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Join dozens of international carriers who have transformed their operations with our comprehensive
                    airline management platform.
                  </p>
                </div>
                <ul className="grid gap-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span>Reduce operational costs by up to 15%</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span>Improve on-time performance by 22%</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span>Optimize crew utilization by 18%</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span>Increase maintenance efficiency by 25%</span>
                  </li>
                </ul>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button>
                    Schedule Consultation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="mx-auto aspect-video overflow-hidden rounded-xl bg-muted/50 object-cover">
                <img
                  alt="Airline operations center"
                  className="w-full"
                  height="310"
                  src="/new-image2.jpg" // Update this URL
                  width="550"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="mx-auto aspect-video overflow-hidden rounded-xl bg-muted/50 object-cover order-last lg:order-first">
                <img
                  alt="Hub management dashboard"
                  className="w-full"
                  height="310"
                  src="/new-image3.jpg" // Update this URL
                  width="550"
                />
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                    Hub Management
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Optimize your network performance</h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Our hub management solution provides comprehensive tools for optimizing your airline's network,
                    improving connectivity, and maximizing resource utilization.
                  </p>
                </div>
                <ul className="grid gap-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span>Advanced network planning and optimization</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span>Real-time resource allocation and management</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span>Connectivity analysis and improvement tools</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span>Disruption management and recovery planning</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Ready to transform your airline operations?
                </h2>
                <p className="max-w-[600px] text-primary-foreground/90 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join leading airlines worldwide already using our platform to optimize their operations and improve
                  passenger experience.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" variant="secondary">
                  Request Demo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
                >
                  Contact Sales
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-2 font-bold">
            <Plane className="h-5 w-5" />
            <span>AeroManage</span>
          </div>
          <p className="text-sm text-muted-foreground">© 2024 AeroManage. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="text-sm font-medium transition-colors hover:text-primary">
              Terms
            </Link>
            <Link href="#" className="text-sm font-medium transition-colors hover:text-primary">
              Privacy
            </Link>
            <Link href="#" className="text-sm font-medium transition-colors hover:text-primary">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}