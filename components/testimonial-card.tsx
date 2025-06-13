import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

interface TestimonialCardProps {
  quote: string
  author: string
  role: string
  avatarUrl: string
}

export default function TestimonialCard({ quote, author, role, avatarUrl }: TestimonialCardProps) {
  return (
    <Card className="bg-slate-800/50 border-purple-500/30">
      <CardContent className="p-6">
        <div className="mb-4">
          <svg className="w-8 h-8 text-purple-400 mb-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
        </div>
        <p className="text-gray-300 mb-6 italic">"{quote}"</p>
        <div className="flex items-center">
          <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
            <Image
              src={avatarUrl || "/placeholder.svg"}
              alt={author}
              width={48}
              height={48}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <div className="text-white font-medium">{author}</div>
            <div className="text-gray-400 text-sm">{role}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
