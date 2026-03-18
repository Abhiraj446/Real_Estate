import Image from "next/image"
import Link from "next/link"
import { 
  Shield, 
  Award, 
  Users, 
  Target, 
  Eye, 
  Heart,
  Building2,
  Handshake,
  TrendingUp,
  Clock,
  ArrowRight,
  Sparkles,
  Star,
  CheckCircle
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CountUp } from "@/components/count-up"

export const metadata = {
  title: "About Us | Aspire Groups",
  description: "Learn about Aspire Groups - your trusted partner in premium real estate. Discover our mission, values, and the team dedicated to finding your dream property.",
}

const stats = [
  { value: "500+", label: "Properties Sold", icon: Building2 },
  { value: "10+", label: "Years Experience", icon: Clock },
  { value: "50+", label: "Expert Agents", icon: Users },
  { value: "98%", label: "Client Satisfaction", icon: Star },
]

const values = [
  {
    icon: Shield,
    title: "Integrity",
    description: "We uphold the highest standards of honesty and transparency in all our dealings.",
  },
  {
    icon: Heart,
    title: "Client Focus",
    description: "Your needs and dreams are at the center of everything we do.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We strive for excellence in every aspect of our service.",
  },
  {
    icon: Handshake,
    title: "Trust",
    description: "Building lasting relationships based on trust and reliability.",
  },
]

const services = [
  {
    icon: Building2,
    title: "Property Sales",
    description: "Expert guidance through the entire buying and selling process with access to premium listings.",
  },
  {
    icon: TrendingUp,
    title: "Property Valuation",
    description: "Accurate market analysis and property valuations to ensure you get the best deal.",
  },
  {
    icon: Users,
    title: "Consultation",
    description: "Personalized consultation services to understand your unique needs and preferences.",
  },
  {
    icon: Clock,
    title: "Property Management",
    description: "Comprehensive property management services for investors and landlords.",
  },
]

const team = [
  {
    name: "Anil Dhiman",
    role: "Property Consultant",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
  },
  {
    name: "Imran",
    role: "Property Consultant",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
  },
  {
    name: "Satya",
    role: "Property Consultant",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
  },
  
]

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-16 lg:pt-20">
        {/* Hero Section */}
        <section className="relative py-24 lg:py-36 bg-foreground overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <Image
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=1080&fit=crop"
              alt="Background"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/80 via-foreground/90 to-foreground" />
          
          {/* Decorative elements */}
          <div className="absolute top-20 left-10 w-32 h-32 border border-primary/20 rounded-full animate-float hidden lg:block" />
          <div className="absolute bottom-20 right-10 w-48 h-48 border border-primary/10 rounded-full animate-float hidden lg:block" style={{ animationDelay: "2s" }} />
          
          <div className="container mx-auto px-4 lg:px-8 relative">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm text-primary px-4 py-2 rounded-full mb-6 animate-fade-in-up">
                <Sparkles className="h-4 w-4" />
                <span className="text-sm font-medium">Our Story</span>
              </div>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-background mb-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                About Aspire Groups
              </h1>
              <p className="text-background/80 text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
                For over 10 years, we have been helping families find their dream homes. 
                Our commitment to excellence and client satisfaction has made us a trusted name in real estate.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="relative -mt-10 z-10">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="bg-background/90 backdrop-blur-md border border-border rounded-3xl shadow-2xl">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 py-8 px-4 sm:px-6 lg:px-10">
                {stats.map((stat, index) => {
                  const Icon = stat.icon
                  return (
                    <div 
                      key={stat.label} 
                      className="text-center p-4 sm:p-6 animate-fade-in-up"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <Icon className="h-8 w-8 text-primary mx-auto mb-3" />
                      <CountUp
                        value={stat.value}
                        className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-2 block"
                      />
                      <p className="text-muted-foreground text-sm">{stat.label}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 lg:py-24 bg-background relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          
          <div className="container mx-auto px-4 lg:px-8 relative">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="relative">
                <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop"
                    alt="Our mission"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-2xl shadow-2xl hidden lg:flex items-center gap-3 animate-float">
                  <div className="p-3 bg-primary-foreground/10 rounded-xl">
                    <Award className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-serif text-2xl font-bold">2016</p>
                    <p className="text-sm opacity-90">Established</p>
                  </div>
                </div>
                <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-primary/20 rounded-2xl -z-10" />
              </div>
              
              <div>
                <div className="mb-12">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-primary/10 rounded-xl">
                      <Target className="h-7 w-7 text-primary" />
                    </div>
                    <h2 className="font-serif text-2xl lg:text-3xl font-bold text-foreground">Our Mission</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    To provide exceptional real estate services that exceed client expectations. 
                    We are committed to helping individuals and families find properties that perfectly 
                    match their lifestyle, needs, and dreams while ensuring a seamless and enjoyable 
                    buying experience.
                  </p>
                </div>
                
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-primary/10 rounded-xl">
                      <Eye className="h-7 w-7 text-primary" />
                    </div>
                    <h2 className="font-serif text-2xl lg:text-3xl font-bold text-foreground">Our Vision</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    To be the most trusted and innovative real estate company, known for our 
                    unwavering commitment to client satisfaction, market expertise, and ethical 
                    business practices. We aim to set the standard for excellence in the real 
                    estate industry.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 lg:py-24 bg-muted">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12 lg:mb-16">
              <span className="inline-flex items-center gap-2 text-primary text-sm font-medium mb-4">
                <Heart className="h-4 w-4" />
                What We Stand For
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Our Core Values
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                These principles guide everything we do and define who we are as a company.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => {
                const Icon = value.icon
                return (
                  <div
                    key={value.title}
                    className="bg-card p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 text-center group animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <Icon className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                    </div>
                    <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Our Services */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12 lg:mb-16">
              <span className="inline-flex items-center gap-2 text-primary text-sm font-medium mb-4">
                <Sparkles className="h-4 w-4" />
                What We Offer
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Our Services
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Comprehensive real estate services tailored to meet your unique needs.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              {services.map((service, index) => {
                const Icon = service.icon
                return (
                  <div
                    key={service.title}
                    className="flex gap-5 p-6 lg:p-8 bg-muted rounded-3xl hover:bg-muted/80 transition-all duration-300 group animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                        <Icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                      <div className="flex items-center gap-2 mt-4 text-primary font-medium text-sm group-hover:gap-3 transition-all duration-300">
                        <span>Learn more</span>
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 lg:py-24 bg-muted ">
          <div className="container mx-auto px-4 lg:px-8 ">
            <div className="text-center mb-12 lg:mb-16">
              <span className="inline-flex items-center gap-2 text-primary text-sm font-medium mb-4">
                <Users className="h-4 w-4" />
                Our People
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 ">
                Meet Our Team
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Our experienced professionals are dedicated to helping you find your perfect property.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 justify-items-center max-w-5xl mx-auto">
              {team.map((member, index) => (
                <div
                  key={member.name}
                  className="bg-card rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group animate-fade-in-up w-full"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <div className="p-5 text-center">
                    <h3 className="font-serif font-semibold text-lg text-foreground group-hover:text-primary transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 lg:py-32 bg-foreground relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)", backgroundSize: "32px 32px" }} />
          </div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl -translate-y-1/2" />
          
          <div className="container mx-auto px-4 lg:px-8 text-center relative">
            <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full mb-6">
              <CheckCircle className="h-4 w-4" />
              <span className="text-sm font-medium">Partner With Us</span>
            </div>
            
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-background mb-6 max-w-3xl mx-auto">
              Ready to Work With Us?
            </h2>
            <p className="text-background/70 max-w-2xl mx-auto mb-10 text-lg">
              Contact our team today and let us help you find the perfect property.
            </p>
            
            <Link href="/contact">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 rounded-full px-10 py-6 text-lg">
                Get in Touch
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
