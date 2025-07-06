import React from 'react';
import Breadcrumb from '@/components/breadcrumb';
import ProjectCard from '@/components/project-card';
import { getProjectsByCategory } from '@/lib/data';

export default function BathroomPage() {
  const bathroomProjects = getProjectsByCategory('bathroom');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumb items={[{ label: 'Bathroom' }]} />
      
      {/* Hero Section */}
      <div className="mb-12 text-center">
        <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden mb-8 shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1620626011761-996317b8d101?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            alt="Bathroom Collection"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end">
            <div className="p-8 text-white">
              <h1 className="text-4xl sm:text-5xl font-bold mb-4 animate-fade-in">
                Bathroom Collection
              </h1>
              <p className="text-xl text-gray-200 max-w-3xl animate-fade-in-delay">
                Create luxurious bathroom spaces with bold designs, premium materials, 
                and sophisticated finishes that transform your daily routine.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {bathroomProjects.map((project, index) => (
          <div 
            key={project.id}
            className={`stagger-animation ${index < 6 ? 'visible' : ''}`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>

      {bathroomProjects.length === 0 && (
        <div className="text-center py-12">
          <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-4xl">🛁</span>
          </div>
          <p className="text-gray-500 text-lg">No bathroom projects found.</p>
          <p className="text-gray-400 text-sm mt-2">Check back soon for new bathroom designs!</p>
        </div>
      )}

      {/* Call to Action */}
      <div className="mt-16 bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Transform Your Bathroom Space?
        </h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Our bathroom design experts can create a luxurious and functional space that exceeds your expectations.
        </p>
        <a
          href="/contact"
          className="inline-flex items-center px-6 py-3 bg-amber-600 text-white font-medium rounded-lg hover:bg-amber-700 transition-all duration-300 hover:scale-105 hover:shadow-lg"
        >
          Design My Bathroom
        </a>
      </div>
    </div>
  );
}