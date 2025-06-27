"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin } from "lucide-react"
import { submitContactForm } from "@/services/apiService"

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
    storeName: "",
    websiteUrl: "",
    mobile: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      await submitContactForm(formState);
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({
        name: "",
        email: "",
        message: "",
        storeName: "",
        websiteUrl: "",
        mobile: "",
      });
    } catch (error) {
      setIsSubmitting(false);
      console.error("Form submission failed:", error);
    }
  }

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <section className="text-center mb-20">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Get in{" "}
          <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">Touch</span>
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Have questions or want to learn more about CleverCat? We'd love to hear from you.
        </p>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Contact Information */}
        <div className="lg:col-span-1">
          <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>

          <div className="space-y-8">
            <Card className="bg-slate-800/50 border-purple-500/30">
              <CardContent className="p-6 flex items-start space-x-4">
                <Mail className="text-purple-400 w-6 h-6 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Email Us</h3>
                  <p className="text-gray-300">info@clevercat.tech</p>
                  <p className="text-gray-300">support@clevercat.tech</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-purple-500/30">
              <CardContent className="p-6 flex items-start space-x-4">
                <Phone className="text-purple-400 w-6 h-6 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Call Us</h3>
                  <p className="text-gray-300">+1 (555) 123-4567</p>
                  <p className="text-gray-300">Mon-Fri, 9am-5pm EST</p>
                </div>
              </CardContent>
            </Card>

            {/* <Card className="bg-slate-800/50 border-purple-500/30">
              <CardContent className="p-6 flex items-start space-x-4">
                <MapPin className="text-purple-400 w-6 h-6 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Visit Us</h3>
                  <p className="text-gray-300">123 Tech Avenue</p>
                  <p className="text-gray-300">San Francisco, CA 94107</p>
                </div>
              </CardContent>
            </Card> */}
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-2">
          <Card className="bg-slate-800/50 border-purple-500/30">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Send Us a Message</h2>

              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-8 h-8 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Message Sent!</h3>
                  <p className="text-gray-300 mb-6">Thank you for contacting us. We'll get back to you shortly.</p>
                  <Button
                    onClick={() => setIsSubmitted(false)}
                    className="bg-purple-500 hover:bg-purple-600 text-white"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-gray-300">
                        Your Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        className="bg-slate-700/50 border-purple-500/30 text-white"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-gray-300">
                        Your Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        className="bg-slate-700/50 border-purple-500/30 text-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="storeName" className="text-sm font-medium text-gray-300">
                        Store Name
                      </label>
                      <Input
                        id="storeName"
                        name="storeName"
                        value={formState.storeName}
                        onChange={handleChange}
                        className="bg-slate-700/50 border-purple-500/30 text-white"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="mobile" className="text-sm font-medium text-gray-300">
                        Mobile Number
                      </label>
                      <Input
                        id="mobile"
                        name="mobile"
                        type="tel"
                        value={formState.mobile}
                        onChange={handleChange}
                        className="bg-slate-700/50 border-purple-500/30 text-white"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="websiteUrl" className="text-sm font-medium text-gray-300">
                      Website URL
                    </label>
                    <Input
                      id="websiteUrl"
                      name="websiteUrl"
                      type="url"
                      value={formState.websiteUrl}
                      onChange={handleChange}
                      className="bg-slate-700/50 border-purple-500/30 text-white"
                    />
                  </div>



                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm, font-medium text-gray-300">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="bg-slate-700/50 border-purple-500/30 text-white"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white px-8 py-2 text-lg font-semibold w-full"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Map Section */}
      {/* <section className="mt-20">
        <div className="aspect-[21/9] w-full bg-slate-800/50 border border-purple-500/30 rounded-xl overflow-hidden">
          <div className="w-full h-full bg-slate-700/50 flex items-center justify-center">
            <p className="text-gray-400">Interactive map would be displayed here</p>
          </div>
        </div>
      </section> */}
    </div>
  )
}