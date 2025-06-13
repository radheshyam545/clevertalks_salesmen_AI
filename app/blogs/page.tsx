import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"
import { Clock, User } from "lucide-react"

// Sample blog data
const blogs = [
  {
    id: 1,
    title: "How to Increase Conversion Rates with Product Videos",
    excerpt: "Learn how to create compelling product videos that drive sales and boost your conversion rates.",
    image: "/placeholder.svg?height=600&width=1200&text=Blog+Image+1",
    date: "June 5, 2023",
    author: "Sarah Chen",
    category: "Marketing",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "The Future of E-commerce: Video-First Shopping Experiences",
    excerpt: "Discover how video-first shopping experiences are transforming the e-commerce landscape.",
    image: "/placeholder.svg?height=600&width=1200&text=Blog+Image+2",
    date: "May 22, 2023",
    author: "Michael Rodriguez",
    category: "Trends",
    readTime: "7 min read",
  },
  {
    id: 3,
    title: "5 Ways to Optimize Your Product Videos for Mobile",
    excerpt: "Mobile shopping is on the rise. Learn how to optimize your product videos for mobile devices.",
    image: "/placeholder.svg?height=600&width=1200&text=Blog+Image+3",
    date: "May 15, 2023",
    author: "Emma Patel",
    category: "Tips & Tricks",
    readTime: "4 min read",
  },
  {
    id: 4,
    title: "How AI is Revolutionizing Video Commerce",
    excerpt: "Explore how artificial intelligence is changing the way we create and consume product videos.",
    image: "/placeholder.svg?height=600&width=1200&text=Blog+Image+4",
    date: "May 8, 2023",
    author: "Alex Johnson",
    category: "Technology",
    readTime: "6 min read",
  },
  {
    id: 5,
    title: "Case Study: How Brand X Increased Sales by 45% with CleverCat",
    excerpt: "See how Brand X used CleverCat to transform their video strategy and boost their sales.",
    image: "/placeholder.svg?height=600&width=1200&text=Blog+Image+5",
    date: "April 30, 2023",
    author: "Olivia Wilson",
    category: "Case Study",
    readTime: "8 min read",
  },
  {
    id: 6,
    title: "Video SEO: How to Get Your Product Videos Discovered",
    excerpt: "Learn the best practices for optimizing your product videos for search engines.",
    image: "/placeholder.svg?height=600&width=1200&text=Blog+Image+6",
    date: "April 23, 2023",
    author: "David Kim",
    category: "SEO",
    readTime: "5 min read",
  },
]

export default function BlogsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <section className="text-center mb-20">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          CleverCat{" "}
          <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">Blog</span>
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Insights, tips, and trends to help you maximize your video commerce strategy
        </p>
      </section>

      {/* Featured Post */}
      <section className="mb-20">
        <Card className="bg-gradient-to-br from-purple-900/50 to-slate-900/50 border-purple-500/30 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="aspect-video relative">
              <Image
                src="/placeholder.svg?height=600&width=1200&text=Featured+Blog+Post"
                alt="Featured blog post"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-8 flex flex-col justify-center">
              <Badge className="w-fit mb-4 bg-purple-500/20 text-purple-300 border-purple-500/30">Featured</Badge>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                The Complete Guide to Video Commerce in 2023
              </h2>
              <p className="text-gray-300 mb-6">
                Everything you need to know about video commerce in 2023, from creating compelling product videos to
                measuring their impact on your bottom line.
              </p>
              <div className="flex items-center text-gray-400 text-sm mb-6">
                <div className="flex items-center mr-4">
                  <User className="w-4 h-4 mr-1" />
                  <span>Alex Johnson</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>10 min read</span>
                </div>
              </div>
              <Button
                asChild
                className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white w-fit"
              >
                <Link href="/blogs/featured-post">Read More</Link>
              </Button>
            </div>
          </div>
        </Card>
      </section>

      {/* Blog Categories */}
      <section className="mb-12">
        <div className="flex flex-wrap gap-2 justify-center">
          {["All", "Marketing", "Technology", "Tips & Tricks", "Case Study", "Trends", "SEO"].map((category, index) => (
            <Badge
              key={index}
              className={`px-4 py-2 cursor-pointer ${
                category === "All"
                  ? "bg-purple-500 text-white"
                  : "bg-slate-800/50 text-gray-300 hover:bg-purple-500/20 hover:text-purple-300"
              }`}
            >
              {category}
            </Badge>
          ))}
        </div>
      </section>

      {/* Blog Posts */}
      <section className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <Card key={blog.id} className="bg-slate-800/50 border-purple-500/30 overflow-hidden flex flex-col">
              <div className="aspect-video relative">
                <Image src={blog.image || "/placeholder.svg"} alt={blog.title} fill className="object-cover" />
                <div className="absolute top-2 left-2">
                  <Badge className="bg-purple-500/80 text-white border-none">{blog.category}</Badge>
                </div>
              </div>
              <CardContent className="p-6 flex-grow">
                <h3 className="text-xl font-bold text-white mb-2">{blog.title}</h3>
                <p className="text-gray-300 mb-4">{blog.excerpt}</p>
                <div className="flex items-center text-gray-400 text-sm">
                  <div className="flex items-center mr-4">
                    <User className="w-4 h-4 mr-1" />
                    <span>{blog.author}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{blog.readTime}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-purple-500/50 text-purple-300 hover:bg-purple-500/10"
                >
                  <Link href={`/blogs/${blog.id}`}>Read More</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Pagination */}
      <section className="flex justify-center">
        <div className="flex items-center gap-2">
          <Button variant="outline" className="border-purple-500/30 text-purple-300 hover:bg-purple-500/10" disabled>
            Previous
          </Button>
          <Button variant="outline" className="border-purple-500/30 bg-purple-500/20 text-purple-300">
            1
          </Button>
          <Button variant="outline" className="border-purple-500/30 text-purple-300 hover:bg-purple-500/10">
            2
          </Button>
          <Button variant="outline" className="border-purple-500/30 text-purple-300 hover:bg-purple-500/10">
            3
          </Button>
          <Button variant="outline" className="border-purple-500/30 text-purple-300 hover:bg-purple-500/10">
            Next
          </Button>
        </div>
      </section>
    </div>
  )
}
