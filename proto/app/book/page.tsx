import Link from "next/link"
import { Button } from "@/components/ui/button"
import FlightSearch from "@/components/flight-search"
import { Plane } from "lucide-react"

export default function BookPage() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-100">
      <header className="sticky top-0 z-50 w-full border-b bg-blue-900 text-white shadow-md">
        <div className="container flex h-16 items-center justify-center">
          <div className="flex items-center gap-2 absolute left-4">
            <Plane className="h-5 w-5 text-white" />
            <span className="text-xl font-bold">AeroManage</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Button asChild variant="ghost" size="sm" className="bg-blue-700 text-white hover:bg-blue-800 transition-colors">
              <Link href="/" className="text-sm font-medium">
                Home
              </Link>
            </Button>
            <Link href="/dashboard" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
              Dashboard
            </Link>
            <Link href="/flights" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
              Flights
            </Link>
            <Link href="/maintenance" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
              Maintenance
            </Link>
            <Link href="/hub" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
              Hub Management
            </Link>
            <Link href="/eco-routes" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
              Eco Routes
            </Link>
            
            <Link href="/book" className="text-sm font-medium text-white font-semibold">
              Book Flights
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-8">
          <h1 className="text-3xl font-bold text-center text-blue-900 mb-6">Book a Flight</h1>
          <p className="text-gray-600 text-center mb-6">
            Fill in the details below to find and book your flight.
          </p>
          
          <FlightSearch />

          <form className="space-y-6 mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 font-medium">Departure</label>
                <input type="text" placeholder="Enter departure city" className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" />
              </div>
              <div>
                <label className="block text-gray-700 font-medium">Destination</label>
                <input type="text" placeholder="Enter destination city" className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 font-medium">Departure Date</label>
                <input type="date" className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" />
              </div>
              <div>
                <label className="block text-gray-700 font-medium">Return Date</label>
                <input type="date" className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-medium">Passengers</label>
              <select className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none">
                <option>1 Passenger</option>
                <option>2 Passengers</option>
                <option>3 Passengers</option>
                <option>4+ Passengers</option>
              </select>
            </div>

            <Button className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 rounded-lg">
              Search Flights
            </Button>
          </form>
        </div>
      </main>

      <footer className="w-full bg-blue-900 text-white py-6 mt-10">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-2 font-bold">
            <Plane className="h-5 w-5 text-white" />
            <span>AeroManage</span>
          </div>
          <p className="text-sm text-gray-300">© 2024 AeroManage. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
              Terms
            </Link>
            <Link href="#" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
              Privacy
            </Link>
            <Link href="#" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
