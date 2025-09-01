"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { services } from "@/data/services";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: string;
  price: string;
  duration: string;
  category: string;
}

interface ServiceCardProps {
  service: Service;
  index: number;
}

const ServiceCard = ({ service, index }: ServiceCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardRef.current,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: index * 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, cardRef);

    return () => ctx.revert();
  }, [index]);

  return (
    <Card
      ref={cardRef}
      className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm hover:bg-white"
    >
      <CardHeader className="text-center pb-4">
        <div className="text-4xl mb-4">{service.icon}</div>
        <CardTitle className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
          {service.title}
        </CardTitle>
        <CardDescription className="text-gray-600 leading-relaxed">
          {service.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Features */}
        <div className="space-y-3">
          {service.features.slice(0, 4).map((feature: string, idx: number) => (
            <div key={idx} className="flex items-center space-x-3">
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
              <span className="text-sm text-gray-700">{feature}</span>
            </div>
          ))}
        </div>

        {/* Price & Duration */}
        <div className="flex justify-between items-center pt-4 border-t border-gray-100">
          <div>
            <div className="text-lg font-semibold text-blue-600">{service.price}</div>
            <div className="text-sm text-gray-500">{service.duration}</div>
          </div>
        </div>

        {/* CTA */}
        <Link href={`/services/${service.id}`}>
          <Button
            variant="outline"
            className="w-full group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-300"
          >
            Learn More
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

const Services = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        subtitleRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2
            ref={titleRef}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Our{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p
            ref={subtitleRef}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            We offer comprehensive web development solutions tailored to your
            business needs. From custom development to ongoing maintenance,
            we&apos;ve got you covered.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service: Service, index: number) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Transform Your Digital Presence?
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Let&apos;s discuss your project and create something amazing together.
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
      </div>
    </section>
  );
};

export default Services;

