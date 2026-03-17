import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { 
  MapPin, 
  Bed, 
  Bath, 
  Square, 
  Calendar, 
  ArrowLeft,
  Heart,
  Share2,
  MessageCircle,
  Phone,
  CheckCircle,
  Star,
  Sparkles
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { properties } from "@/lib/data"

export async function generateStaticParams() {
  return properties.map((property) => ({
    id: property.id,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const property = properties.find((p) => p.id === id)
  
  if (!property) {
    return {
      title: "Property Not Found | Aspire Groups",
    }
  }

  return {
    title: `${property.title} | Aspire Groups`,
    description: `${property.title} - ${property.bedrooms} bedrooms, ${property.bathrooms} bathrooms, ${property.area} sqft in ${property.location}. Price: $${property.price.toLocaleString()}`,
  }
}

export default async function PropertyDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const property = properties.find((p) => p.id === id)

  if (!property) {
    notFound()
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-16 lg:pt-20">
        {/* Breadcrumb */}
        <div className="bg-muted border-b border-border">
          <div className="container mx-auto px-4 lg:px-8 py-4">
            <Link 
              href="/properties" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-all duration-300 hover:gap-3"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Properties
            </Link>
          </div>
        </div>

        {/* Property Images */}
        <section className="bg-background">
          <div className="container mx-auto px-4 lg:px-8 py-8">
            <div className="grid lg:grid-cols-2 gap-4">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl group animate-fade-in-up">
                <Image
                  src={property.image}
                  alt={property.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                {property.featured && (
                  <span className="absolute top-4 left-4 bg-primary text-primary-foreground text-sm font-semibold px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
                    <Star className="h-4 w-4 fill-current" />
                    Featured
                  </span>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=600&h=450&fit=crop",
                  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=450&fit=crop",
                  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=450&fit=crop",
                ].map((img, index) => (
                  <div 
                    key={index} 
                    className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg group animate-fade-in-up cursor-pointer"
                    style={{ animationDelay: `${(index + 1) * 0.1}s` }}
                  >
                    <Image
                      src={img}
                      alt={`Property view ${index + 1}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-300" />
                  </div>
                ))}
                <div 
                  className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-foreground flex items-center justify-center cursor-pointer hover:bg-foreground/90 transition-all duration-300 group animate-fade-in-up shadow-lg"
                  style={{ animationDelay: "0.4s" }}
                >
                  <div className="text-center">
                    <Sparkles className="h-6 w-6 text-primary mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-background font-semibold">+5 Photos</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Property Details */}
        <section className="py-8 lg:py-16 bg-background relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          
          <div className="container mx-auto px-4 lg:px-8 relative">
            <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-6 animate-fade-in-up">
                  <div>
                    <span className="inline-block bg-primary/10 text-primary text-sm font-medium px-4 py-1.5 rounded-full mb-4 capitalize">
                      {property.type}
                    </span>
                    <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                      {property.title}
                    </h1>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="h-5 w-5 text-primary" />
                      <span className="text-lg">{property.location}</span>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Button variant="outline" size="icon" className="rounded-full hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 hover:scale-110">
                      <Heart className="h-5 w-5" />
                    </Button>
                    <Button variant="outline" size="icon" className="rounded-full hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 hover:scale-110">
                      <Share2 className="h-5 w-5" />
                    </Button>
                  </div>
                </div>

                <p className="font-serif text-4xl lg:text-5xl font-bold text-primary mb-10 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                  ${property.price.toLocaleString()}
                </p>

                {/* Features */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                  {[
                    { icon: Bed, label: "Bedrooms", value: property.bedrooms },
                    { icon: Bath, label: "Bathrooms", value: property.bathrooms },
                    { icon: Square, label: "Area", value: `${property.area} sqft` },
                    { icon: Calendar, label: "Year Built", value: "2022" },
                  ].map((feature, index) => {
                    const Icon = feature.icon
                    return (
                      <div 
                        key={feature.label} 
                        className="bg-muted p-5 rounded-2xl text-center hover:bg-primary/10 transition-all duration-300 hover:-translate-y-1 group animate-fade-in-up"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <Icon className="h-7 w-7 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                        <p className="text-sm text-muted-foreground mb-1">{feature.label}</p>
                        <p className="font-semibold text-foreground text-lg">{feature.value}</p>
                      </div>
                    )
                  })}
                </div>

                {/* Description */}
                <div className="mb-10 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                  <h2 className="font-serif text-2xl font-semibold text-foreground mb-4 flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-primary" />
                    Description
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4 text-lg">
                    This stunning property offers the perfect blend of luxury and comfort. Located in a prime area, it features modern architecture, high-end finishes, and spacious living areas that are perfect for both entertaining and everyday living.
                  </p>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    The property includes a gourmet kitchen with premium appliances, elegant bathrooms with spa-like features, and expansive windows that flood the space with natural light. The outdoor area provides a private oasis with beautifully landscaped gardens.
                  </p>
                </div>

                {/* Amenities */}
                <div className="animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
                  <h2 className="font-serif text-2xl font-semibold text-foreground mb-6 flex items-center gap-2">
                    <Star className="h-5 w-5 text-primary" />
                    Premium Amenities
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {[
                      "Central Air Conditioning",
                      "Swimming Pool",
                      "2-Car Garage",
                      "Smart Home System",
                      "Security System",
                      "Hardwood Floors",
                      "Fireplace",
                      "Walk-in Closets",
                      "Outdoor Kitchen",
                    ].map((amenity, index) => (
                      <div
                        key={amenity}
                        className="flex items-center gap-3 p-4 bg-muted rounded-xl hover:bg-primary/10 transition-all duration-300 group"
                        style={{ animationDelay: `${index * 0.05}s` }}
                      >
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                        <span className="text-foreground">{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="bg-card border border-border rounded-3xl p-6 lg:p-8 sticky top-24 shadow-xl animate-fade-in-right">
                  <div className="flex items-center gap-2 mb-6">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-serif text-xl font-semibold text-foreground">
                      Contact Agent
                    </h3>
                  </div>
                  
                  <div className="flex items-center gap-4 mb-8 p-4 bg-muted rounded-2xl">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="font-serif text-xl font-bold text-primary">JD</span>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-lg">John Doe</p>
                      <p className="text-sm text-muted-foreground">Senior Property Agent</p>
                      <div className="flex items-center gap-1 mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-3 w-3 text-primary fill-primary" />
                        ))}
                        <span className="text-xs text-muted-foreground ml-1">5.0</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-3">
                    <Link href="/contact">
                      <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground gap-2 h-12 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                        <Phone className="h-5 w-5" />
                        Schedule a Tour
                      </Button>
                    </Link>
                    <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" className="w-full gap-2 h-12 rounded-xl border-green-500 text-green-600 hover:bg-green-500 hover:text-white transition-all duration-300">
                        <MessageCircle className="h-5 w-5" />
                        WhatsApp Agent
                      </Button>
                    </a>
                  </div>
                  
                  <p className="text-xs text-muted-foreground text-center mt-6 flex items-center justify-center gap-1">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    Response time: Usually within 24 hours
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
