
import React from "react";
import TestimonialCard from "./TestimonialCard";

interface Testimonial {
  id: number;
  name: string;
  title?: string;
  company?: string;
  quote: string;
  rating?: number;
  image?: string;
  hasLinkedin?: boolean;
  variant?: "simple" | "detailed";
  badge?: string;
}

interface TestimonialsGridProps {
  testimonials: Testimonial[];
  title?: string;
  subtitle?: string;
  columns?: 2 | 3 | 4;
}

const TestimonialsGrid: React.FC<TestimonialsGridProps> = ({
  testimonials,
  title,
  subtitle,
  columns = 3,
}) => {
  const columnClass = {
    2: "grid-cols-1 sm:grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
  };

  return (
    <div className="w-full py-12 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        {(title || subtitle) && (
          <div className="text-center mb-10">
            {title && (
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-2">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="max-w-2xl mx-auto text-lg text-gray-600">
                {subtitle}
              </p>
            )}
          </div>
        )}

        <div className={`grid ${columnClass[columns]} gap-6`}>
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              name={testimonial.name}
              title={testimonial.title}
              company={testimonial.company}
              quote={testimonial.quote}
              rating={testimonial.rating}
              image={testimonial.image}
              hasLinkedin={testimonial.hasLinkedin}
              variant={testimonial.variant}
              badge={testimonial.badge}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsGrid;
