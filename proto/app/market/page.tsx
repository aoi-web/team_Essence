import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const plans = [
  {
    name: "Demo",
    price: "free",
    features: ["Basic flight search", "Limited support", "Ad-supported"],
  },
  {
    name: "Basic",
    price: "$2999/mo",
    features: ["Advanced flight search", "Priority support", "No ads"],
  },
  {
    name: "Premium",
    price: "$9999/mo",
    features: ["AI-powered search", "24/7 VIP support", "Exclusive deals"],
  },
];

export default function Marketplace() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-gradient-to-r from-blue-500 to-blue-700 text-white shadow-md">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold">SkyOps</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Button asChild variant="ghost" size="sm" className="hover:bg-blue-600 transition-colors">
              <Link href="/home" className="text-sm font-medium">
                Home
              </Link>
            </Button>
            <Link href="/" className="text-sm font-medium text-gray-200 hover:text-white transition-colors">
              Dashboard
            </Link>
            <Link href="/flights" className="text-sm font-medium text-gray-200 hover:text-white transition-colors">
              Flights
            </Link>
            <Link href="/maintenance" className="text-sm font-medium text-gray-200 hover:text-white transition-colors">
              Maintenance
            </Link>
            <Link href="/hub" className="text-sm font-medium text-gray-200 hover:text-white transition-colors">
              Hub Management
            </Link>
            <Link href="/eco-routes" className="text-sm font-medium text-gray-200 hover:text-white transition-colors">
              Eco Routes
            </Link>
            <Link href="/book" className="text-sm font-medium text-gray-200 hover:text-white transition-colors">
              Book Flights
            </Link>
            <Link href="/market" className="text-sm font-medium text-gray-200 hover:text-white transition-colors">
              Market Place
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" className="text-white border-white hover:bg-white hover:text-blue-700">
              Login
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1 bg-blue-50">
        <div className="container py-10">
          <h1 className="text-4xl font-bold text-blue-900 text-center mb-10">Choose Your Plan</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card key={index} className="w-full bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition-shadow">
                <CardContent>
                  <h2 className="text-2xl font-semibold text-blue-800 mb-4">{plan.name}</h2>
                  <p className="text-xl font-bold text-blue-600 mb-4">{plan.price}</p>
                  <ul className="my-4 text-gray-700 space-y-2">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        ✅ {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white rounded-lg mt-4">
                    Select Plan
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}