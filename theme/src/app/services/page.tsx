"use client";

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

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-gray-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Our{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Services
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive web development solutions tailored to your business
            needs. From custom development to ongoing maintenance, we&apos;ve
            got you covered.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card
                key={service.id}
                className="h-full border rounded-xl shadow-sm hover:shadow-md transition-shadow bg-white"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <CardHeader className="text-center pb-4">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <CardTitle className="text-lg font-semibold">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 text-sm">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="flex flex-col h-full">
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center space-x-2 text-sm text-gray-700"
                      >
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Pricing & T&C Row */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-t pt-4 text-sm">
                    <div>
                      <div className="text-base font-semibold text-blue-600">
                        {service.price}
                      </div>
                      <div className="text-gray-500">{service.duration}</div>
                    </div>

                    {/* T&C Link */}
                    <Link
                      href="./terms"
                      className="sm:mt-0 text-xs text-gray-500 hover:text-blue-600 hover:underline transition-colors"
                    >
                      (Terms & Conditions)
                    </Link>
                  </div>

                  {/* Learn More CTA */}
                  <Link
                    href={`/services/${service.id}`}
                    className="mt-4 w-full"
                  >
                    <Button
                      size="lg"
                      className="w-full flex items-center justify-center gap-2 rounded-lg 
                 bg-gradient-to-r from-blue-600 to-purple-600 text-white 
                 hover:from-blue-700 hover:to-purple-700"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Service Categories
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our services organized by category to find exactly what
              you need.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => (
              <Card
                key={category.id}
                className="rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <CardHeader>
                  <CardTitle className="text-lg font-semibold">
                    {category.name}
                  </CardTitle>
                  <CardDescription className="text-gray-600 text-sm">
                    {category.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {services
                      .filter((s) => s.category === category.id)
                      .map((s) => (
                        <li key={s.id}>
                          <Link
                            href={`/services/${s.id}`}
                            className="text-blue-600 hover:text-blue-800 text-sm"
                          >
                            {s.title}
                          </Link>
                        </li>
                      ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss your project requirements and create a custom
            solution that fits your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                className="rounded-lg bg-white text-blue-600 hover:bg-gray-100"
              >
                Start Your Project
              </Button>
            </Link>
            <Link href="/about">
              <Button
                // variant="outline"
                size="lg"
                className="rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white"
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
