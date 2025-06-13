import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"
import { Clock, Calendar, Facebook, Twitter, Linkedin } from "lucide-react"

// This would typically come from a database or CMS
const getBlogPost = (id: string) => {
  return {
    id,
    title: "How to Increase Conversion Rates with Product Videos",
    content: `
      <p>In today's competitive e-commerce landscape, standing out from the crowd is more important than ever. One of the most effective ways to differentiate your store and boost conversion rates is through high-quality product videos.</p>
      
      <h2>Why Product Videos Matter</h2>
      
      <p>Studies have shown that product videos can increase conversion rates by up to 80%. This is because videos provide a more immersive and informative shopping experience, allowing customers to see the product in action before making a purchase decision.</p>
      
      <p>Here are some key benefits of using product videos:</p>
      
      <ul>
        <li>Increased trust and confidence in the product</li>
        <li>Better understanding of product features and benefits</li>
        <li>Reduced return rates due to clearer product expectations</li>
        <li>Improved SEO and longer time spent on your site</li>
      </ul>
      
      <h2>Best Practices for Creating Effective Product Videos</h2>
      
      <p>Not all product videos are created equal. To maximize conversion rates, follow these best practices:</p>
      
      <h3>1. Keep it Short and Sweet</h3>
      
      <p>Attention spans are short, especially online. Aim for videos that are 30-60 seconds long, focusing on the most important features and benefits of your product.</p>
      
      <h3>2. Focus on Benefits, Not Just Features</h3>
      
      <p>Don't just show what your product does; show how it improves your customer's life. Highlight the problems it solves and the benefits it provides.</p>
      
      <h3>3. Ensure High Production Quality</h3>
      
      <p>You don't need a Hollywood budget, but your videos should be well-lit, clearly focused, and professionally edited. Poor quality videos can harm your brand image and reduce trust.</p>
      
      <h3>4. Include a Clear Call-to-Action</h3>
      
      <p>End your video with a clear call-to-action, encouraging viewers to add the product to their cart, learn more, or make a purchase.</p>
      
      <h2>How CleverCat Can Help</h2>
      
      <p>CleverCat's video commerce platform makes it easy to create, manage, and optimize product videos for your Shopify store. Our analytics tools help you understand which videos are driving conversions, allowing you to continuously improve your video strategy.</p>
      
      <p>Ready to boost your conversion rates with product videos? Get started with CleverCat today!</p>
    `,
    image: "/placeholder.svg?height=600&width=1200&text=Blog+Header+Image",
    date: "June 5, 2023",
    author: "Sarah Chen",
    authorRole: "CTO & Co-Founder",
    authorImage: "/placeholder.svg?height=100&width=100&text=SC",
    category: "Marketing",
    readTime: "5 min read",
    tags: ["Video Marketing", "Conversion Rate", "E-commerce", "Shopify"],
  }
}

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const post = getBlogPost(params.id)

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Back to Blogs */}
      <div className="mb-8">
        <Button asChild variant="ghost" className="text-purple-300 hover:text-purple-400 hover:bg-purple-500/10 -ml-4">
          <Link href="/blogs">
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blogs
          </Link>
        </Button>
      </div>

      {/* Blog Header */}
      <div className="mb-8">
        <Badge className="mb-4 bg-purple-500/20 text-purple-300 border-purple-500/30">{post.category}</Badge>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">{post.title}</h1>

        <div className="flex items-center mb-8">
          <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
            <Image
              src={post.authorImage || "/placeholder.svg"}
              alt={post.author}
              width={48}
              height={48}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <div className="text-white font-medium">{post.author}</div>
            <div className="text-gray-400 text-sm">{post.authorRole}</div>
          </div>
          <div className="ml-auto flex items-center text-gray-400 text-sm">
            <div className="flex items-center mr-4">
              <Calendar className="w-4 h-4 mr-1" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      <div className="aspect-[21/9] relative rounded-xl overflow-hidden mb-12">
        <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
      </div>

      {/* Blog Content */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
        <div className="lg:col-span-3">
          <article className="prose prose-invert prose-purple max-w-none">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </article>

          {/* Tags */}
          <div className="mt-12 flex flex-wrap gap-2">
            {post.tags.map((tag, index) => (
              <Badge key={index} className="bg-slate-800/50 text-gray-300 border-purple-500/30">
                {tag}
              </Badge>
            ))}
          </div>

          {/* Share */}
          <div className="mt-12 pt-8 border-t border-purple-500/30">
            <div className="flex items-center">
              <span className="text-white font-medium mr-4">Share this post:</span>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full w-10 h-10 border-purple-500/30 text-purple-300 hover:bg-purple-500/10"
                >
                  <Facebook className="w-5 h-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full w-10 h-10 border-purple-500/30 text-purple-300 hover:bg-purple-500/10"
                >
                  <Twitter className="w-5 h-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full w-10 h-10 border-purple-500/30 text-purple-300 hover:bg-purple-500/10"
                >
                  <Linkedin className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="sticky top-24">
            {/* Author Bio */}
            <div className="bg-slate-800/50 border border-purple-500/30 rounded-xl p-6 mb-8">
              <h3 className="text-lg font-bold text-white mb-4">About the Author</h3>
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                  <Image
                    src={post.authorImage || "/placeholder.svg"}
                    alt={post.author}
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="text-white font-medium">{post.author}</div>
                  <div className="text-gray-400 text-sm">{post.authorRole}</div>
                </div>
              </div>
              <p className="text-gray-300 text-sm">
                Sarah is the CTO and Co-Founder of CleverCat. With over 10 years of experience in video technology,
                she's passionate about helping e-commerce businesses leverage the power of video to drive sales.
              </p>
            </div>

            {/* Related Posts */}
            <div className="bg-slate-800/50 border border-purple-500/30 rounded-xl p-6">
              <h3 className="text-lg font-bold text-white mb-4">Related Posts</h3>
              <div className="space-y-4">
                {[
                  {
                    title: "5 Ways to Optimize Your Product Videos for Mobile",
                    date: "May 15, 2023",
                    image: "/placeholder.svg?height=100&width=100&text=RP1",
                  },
                  {
                    title: "The Future of E-commerce: Video-First Shopping Experiences",
                    date: "May 22, 2023",
                    image: "/placeholder.svg?height=100&width=100&text=RP2",
                  },
                  {
                    title: "Case Study: How Brand X Increased Sales by 45% with CleverCat",
                    date: "April 30, 2023",
                    image: "/placeholder.svg?height=100&width=100&text=RP3",
                  },
                ].map((relatedPost, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-16 h-16 rounded overflow-hidden mr-4 flex-shrink-0">
                      <Image
                        src={relatedPost.image || "/placeholder.svg"}
                        alt={relatedPost.title}
                        width={64}
                        height={64}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-white font-medium text-sm hover:text-purple-300 transition-colors">
                        <Link href="#">{relatedPost.title}</Link>
                      </h4>
                      <div className="text-gray-400 text-xs mt-1">{relatedPost.date}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
