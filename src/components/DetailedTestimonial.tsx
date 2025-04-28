
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import StarRating from "./StarRating";
import { Linkedin } from "lucide-react";

interface DetailedTestimonialProps {
  name: string;
  title?: string;
  company?: string;
  quote: string;
  rating?: number;
  image?: string;
  hasLinkedin?: boolean;
  reviewDate?: string;
  reviewTitle?: string;
  categories?: { label: string; rating: number }[];
  badges?: string[];
  pros?: string[];
}

const DetailedTestimonial: React.FC<DetailedTestimonialProps> = ({
  name,
  title,
  company,
  quote,
  rating,
  image,
  hasLinkedin = false,
  reviewDate,
  reviewTitle,
  categories,
  badges,
  pros
}) => {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <div className="flex flex-col md:flex-row">
          <div className="p-6 md:w-1/3 md:border-r border-gray-100 bg-gray-50">
            <div className="flex items-center">
              {image ? (
                <img
                  src={image}
                  alt={name}
                  className="h-16 w-16 rounded-full object-cover mr-4"
                />
              ) : (
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                  <span className="text-lg font-semibold text-primary">
                    {name.charAt(0).toUpperCase()}
                  </span>
                </div>
              )}
              <div>
                <div className="flex items-center">
                  <h3 className="font-semibold text-lg">{name}</h3>
                  {hasLinkedin && (
                    <a href="#" className="ml-2" aria-label={`${name}'s LinkedIn profile`}>
                      <Linkedin className="h-4 w-4 text-blue-600" />
                    </a>
                  )}
                </div>
                {(title || company) && (
                  <p className="text-sm text-gray-600">
                    {title}{title && company && ", "}{company}
                  </p>
                )}
              </div>
            </div>

            {categories && categories.length > 0 && (
              <div className="mt-6">
                {categories.map((category, index) => (
                  <div key={index} className="mb-3">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm text-gray-600">{category.label}</span>
                      <StarRating rating={category.rating} className="scale-75 origin-right" />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="p-6 md:w-2/3">
            {reviewDate && (
              <p className="text-sm text-gray-500 mb-2">{reviewDate}</p>
            )}

            {reviewTitle && (
              <h4 className="text-xl font-semibold mb-2">{reviewTitle}</h4>
            )}

            {rating !== undefined && (
              <div className="mb-4">
                <StarRating rating={rating} />
              </div>
            )}

            {badges && badges.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {badges.map((badge, index) => (
                  <Badge key={index} variant="outline" className="bg-gray-100">
                    {badge}
                  </Badge>
                ))}
              </div>
            )}

            <div className="mb-6">
              <p className="text-gray-700">{quote}</p>
            </div>

            {pros && pros.length > 0 && (
              <div className="mt-4">
                <h5 className="font-medium mb-2 flex items-center gap-2">
                  <span className="text-emerald-500">✓</span> Pros
                </h5>
                <ul className="pl-6 list-disc text-gray-700">
                  {pros.map((pro, index) => (
                    <li key={index}>{pro}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DetailedTestimonial;
