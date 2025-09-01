"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Users, Target, Award, Heart } from "lucide-react";
import Link from "next/link";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const About = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const missionRef = useRef(null);
  const valuesRef = useRef(null);
  const teamRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
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

      // Subtitle animation
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

      // Mission section animation
      gsap.fromTo(
        missionRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.4,
          ease: "power3.out",
          scrollTrigger: {
            trigger: missionRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Values section animation
      gsap.fromTo(
        valuesRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: valuesRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Team section animation
      gsap.fromTo(
        teamRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: teamRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const values = [
    {
      icon: Target,
      title: "Excellence",
      description:
        "We strive for perfection in every project, delivering high-quality solutions that exceed expectations.",
    },
    {
      icon: Heart,
      title: "Passion",
      description:
        "Our love for technology and innovation drives us to create amazing digital experiences.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description:
        "We work closely with our clients as partners, ensuring their vision becomes reality.",
    },
    {
      icon: Award,
      title: "Innovation",
      description:
        "We stay ahead of the curve, using cutting-edge technologies and modern development practices.",
    },
  ];

  const team = [
    {
      name: "Alex Johnson",
      role: "Lead Developer",
      image: "/team/alex.jpg",
      bio: "Full-stack developer with 8+ years of experience in React, Node.js, and cloud technologies.",
    },
    {
      name: "Sarah Chen",
      role: "UI/UX Designer",
      image: "/team/sarah.jpg",
      bio: "Creative designer specializing in user experience and modern interface design.",
    },
    {
      name: "Mike Rodriguez",
      role: "DevOps Engineer",
      image: "/team/mike.jpg",
      bio: "Infrastructure specialist focused on scalable deployments and performance optimization.",
    },
  ];

  return (
    <div ref={sectionRef} className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-gray-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1
              ref={titleRef}
              className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
            >
              About{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Bodhify.tech
              </span>
            </h1>
            <p
              ref={subtitleRef}
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            >
              We are a passionate team of developers, designers, and innovators
              dedicated to creating exceptional digital experiences that drive
              business growth.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section ref={missionRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                At Bodhify.tech, we believe that technology should be
                accessible, beautiful, and powerful. Our mission is to help
                businesses transform their digital presence through innovative
                web solutions that combine cutting-edge technology with
                exceptional user experiences.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We&apos;re committed to delivering projects that not only meet
                your requirements but exceed your expectations, helping you
                stand out in the digital landscape.
              </p>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Why Choose Us?</h3>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>Modern technology stack</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>Responsive design principles</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>Performance optimization</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>Ongoing support & maintenance</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section ref={valuesRef} className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do and shape our approach
              to every project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card
                  key={index}
                  className="text-center hover:shadow-lg transition-shadow duration-300"
                >
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600">
                      {value.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section ref={teamRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The talented individuals behind Bodhify.tech, bringing years of
              experience and passion to every project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow duration-300"
              >
                <CardHeader>
                  <div className="w-32 h-32 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-4xl font-bold text-white">
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-blue-600 font-medium">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Let&apos;s discuss your project and see how we can help bring your
            vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button
                variant="outline"
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100"
              >
                Get In Touch
              </Button>
            </Link>
            <Link href="/services">
              <Button
                variant="ghost"
                size="lg"
                className="text-white border-white hover:bg-white/10"
              >
                View Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
