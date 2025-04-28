
import React from "react";
import TestimonialShowcase from "@/components/TestimonialShowcase";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
            Customer Testimonials
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See what our customers are saying about our podcast hosting platform.
          </p>
        </div>
      </div>
      
      <TestimonialShowcase />
    </div>
  );
};

export default Index;
