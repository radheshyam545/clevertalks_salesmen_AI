"use client"
import { Star, Play, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import ChatWidget from "@/components/chat-widget"
import TestimonialCard from "@/components/testimonial-card"
import PricingCard from "@/components/pricing-card"
import YouTubeShortsGrid from "@/components/YouTubeShortsGrid"
import ChatBotFeatures from "@/components/ChatBotFeatures"
import PricingSection from "@/components/PricingSection"
import BookADemoButton from "@/components/BookADemoButton"
import CTASection from "@/components/CTASection"
import { useRouter } from "next/navigation"

export default function HomePage() {

  const router = useRouter();


  const handleClick = () => {
    router.push("/contact");
  };

  return (
    <>
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        {/* Badge */}
        <div className="flex justify-center mb-12">
          <Badge variant="outline" className="bg-slate-800/50 border-purple-500/30 text-purple-300 px-4 py-2 text-sm">
            <Star className="w-4 h-4 mr-2" />
            We help e-commerce stores make money
          </Badge>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Jugnoo is an online salesman,support and email popup rolled in one.
          <br />
          <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
            Chatbot designed to increase sales.
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-xl text-gray-300 mb-12">No Code, No Friction, All Performance</p>

        {/* Live Now Section */}
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              We Are Live Now
            </span>{" "}
            Book a demo.
          </h2>
          <p className="text-gray-300 mb-8">"Hurry to get free installations!"</p>
        </div>

        {/* CTA Button */}
        <div className="mb-16">
          <Button
            size="lg"
            onClick={handleClick}
            className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-full"
          >
            Install Now
          </Button>
        </div>

        {/* Video Previews */}
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[1, 2, 3].map((index) => (
            <div key={index} className="relative group cursor-pointer">
              <div className="aspect-video bg-black rounded-lg overflow-hidden border border-gray-700">
                <Image
                  src={`/placeholder.svg?height=720&width=1280&text=Video+${index}`}
                  alt={`Video preview ${index}`}
                  width={640}
                  height={360}
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors">
                    <Play className="w-6 h-6 text-white ml-1" />
                  </div>
                </div>
              </div>
              <div className="absolute top-2 left-2 bg-black/50 text-white text-xs px-2 py-1 rounded">CleverCat</div>
            </div>
          ))}
        </div> */}

        <YouTubeShortsGrid />
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Powerful Features to{" "}
            <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              Boost Your Sales
            </span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Our innovative platform provides everything you need to transform your videos into powerful sales tools.
          </p>
        </div>
        <ChatBotFeatures />
      </section>

      {/* How It Works Section */}
      <section className="container mx-auto px-4 py-20 relative">
        <div className="absolute inset-0 bg-purple-500/5 -z-10 rounded-3xl"></div>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            How{" "}
            <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              Jugnoo
            </span>{" "}
            Works
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Launch your AI-powered support assistant in just three simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            {
              step: "01",
              title: "Add the Chatbot",
              description: "Install CleverCat Chatbot to your Shopify store in just one click — no coding required.",
            },
            {
              step: "02",
              title: "Customize Conversations",
              description: "Define FAQs, upload product data, and personalize responses for a brand-aligned experience.",
            },
            {
              step: "03",
              title: "Boost Engagement",
              description: "Let the chatbot handle queries, recommend products, and convert visitors 24/7.",
            },
          ].map((step, index) => (
            <div key={index} className="text-center relative">
              <div className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent mb-4">
                {step.step}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
              <p className="text-gray-300">{step.description}</p>

              {index < 2 && (
                <div className="hidden md:block absolute top-1/4 right-0 transform translate-x-1/2">
                  <ArrowRight className="text-purple-500/50 w-8 h-8" />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>


      {/* Testimonials Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What Our{" "}
            <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              Customers Say
            </span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Hear from Shopify brands using our AI ChatBot to drive sales, engage customers, and automate support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TestimonialCard
            quote="Our support team now saves over 15 hours a week. The chatbot handles 80% of customer queries with human-like accuracy!"
            author="Ava Patel"
            role="Customer Experience Lead"
            avatarUrl="/placeholder.svg?height=100&width=100&text=AP"
          />
          <TestimonialCard
            quote="Within two weeks, our abandoned cart rate dropped significantly — all thanks to the chatbot recommending the right products in real time."
            author="Liam Moore"
            role="Founder, BlendWare"
            avatarUrl="/placeholder.svg?height=100&width=100&text=LM"
          />
          <TestimonialCard
            quote="It’s like having a sales rep working 24/7. The bot even collects leads while I sleep — emails, phone numbers, everything!"
            author="Sophia Nguyen"
            role="Solo Store Owner"
            avatarUrl="/placeholder.svg?height=100&width=100&text=SN"
          />
        </div>
      </section>



      {/* <PricingSection /> */}
      <section className="container mx-auto px-4 text-center py-10">

        <BookADemoButton />
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Everything you need to know about using our AI ChatBot on your Shopify store.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {[
              {
                question: "How do I install the AI ChatBot on my Shopify store?",
                answer:
                  "Installation is one click from the Shopify App Store. No coding required — your chatbot will be live in under 5 minutes.",
              },
              {
                question: "Can I customize the chatbot’s responses and tone?",
                answer:
                  "Yes! You can fully customize the chatbot’s tone, greeting message, product suggestions, and fallback responses to match your brand.",
              },
              {
                question: "Does the chatbot recommend products in real time?",
                answer:
                  "Absolutely. Our AI analyzes customer queries and browsing behavior to suggest the most relevant products instantly.",
              },
              {
                question: "Can the chatbot collect customer emails and phone numbers?",
                answer:
                  "Yes — the chatbot can be configured to collect lead data like email addresses and phone numbers during conversations, and sync them with your CRM or email tool.",
              },
              {
                question: "Is customer data handled securely?",
                answer:
                  "100%. We follow GDPR and industry-standard encryption to keep all customer interactions and data private and secure.",
              },
              {
                question: "What are the pricing plans?",
                answer:
                  "We offer flexible pricing based on your usage — including a free trial, Starter, and Growth plans. You can upgrade or cancel anytime.",
              },
            ].map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-purple-500/30">
                <AccordionTrigger className="text-white hover:text-purple-300 text-left py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 pb-4">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>




      <CTASection />
      {/* Chat Widget */}
      <ChatWidget />
    </>
  )
}
