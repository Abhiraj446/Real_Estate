import { ArrowRight, Shield, Award, Users, Sparkles, CheckCircle, Star } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PropertyCard } from "@/components/property-card"
import { PropertySlider } from "@/components/property-slider"
import { CountUp } from "@/components/count-up"
import { Reveal } from "@/components/motion/reveal"
import { MotionCard } from "@/components/motion/motion-card"
import { MotionImage } from "@/components/motion/motion-image"
import { MotionLinkButton } from "@/components/motion/motion-link-button"
import { featuredProperties, properties } from "@/lib/data"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
          <MotionImage
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&h=1080&fit=crop"
            alt="Luxury property"
            fill
            priority
            parallax
            wrapperClassName="absolute inset-0"
            imageClassName="object-cover scale-105 animate-[pulse_20s_ease-in-out_infinite]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/60 to-foreground/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 via-transparent to-transparent" />
          
          {/* Decorative elements */}
          <div className="absolute top-20 left-10 w-40 h-40 border border-primary/20 rounded-full animate-float hidden lg:block" />
          <div className="absolute bottom-20 right-10 w-60 h-60 border border-primary/10 rounded-full animate-float hidden lg:block" style={{ animationDelay: "2s" }} />
          <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-primary rounded-full animate-pulse hidden lg:block" />
          <div className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-primary/50 rounded-full animate-pulse hidden lg:block" style={{ animationDelay: "1s" }} />
          
          <div className="relative container mx-auto px-4 lg:px-8 pt-20">
            <div className="max-w-3xl">
              <Reveal mode="onLoad" direction="up">
                <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm text-primary px-4 py-2 rounded-full mb-6">
                  <Sparkles className="h-4 w-4" />
                  <span className="text-sm font-medium">Premium Real Estate Services</span>
                </div>
              </Reveal>
              
              <Reveal mode="onLoad" direction="up" delay={0.08}>
                <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-background mb-6 leading-tight">
                  Find Your
                  <span className="text-primary block">Dream Property</span>
                </h1>
              </Reveal>
              
              <Reveal mode="onLoad" direction="up" delay={0.16}>
                <p className="text-lg md:text-xl text-background/80 mb-8 leading-relaxed max-w-2xl">
                  Discover exceptional properties with Aspire Groups. Your journey to finding the perfect home starts here with our curated collection of luxury residences.
                </p>
              </Reveal>
              
              <Reveal mode="onLoad" direction="up" delay={0.24}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <MotionLinkButton
                    href="/properties"
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 active:scale-[0.98] rounded-full px-8 btn-premium"
                  >
                    Explore Properties
                    <ArrowRight className="h-4 w-4" />
                  </MotionLinkButton>
                  <MotionLinkButton
                    href="/contact"
                    size="lg"
                    variant="outline"
                    className="bg-background/10 border-background/30 text-background hover:bg-background/20 hover:border-background/50 transition-all duration-300 active:scale-[0.98] rounded-full px-8 btn-premium"
                  >
                    Contact Us
                  </MotionLinkButton>
                </div>
              </Reveal>
              
              {/* Trust badges */}
              <Reveal mode="onLoad" direction="up" delay={0.32}>
                <div className="flex flex-wrap items-center gap-6 mt-12">
                  <div className="flex items-center gap-2 text-background/70">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span className="text-sm">500+ Properties Sold</span>
                  </div>
                  <div className="flex items-center gap-2 text-background/70">
                    <Star className="h-5 w-5 text-primary fill-primary" />
                    <span className="text-sm">4.9 Star Rating</span>
                  </div>
                  <div className="flex items-center gap-2 text-background/70">
                    <Shield className="h-5 w-5 text-primary" />
                    <span className="text-sm">Trusted Since 2016</span>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
          
          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
            <span className="text-background/50 text-sm">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-background/30 rounded-full flex justify-center pt-2">
              <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
            </div>
          </div>
        </section>

        {/* Featured Properties Slider */}
        <section className="py-16 lg:py-24 bg-background relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
          
          <div className="container mx-auto px-4 lg:px-8 relative">
            <Reveal>
              <div className="text-center mb-12 lg:mb-16">
                <span className="inline-flex items-center gap-2 text-primary text-sm font-medium mb-4">
                  <Star className="h-4 w-4 fill-current" />
                  Featured Collection
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                  Featured Properties
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                  Explore our handpicked selection of premium properties that offer exceptional value and luxury living.
                </p>
              </div>
            </Reveal>
            <Reveal direction="scale" delay={0.08}>
              <PropertySlider properties={featuredProperties} />
            </Reveal>
          </div>
        </section>

        {/* Property Grid */}
        <section className="py-16 lg:py-24 bg-muted relative">
          <div className="container mx-auto px-4 lg:px-8">
            <Reveal>
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 lg:mb-16">
                <div>
                  <span className="inline-flex items-center gap-2 text-primary text-sm font-medium mb-4">
                    <Sparkles className="h-4 w-4" />
                    Latest Listings
                  </span>
                  <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                    Latest Properties
                  </h2>
                  <p className="text-muted-foreground text-lg">
                    Browse our newest listings and find your perfect home.
                  </p>
                </div>
                <MotionLinkButton
                  href="/properties"
                  variant="outline"
                  className="gap-2 rounded-full px-6 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 active:scale-[0.98] group btn-premium"
                >
                  View All Properties
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </MotionLinkButton>
              </div>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {properties.slice(0, 6).map((property, index) => (
                <PropertyCard key={property.id} property={property} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 lg:py-24 bg-background relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(var(--primary),0.05),transparent_50%)]" />
          
          <div className="container mx-auto px-4 lg:px-8 relative">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <Reveal direction="left">
                <div className="order-2 lg:order-1">
                  <span className="inline-flex items-center gap-2 text-primary text-sm font-medium mb-4">
                    <Award className="h-4 w-4" />
                    About Us
                  </span>
                  <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                    Your Trusted Partner in <span className="text-primary">Real Estate</span>
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
                    At Aspire Groups, we understand that finding the perfect property is more than just a transaction. It is about finding a place where memories are made and dreams come true.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    With over 10 years of experience in the real estate industry, our team of dedicated professionals is committed to providing exceptional service and expert guidance throughout your property journey.
                  </p>
                
                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 sm:gap-6 mb-8">
                    {[
                      { value: "500+", label: "Properties Sold" },
                      { value: "10+", label: "Years Experience" },
                      { value: "98%", label: "Client Satisfaction" },
                    ].map((stat, index) => (
                      <Reveal key={stat.label} delay={0.12 + index * 0.08}>
                        <div className="text-center p-4 bg-muted rounded-2xl card-premium">
                          <CountUp value={stat.value} className="font-serif text-2xl sm:text-3xl font-bold text-primary" />
                          <p className="text-xs sm:text-sm text-muted-foreground mt-1">{stat.label}</p>
                        </div>
                      </Reveal>
                    ))}
                  </div>
                
                  <MotionLinkButton
                    href="/about"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 rounded-full px-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-[0.98] group btn-premium"
                  >
                    Learn More About Us
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </MotionLinkButton>
                </div>
              </Reveal>
              
              <Reveal direction="right" delay={0.06}>
                <div className="relative order-1 lg:order-2 group">
                  <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl card-premium relative">
                    <MotionImage
                      src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=1000&fit=crop"
                      alt="About Aspire Groups"
                      fill
                      sizes="(max-width: 768px) 92vw, 520px"
                      wrapperClassName="absolute inset-0"
                      imageClassName="object-cover img-premium"
                      parallax
                      quality={85}
                    />
                  </div>
                {/* Floating card */}
                <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-2xl shadow-2xl hidden lg:block animate-float">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-primary-foreground/10 rounded-xl">
                      <Award className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="font-serif text-2xl font-bold">10+</p>
                      <p className="text-sm opacity-90">Years of Excellence</p>
                    </div>
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-primary/20 rounded-2xl -z-10" />
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-2xl -z-10" />
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 lg:py-24 bg-muted relative">
          <div className="container mx-auto px-4 lg:px-8">
            <Reveal>
              <div className="text-center mb-12 lg:mb-16">
                <span className="inline-flex items-center gap-2 text-primary text-sm font-medium mb-4">
                  <Shield className="h-4 w-4" />
                  Why Choose Us
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                  The Aspire Advantage
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                  We provide comprehensive real estate services with a focus on excellence and client satisfaction.
                </p>
              </div>
            </Reveal>
            
            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
              {[
                {
                  icon: Shield,
                  title: "Trusted Service",
                  description: "We prioritize transparency and integrity in all our dealings, ensuring you can trust us with your most important investment.",
                },
                {
                  icon: Award,
                  title: "Premium Listings",
                  description: "Access exclusive premium properties that match your lifestyle and investment goals with our curated listings.",
                },
                {
                  icon: Users,
                  title: "Expert Team",
                  description: "Our experienced agents provide personalized guidance and support throughout your entire property journey.",
                },
              ].map((feature, index) => {
                const Icon = feature.icon
                return (
                  <Reveal key={feature.title} delay={index * 0.08}>
                    <MotionCard className="bg-card p-8 lg:p-10 rounded-3xl shadow-lg transition-all duration-500 text-center group border border-transparent hover:border-primary/20 card-premium">
                      <div className="inline-flex items-center justify-center w-16 h-16 lg:w-20 lg:h-20 bg-primary/10 rounded-2xl mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                        <Icon className="h-8 w-8 lg:h-10 lg:w-10 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                      </div>
                      <h3 className="font-serif text-xl lg:text-2xl font-semibold text-foreground mb-4">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </MotionCard>
                  </Reveal>
                )
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 lg:py-32 bg-foreground relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)", backgroundSize: "32px 32px" }} />
          </div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl -translate-y-1/2" />
          
          <div className="container mx-auto px-4 lg:px-8 text-center relative">
            <Reveal>
              <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full mb-6">
                <Sparkles className="h-4 w-4" />
                <span className="text-sm font-medium">Start Your Journey</span>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-background mb-6 max-w-4xl mx-auto leading-tight">
                Ready to Find Your <span className="text-primary">Dream Home</span>?
              </h2>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="text-background/70 max-w-2xl mx-auto mb-10 text-lg">
                Get in touch with our expert team today and let us help you find the perfect property that meets all your needs.
              </p>
            </Reveal>

            <Reveal delay={0.20}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <MotionLinkButton
                  href="/contact"
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-[0.98] rounded-full px-10 py-6 text-lg btn-premium"
                >
                  <Sparkles className="h-5 w-5" />
                  Contact Us
                </MotionLinkButton>
                <MotionLinkButton
                  href="/properties"
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-background/30 text-background hover:bg-background/10 hover:border-background/50 transition-all duration-300 active:scale-[0.98] rounded-full px-10 py-6 text-lg btn-premium"
                >
                  Browse Properties
                </MotionLinkButton>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
