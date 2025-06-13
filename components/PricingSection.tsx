"use client";

import React from "react";
import PricingCard from "./pricing-card";

const pricingPlans = [
  {
    title: "Starter",
    price: "$19",
    period: "/month",
    description: "Ideal for small stores exploring chatbot automation",
    features: [
      "Up to 100 chats/month",
      "Basic analytics",
      "Email support",
      "1 store connection",
    ],
    buttonText: "Get Started",
    popular: false,
  },
  {
    title: "Growth",
    price: "$49",
    period: "/month",
    description: "Best for growing businesses needing better engagement",
    features: [
      "Up to 1000 chats/month",
      "Advanced analytics",
      "Priority support",
      "3 store connections",
      "AI training customization",
    ],
    buttonText: "Get Started",
    popular: true,
  },
  {
    title: "Enterprise",
    price: "$99",
    period: "/month",
    description: "For high-traffic stores requiring full customization",
    features: [
      "Unlimited chats",
      "Premium analytics",
      "24/7 dedicated support",
      "Unlimited store connections",
      "Custom integrations",
      "White-label chatbot",
    ],
    buttonText: "Contact Sales",
    popular: false,
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="container mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Simple,{" "}
          <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
            Transparent
          </span>{" "}
          Pricing
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Choose the plan that fits your AI chatbot needs
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {pricingPlans.map((plan, index) => (
          <PricingCard key={index} {...plan} />
        ))}
      </div>
    </section>
  );
};

export default PricingSection;
