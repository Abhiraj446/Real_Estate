import { Sparkles, Building2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PropertyCard } from "@/components/property-card"
import { properties } from "@/lib/data"

export const metadata = {
  title: "Properties | Aspire Groups",
  description: "Browse our exclusive collection of premium properties. Find houses, apartments, villas, and commercial spaces.",
}

export default function PropertiesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-16 lg:pt-20">
        {/* Header */}
        <section className="bg-foreground py-20 lg:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-foreground via-foreground/95 to-foreground" />
          
          {/* Decorative elements */}
          <div className="absolute top-20 left-10 w-32 h-32 border border-primary/20 rounded-full animate-float hidden lg:block" />
          <div className="absolute bottom-10 right-20 w-48 h-48 border border-primary/10 rounded-full animate-float hidden lg:block" style={{ animationDelay: "2s" }} />
          <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-primary rounded-full animate-pulse hidden lg:block" />
          
          <div className="container mx-auto px-4 lg:px-8 relative">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm text-primary px-4 py-2 rounded-full mb-6 animate-fade-in-up">
                <Building2 className="h-4 w-4" />
                <span className="text-sm font-medium">Premium Collection</span>
              </div>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-background mb-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                Our Properties
              </h1>
              <p className="text-background/70 text-lg lg:text-xl max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
                Explore our exclusive collection of premium properties. Find the perfect home that matches your lifestyle and dreams.
              </p>
            </div>
          </div>
        </section>

        {/* Properties Grid */}
        <section className="py-16 lg:py-24 bg-muted relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          
          <div className="container mx-auto px-4 lg:px-8 relative">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Sparkles className="h-5 w-5 text-primary" />
                </div>
                <p className="text-muted-foreground text-lg">
                  Showing <span className="font-semibold text-foreground"></span> premium properties
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {properties.map((property, index) => (
                <PropertyCard key={property.id} property={property} index={index} />
              ))}
            </div>

                      </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
