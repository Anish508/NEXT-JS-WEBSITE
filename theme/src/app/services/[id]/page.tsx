"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CheckCircle, Clock, DollarSign, Users } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { services, getServiceById } from "@/data/services";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface ServiceDetailProps {
  params: {
    id: string;
  };
}

const ServiceDetail = ({ params }: ServiceDetailProps) => {
  const service = getServiceById(params.id);
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const contentRef = useRef(null);

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

      gsap.fromTo(
        contentRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.4,
          ease: "power3.out",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  if (!service) {
    notFound();
  }

  return (
    <div ref={sectionRef} className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-gray-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link href="/services">
              <Button variant="ghost" className="mb-4">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Services
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-6xl mb-6">{service.icon}</div>
              <h1
                ref={titleRef}
                className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
              >
                {service.title}
              </h1>
              <p
                ref={subtitleRef}
                className="text-xl text-gray-600 leading-relaxed mb-8"
              >
                {service.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                <div className="flex items-center space-x-3">
                  <DollarSign className="w-6 h-6 text-blue-600" />
                  <div>
                    <div className="font-semibold text-gray-900">
                      {service.price}
                    </div>
                    <div className="text-sm text-gray-500">Starting Price</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-6 h-6 text-purple-600" />
                  <div>
                    <div className="font-semibold text-gray-900">
                      {service.duration}
                    </div>
                    <div className="text-sm text-gray-500">Timeline</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-6 h-6 text-green-600" />
                  <div>
                    <div className="font-semibold text-gray-900">
                      Expert Team
                    </div>
                    <div className="text-sm text-gray-500">
                      Dedicated Support
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button variant="gradient" size="lg">
                    Get Started
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" size="lg">
                    Request Quote
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">
                  What&apos;s Included
                </h3>
                <ul className="space-y-4">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-300 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Content */}
      <section ref={contentRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Service Details
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-600 leading-relaxed mb-6">
                  Our {service.title.toLowerCase()} service is designed to
                  provide you with comprehensive solutions that meet your
                  specific business requirements. We combine industry best
                  practices with cutting-edge technology to deliver exceptional
                  results.
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  With our experienced team and proven methodologies, we ensure
                  that every project is completed on time, within budget, and
                  exceeds your expectations. Our commitment to quality and
                  customer satisfaction sets us apart in the industry.
                </p>
              </div>

              {/* Process */}
              <div className="mt-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Our Process
                </h3>
                <div className="space-y-6">
                  {[
                    {
                      step: "01",
                      title: "Discovery & Planning",
                      description:
                        "We start by understanding your requirements and creating a detailed project plan.",
                    },
                    {
                      step: "02",
                      title: "Design & Development",
                      description:
                        "Our team creates and develops your solution using the latest technologies.",
                    },
                    {
                      step: "03",
                      title: "Testing & Quality Assurance",
                      description:
                        "Thorough testing ensures everything works perfectly before launch.",
                    },
                    {
                      step: "04",
                      title: "Deployment & Support",
                      description:
                        "We deploy your solution and provide ongoing support and maintenance.",
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                        {item.step}
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">
                          {item.title}
                        </h4>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Related Services */}
              <Card>
                <CardHeader>
                  <CardTitle>Related Services</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {services
                    .filter(
                      (s) =>
                        s.id !== service.id && s.category === service.category
                    )
                    .slice(0, 3)
                    .map((relatedService) => (
                      <Link
                        key={relatedService.id}
                        href={`/services/${relatedService.id}`}
                        className="block p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                      >
                        <div className="flex items-center space-x-3">
                          <span className="text-2xl">
                            {relatedService.icon}
                          </span>
                          <div>
                            <div className="font-medium text-gray-900">
                              {relatedService.title}
                            </div>
                            <div className="text-sm text-gray-500">
                              {relatedService.price}
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                </CardContent>
              </Card>

              {/* Contact Card */}
              <Card>
                <CardHeader>
                  <CardTitle>Ready to Get Started?</CardTitle>
                  <CardDescription>
                    Contact us today to discuss your project requirements.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Link href="/contact">
                    <Button variant="gradient" className="w-full">
                      Contact Us
                    </Button>
                  </Link>
                  <Link href="/services">
                    <Button variant="outline" className="w-full">
                      View All Services
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Terms & Conditions Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-xl border bg-white shadow-sm p-6 sm:p-8">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">
              Terms & Conditions
            </h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
              Prices, timelines, and features mentioned for{" "}
              <span className="font-medium text-gray-900">{service.title}</span>{" "}
              may vary depending on market demand, cloud service provider
              charges, and project complexity. Additional factors such as
              integrations, advanced features, and support requirements can also
              affect final cost and delivery schedules.
            </p>
            <Link
              href="/terms"
              className="inline-block text-sm sm:text-base font-medium text-blue-600 hover:text-blue-800 hover:underline transition-colors"
            >
              View Full Terms & Conditions
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your {service.title} Project?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Let&apos;s discuss your requirements and create a custom solution
            that fits your needs and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button
                variant="outline"
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100"
              >
                Get Started Today
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
    </div>
  );
};

export default ServiceDetail;
