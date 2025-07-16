import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Breadcrumb from '@/components/breadcrumb';
import { Award, Users, Calendar, Heart } from 'lucide-react';

export default function AboutPage() {
  const stats = [
    {
      icon: <Calendar className="h-8 w-8 text-amber-600" />,
      number: '15+',
      label: 'Years Experience'
    },
    {
      icon: <Users className="h-8 w-8 text-amber-600" />,
      number: '500+',
      label: 'Happy Clients'
    },
    {
      icon: <Award className="h-8 w-8 text-amber-600" />,
      number: '50+',
      label: 'Design Awards'
    },
    {
      icon: <Heart className="h-8 w-8 text-amber-600" />,
      number: '1000+',
      label: 'Projects Completed'
    }
  ];

  const values = [
    {
      title: 'Timeless Design',
      description: 'We believe in creating spaces that transcend trends, focusing on timeless elegance that remains beautiful for years to come.'
    },
    {
      title: 'Quality Craftsmanship',
      description: 'Every piece we select and every project we undertake reflects our commitment to exceptional quality and attention to detail.'
    },
    {
      title: 'Personalized Service',
      description: 'We work closely with each client to understand their unique vision and bring their dream spaces to life.'
    },
    {
      title: 'Sustainable Practices',
      description: 'Environmental responsibility is at the heart of our design philosophy, choosing sustainable materials and practices.'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumb items={[{ label: 'About' }]} />
      
      {/* Hero Section */}
      <div className="mb-16">
        <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden mb-8 shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            alt="About Classic Interiors"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end">
            <div className="p-8 text-white">
              <h1 className="text-4xl sm:text-5xl font-bold mb-4 animate-fade-in">
                About Classic Interiors
              </h1>
              <p className="text-xl text-gray-200 max-w-3xl animate-fade-in-delay">
                Founded in 2010, Classic Interiors has been transforming spaces with timeless design 
                and exceptional craftsmanship. We believe that great design should not only be beautiful 
                but also functional, sustainable, and deeply personal.
              </p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Our team of passionate designers and craftspeople work tirelessly to create spaces that 
              tell your story, reflect your personality, and enhance your daily life. From lighting 
              and furniture to decorative elements, every piece is carefully selected to create harmony 
              and beauty in your home.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We pride ourselves on our ability to blend traditional Indian design elements with 
              contemporary aesthetics, creating unique spaces that honor cultural heritage while 
              embracing modern functionality.
            </p>
          </div>
          <div className="relative">
            <img
              src="assets/kitchen-31.jpg"
              alt="Our design studio"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="mb-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="flex justify-center mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Our Story Section */}
      <div className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our Story
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From humble beginnings to becoming a leading name in interior design, 
            our journey has been driven by passion, creativity, and an unwavering 
            commitment to excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">The Beginning</h3>
              <p className="text-gray-600 leading-relaxed">
                Classic Interiors was born from a simple belief: that everyone deserves to live in 
                a space that inspires them. Our founders, with backgrounds in architecture and fine arts, 
                started with a small studio and big dreams.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Growing Success</h3>
              <p className="text-gray-600 leading-relaxed">
                Through word-of-mouth and our commitment to excellence, we quickly gained recognition 
                in the design community. Our projects began to be featured in major design publications, 
                and our client base grew from local homeowners to national retailers.
              </p>
            </div>
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Award Recognition</h3>
              <p className="text-gray-600 leading-relaxed">
                Our innovative designs and commitment to sustainability have earned us numerous 
                industry awards, including the prestigious Interior Design Excellence Award and 
                recognition from the American Society of Interior Designers.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Looking Forward</h3>
              <p className="text-gray-600 leading-relaxed">
                Today, we continue to push boundaries in design while staying true to our core values. 
                We're constantly exploring new materials, techniques, and technologies to create even 
                more beautiful and sustainable spaces for our clients.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Values Section */}
      <div className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our Values
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            These core principles guide everything we do, from the pieces we select 
            to the relationships we build with our clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-0">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Team Section */}
      <div className="text-center bg-gray-50 rounded-lg p-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Our Design Philosophy
        </h2>
        <p className="text-lg text-gray-600 mb-6 max-w-3xl mx-auto">
          We believe in creating spaces that reflect Indian sensibilities while embracing modern functionality. 
          Our approach combines traditional craftsmanship with contemporary design principles.
        </p>
        <div className="text-center">
          <a
            href="/contact"
            className="inline-flex items-center px-6 py-3 bg-amber-600 text-white font-medium rounded-lg hover:bg-amber-700 transition-colors"
          >
            Start Your Project
          </a>
        </div>
      </div>
    </div>
  );
}