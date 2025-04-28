
import React from "react";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import StarRating from "./StarRating";
import { Quote, Linkedin } from "lucide-react";

interface TestimonialCardProps {
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

const TestimonialCard = ({
  name,
  title,
  company,
  quote,
  rating,
  image,
  hasLinkedin = false,
  variant = "simple",
  badge,
}: TestimonialCardProps) => {
  return (
    <Card className={cn(
      "h-full transition-all duration-300 hover:shadow-md",
      variant === "detailed" ? "overflow-hidden" : ""
    )}>
      <CardContent className={cn(
        "flex flex-col h-full p-6",
        variant === "detailed" ? "relative" : ""
      )}>
        <div className="mb-4 flex items-start justify-between">
          <div className="flex items-center">
            {image ? (
              <div className="mr-4 flex-shrink-0">
                <img
                  src={image}
                  alt={`${name}`}
                  className="h-12 w-12 rounded-full object-cover"
                />
              </div>
            ) : (
              <div className="mr-4 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                <span className="font-medium text-primary">
                  {name.charAt(0).toUpperCase()}
                </span>
              </div>
            )}
            <div>
              <div className="flex items-center">
                <p className="font-medium">{name}</p>
                {hasLinkedin && (
                  <a 
                    href="#" 
                    className="ml-2"
                    aria-label={`${name}'s LinkedIn profile`}
                  >
                    <Linkedin className="h-4 w-4 text-blue-600" />
                  </a>
                )}
              </div>
              {(title || company) && (
                <p className="text-sm text-gray-500">
                  {title}{title && company && ", "}{company}
                </p>
              )}
            </div>
          </div>
          {badge && (
            <div className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
              {badge}
            </div>
          )}
        </div>
        
        <div className="relative flex-grow">
          <Quote className="absolute -left-1 -top-1 h-6 w-6 text-gray-200 rotate-180" aria-hidden="true" />
          <p className="mt-2 pl-2 text-gray-700">{quote}</p>
        </div>
        
        {rating !== undefined && (
          <div className="mt-4">
            <StarRating rating={rating} />
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
