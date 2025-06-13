// components/ChatBotFeatures.tsx
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    title: "Human-like Conversations",
    description:
      "Engage visitors with natural, human-like dialogue that feels personal and authentic — no robotic replies.",
    icon: "🗣️",
  },
  {
    title: "Smart Product Recommendations",
    description:
      "Suggests the perfect products based on user preferences, behavior, and purchase history — instantly.",
    icon: "🎯",
  },
  {
    title: "Lead Collection Made Easy",
    description:
      "Collects emails, phone numbers, and customer intent during chats — no forms needed.",
    icon: "📥",
  },
  {
    title: "Instant Website Navigation",
    description:
      "Guides users to the right pages by sharing clickable website URLs in the chat — like a smart tour guide.",
    icon: "🌐",
  },
  {
    title: "Always-On Sales Agent",
    description:
      "Never miss a sale. Your AI chatbot works 24/7, answering questions and driving conversions in real-time.",
    icon: "⏰",
  },
  {
    title: "Seamless CRM Integration",
    description:
      "Syncs collected leads and chat data directly into your CRM or email tools for fast follow-ups.",
    icon: "🔗",
  },
];

const ChatBotFeatures = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {features.map((feature, index) => (
        <Card key={index} className="bg-slate-800/50 border-purple-500/30 overflow-hidden">
          <CardContent className="p-6">
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
            <p className="text-gray-300">{feature.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ChatBotFeatures;
