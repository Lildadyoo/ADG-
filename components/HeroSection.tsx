import { ReactNode } from "react";

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
  backgroundImage?: string;
  overlay?: boolean;
  overlayOpacity?: number;
  className?: string;
}

export default function HeroSection({
  title,
  subtitle,
  children,
  backgroundImage,
  overlay = true,
  overlayOpacity = 0.5,
  className = "",
}: HeroSectionProps) {
  return (
    <section
      className={`section-padding text-white relative overflow-hidden ${
        backgroundImage
          ? ""
          : "bg-gradient-to-br from-primary to-primary-dark"
      } ${className}`}
    >
      {/* Background Image */}
      {backgroundImage && (
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
      )}

      {/* Overlay */}
      {overlay && backgroundImage && (
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundColor: `rgba(0, 0, 0, ${overlayOpacity})`,
          }}
        />
      )}

      {/* Content */}
      <div className="container-custom relative z-10">
        <div className="text-center py-16 md:py-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto mb-8">
              {subtitle}
            </p>
          )}
          {children}
        </div>
      </div>
    </section>
  );
}

