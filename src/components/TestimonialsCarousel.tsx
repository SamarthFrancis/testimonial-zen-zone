
import React, { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import TestimonialCard from "./TestimonialCard";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

interface Testimonial {
  id: number;
  name: string;
  title?: string;
  company?: string;
  quote: string;
  rating?: number;
  image?: string;
  hasLinkedin?: boolean;
  badge?: string;
}

interface TestimonialsCarouselProps {
  testimonials: Testimonial[];
  title?: string;
  subtitle?: string;
}

const TestimonialsCarousel: React.FC<TestimonialsCarouselProps> = ({
  testimonials,
  title,
  subtitle,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  const itemsPerPage = isMobile ? 1 : 3;
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : totalPages - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < totalPages - 1 ? prev + 1 : 0));
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      const scrollAmount = container.scrollWidth / totalPages * currentIndex;
      container.scrollTo({ left: scrollAmount, behavior: "smooth" });
    }
  }, [currentIndex, totalPages]);

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

        <div className="relative">
          <div
            ref={containerRef}
            className="overflow-hidden"
          >
            <div
              className={cn(
                "flex transition-all duration-300",
                isMobile ? "gap-4" : "gap-6"
              )}
              style={{
                width: `${100 * Math.ceil(testimonials.length / itemsPerPage)}%`,
                transform: `translateX(-${(currentIndex * 100) / Math.ceil(testimonials.length / itemsPerPage)}%)`,
              }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className={cn(
                    "flex-shrink-0",
                    isMobile ? "w-full" : "w-1/3"
                  )}
                >
                  <TestimonialCard
                    name={testimonial.name}
                    title={testimonial.title}
                    company={testimonial.company}
                    quote={testimonial.quote}
                    rating={testimonial.rating}
                    image={testimonial.image}
                    hasLinkedin={testimonial.hasLinkedin}
                    badge={testimonial.badge}
                  />
                </div>
              ))}
            </div>
          </div>

          {totalPages > 1 && (
            <div className="flex justify-center items-center mt-8 gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={handlePrev}
                aria-label="Previous testimonials"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              {Array.from({ length: totalPages }).map((_, i) => (
                <Button
                  key={i}
                  variant={currentIndex === i ? "default" : "outline"}
                  size="sm"
                  className={cn(
                    "h-8 w-8 p-0",
                    currentIndex === i ? "text-white" : ""
                  )}
                  onClick={() => setCurrentIndex(i)}
                  aria-label={`Go to page ${i + 1}`}
                >
                  {i + 1}
                </Button>
              ))}
              <Button
                variant="outline"
                size="icon"
                onClick={handleNext}
                aria-label="Next testimonials"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCarousel;
