"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial animations
      gsap.fromTo(
        titleRef.current,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
      );

      gsap.fromTo(
        subtitleRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, delay: 0.3, ease: "power3.out" }
      );

      gsap.fromTo(
        ctaRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, delay: 0.6, ease: "power3.out" }
      );

      // Visual animation
      gsap.fromTo(
        visualRef.current,
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.5, delay: 0.4, ease: "power3.out" }
      );

      // Parallax effect
      gsap.to(visualRef.current, {
        y: -100,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1
              ref={titleRef}
              className="mt-20 text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
            >
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                Professional
              </span>
              <br />
              <span className="text-gray-900">Web Development</span>
            </h1>

            <p
              ref={subtitleRef}
              className="mt-6 text-xl md:text-2xl text-gray-600 leading-relaxed max-w-2xl"
            >
              Transform your business with modern, responsive websites featuring
              smooth animations, 3D elements, and exceptional user experiences.
            </p>

            <div
              ref={ctaRef}
              className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link href="/contact">
                <Button
                  variant="gradient"
                  size="xl"
                  className="w-full sm:w-auto"
                >
                  Get Started Today
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  variant="outline"
                  size="xl"
                  className="w-full sm:w-auto"
                >
                  View Our Services
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-16 grid grid-cols-3 gap-8 text-center lg:text-left">
              <div>
                <div className="text-3xl font-bold text-blue-600">50+</div>
                <div className="text-sm text-gray-600">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600">100%</div>
                <div className="text-sm text-gray-600">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">24/7</div>
                <div className="text-sm text-gray-600">Support Available</div>
              </div>
            </div>
          </div>

          {/* Visual Element - CSS-based 3D effect */}
          <div
            ref={visualRef}
            className="relative h-96 lg:h-[600px] w-full flex items-center justify-center"
          >
            {/* CSS-based 3D sphere effect */}
            <div className="relative w-80 h-80">
              {/* Main sphere */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-full animate-spin-slow shadow-2xl"></div>

              {/* Inner glow */}
              <div className="absolute inset-4 bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 rounded-full opacity-80"></div>

              {/* Core */}
              <div className="absolute inset-8 bg-gradient-to-br from-white to-gray-100 rounded-full shadow-inner"></div>

              {/* Floating particles */}
              <div className="absolute top-10 right-10 w-4 h-4 bg-blue-400 rounded-full animate-pulse"></div>
              <div className="absolute bottom-20 left-10 w-3 h-3 bg-purple-400 rounded-full animate-pulse animation-delay-1000"></div>
              <div className="absolute top-1/2 right-5 w-2 h-2 bg-pink-400 rounded-full animate-pulse animation-delay-2000"></div>
              <div className="absolute top-1/4 left-5 w-3 h-3 bg-blue-300 rounded-full animate-pulse animation-delay-3000"></div>
              <div className="absolute bottom-1/4 right-20 w-2 h-2 bg-purple-300 rounded-full animate-pulse animation-delay-4000"></div>
            </div>

            {/* Floating Elements */}
            <div className="absolute top-10 right-10 w-20 h-20 bg-blue-500 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute bottom-20 left-10 w-16 h-16 bg-purple-500 rounded-full opacity-20 animate-pulse animation-delay-1000"></div>
            <div className="absolute top-1/2 right-5 w-12 h-12 bg-pink-500 rounded-full opacity-20 animate-pulse animation-delay-2000"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
