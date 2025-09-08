"use client";

import React, { useEffect, useRef, useMemo, createRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/ui/Card";
import { Button } from "../../components/ui/Button";
import { services, categories } from "@/data/services";

// Register GSAP plugin (safe to call more than once)
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type Service = {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: React.ReactNode | string;
  price: string;
  duration: string;
  category: string;
};

type Category = { id: string; name: string; description: string };

const ServiceCard = ({
  service,
  cardRef,
}: {
  service: Service;
  cardRef: React.RefObject<HTMLDivElement>;
}) => {
  return (
    <Card
      ref={cardRef}
      style={{ willChange: "transform, opacity" }}
      className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm hover:bg-white h-full"
      aria-labelledby={`service-${service.id}-title`}
    >
      <CardHeader className="text-center pb-4">
        <div className="text-4xl mb-4" aria-hidden>
          {service.icon}
        </div>
        <CardTitle id={`service-${service.id}-title`} className="text-xl">
          {service.title}
        </CardTitle>
        <CardDescription className="text-gray-600 leading-relaxed">
          {service.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-6 flex flex-col h-full">
        <div className="space-y-3 flex-grow">
          {service.features.map((feature: string, idx: number) => (
            <div key={idx} className="flex items-center space-x-3">
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
              <span className="text-sm text-gray-700">{feature}</span>
            </div>
          ))}
        </div>

        <div className="flex justify-between items-center pt-4 border-t border-gray-100">
          <div>
            <div className="text-lg font-semibold text-blue-600">
              {service.price}
            </div>
            <div className="text-sm text-gray-500">{service.duration}</div>
          </div>
        </div>

        <Link href={`/services/${service.id}`} className="w-full">
          <Button
            variant="outline"
            className="w-full group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-300"
          >
            <Button
              variant="outline"
              className="w-full flex items-center justify-center text-base sm:text-sm px-4 py-2 group 
             group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-300"
            >
              <span className="mr-2">Learn More</span>
              <ArrowRight className="w-5 h-5 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default function ServicesPage() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const subtitleRef = useRef<HTMLParagraphElement | null>(null);

  // Stable refs for cards
  const cardRefs = useMemo(
    () =>
      Array.from({ length: services.length }, () =>
        createRef<HTMLDivElement>()
      ),
    []
  );

  // Hero animations (lightweight)
  useEffect(() => {
    if (!sectionRef.current) return;

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      if (prefersReduced) {
        gsap.set([titleRef.current, subtitleRef.current], {
          autoAlpha: 1,
          y: 0,
        });
        return;
      }

      gsap.from(titleRef.current, {
        y: 50,
        autoAlpha: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          markers: false,
        },
      });

      gsap.from(subtitleRef.current, {
        y: 30,
        autoAlpha: 0,
        duration: 0.9,
        delay: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          markers: false,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Batch animation for card grid (optimized)
  useEffect(() => {
    const elements = cardRefs
      .map((r) => r.current)
      .filter(Boolean) as Element[];
    if (!elements.length) return;

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      // initial state
      gsap.set(elements, {
        autoAlpha: prefersReduced ? 1 : 0,
        y: prefersReduced ? 0 : 30,
        willChange: "transform,opacity",
      });

      if (prefersReduced) return;

      ScrollTrigger.batch(elements, {
        interval: 0.1, // how often batch callback runs (seconds)
        start: "top 90%",
        onEnter: (batch) =>
          gsap.to(batch, {
            autoAlpha: 1,
            y: 0,
            stagger: { each: 0.12, from: "start" },
            duration: 0.6,
            ease: "power2.out",
            overwrite: true,
          }),
        onLeave: (batch) =>
          gsap.to(batch, {
            autoAlpha: 0,
            y: 30,
            duration: 0.4,
            ease: "power2.in",
            overwrite: true,
          }),
        onEnterBack: (batch) =>
          gsap.to(batch, {
            autoAlpha: 1,
            y: 0,
            stagger: { each: 0.12, from: "end" },
            duration: 0.6,
            ease: "power2.out",
            overwrite: true,
          }),
        onLeaveBack: (batch) =>
          gsap.to(batch, {
            autoAlpha: 0,
            y: 30,
            duration: 0.4,
            ease: "power2.in",
            overwrite: true,
          }),
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [cardRefs]);

  return (
    <main ref={sectionRef} className="min-h-screen bg-white text-gray-900">
      {/* Hero */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-gray-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1
              ref={titleRef}
              className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
            >
              Our{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            <p
              ref={subtitleRef}
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            >
              Comprehensive web development solutions tailored to your business
              needs. From custom development to ongoing maintenance, we&apos;ve
              got you covered.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={service.id}
                service={service as Service}
                cardRef={cardRefs[index]}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Service Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our services organized by category to find exactly what
              you need.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category: Category) => (
              <Card
                key={category.id}
                className="hover:shadow-lg transition-shadow duration-300"
              >
                <CardHeader>
                  <CardTitle className="text-xl">{category.name}</CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {services
                      .filter((s) => s.category === category.id)
                      .map((s) => (
                        <Link
                          key={s.id}
                          href={`/services/${s.id}`}
                          className="block text-sm text-blue-600 hover:text-blue-800 transition-colors duration-200"
                        >
                          {s.title}
                        </Link>
                      ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Let&apos;s discuss your project requirements and create a custom
            solution that fits your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button
                variant="outline"
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100"
              >
                Start Your Project
              </Button>
            </Link>
            <Link href="/about">
              <Button
                variant="ghost"
                size="lg"
                className="text-white border-white hover:bg-white/10"
              >
                Learn More About Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
