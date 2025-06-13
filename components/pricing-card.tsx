import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle } from "lucide-react"

interface PricingCardProps {
  title: string
  price: string
  period: string
  description: string
  features: string[]
  buttonText: string
  popular?: boolean
}

export default function PricingCard({
  title,
  price,
  period,
  description,
  features,
  buttonText,
  popular = false,
}: PricingCardProps) {
  return (
    <Card
      className={`relative ${
        popular
          ? "bg-gradient-to-br from-purple-900/50 to-slate-900/50 border-purple-400"
          : "bg-slate-800/50 border-purple-500/30"
      }`}
    >
      {popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <Badge className="bg-gradient-to-r from-purple-500 to-purple-600 text-white border-none">Most Popular</Badge>
        </div>
      )}

      <CardHeader className="text-center pb-4">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <div className="mb-2">
          <span className="text-4xl font-bold text-white">{price}</span>
          <span className="text-gray-400">{period}</span>
        </div>
        <p className="text-gray-300 text-sm">{description}</p>
      </CardHeader>

      <CardContent className="pb-6">
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <CheckCircle className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />
              <span className="text-gray-300">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>

      <CardFooter>
        <Button
          className={`w-full ${
            popular
              ? "bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white"
              : "bg-slate-700 hover:bg-slate-600 text-white"
          }`}
        >
          {buttonText}
        </Button>
      </CardFooter>
    </Card>
  )
}
