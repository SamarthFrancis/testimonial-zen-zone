
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TestimonialsCarousel from "./TestimonialsCarousel";
import TestimonialsGrid from "./TestimonialsGrid";
import DetailedTestimonial from "./DetailedTestimonial";
import { testimonials, featuredTestimonials } from "@/data/testimonials";

const TestimonialShowcase: React.FC = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
            What Our Customers Say
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Join thousands of content creators who trust HubHopper for their podcasting needs.
          </p>
        </div>

        <Tabs defaultValue="carousel" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger value="carousel">Carousel</TabsTrigger>
              <TabsTrigger value="grid">Grid</TabsTrigger>
              <TabsTrigger value="featured">Featured</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="carousel" className="mt-0">
            <TestimonialsCarousel 
              testimonials={testimonials} 
            />
          </TabsContent>
          
          <TabsContent value="grid" className="mt-0">
            <TestimonialsGrid 
              testimonials={testimonials} 
              columns={3}
            />
          </TabsContent>
          
          <TabsContent value="featured" className="mt-0">
            <div className="space-y-8">
              <DetailedTestimonial 
                name={testimonials[4].name}
                title={testimonials[4].title}
                quote={testimonials[4].quote}
                rating={testimonials[4].rating}
                image={testimonials[4].image}
                hasLinkedin={testimonials[4].hasLinkedin}
                reviewTitle={testimonials[4].reviewTitle}
                reviewDate={testimonials[4].reviewDate}
                categories={testimonials[4].categories}
                badges={testimonials[4].badges}
                pros={testimonials[4].pros}
              />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {featuredTestimonials.slice(0, 4).map((testimonial) => (
                  <TestimonialCard
                    key={testimonial.id}
                    name={testimonial.name}
                    title={testimonial.title}
                    company={testimonial.company}
                    quote={testimonial.quote}
                    rating={testimonial.rating}
                    image={testimonial.image}
                    hasLinkedin={testimonial.hasLinkedin}
                    badge={testimonial.badge}
                  />
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default TestimonialShowcase;
