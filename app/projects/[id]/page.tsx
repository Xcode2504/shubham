import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Breadcrumb from '@/components/breadcrumb';
import ProjectCard from '@/components/project-card';
import { getProjectById, projects, getProjectsByCategory } from '@/lib/data';

interface ProjectPageProps {
  params: {
    id: string;
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = getProjectById(params.id);

  if (!project) {
    notFound();
  }

  // Get related projects from the same category
  const relatedProjects = getProjectsByCategory(project.category)
    .filter(p => p.id !== project.id)
    .slice(0, 3);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumb 
        items={[
          { label: project.category.charAt(0).toUpperCase() + project.category.slice(1), href: `/${project.category}` },
          { label: project.title }
        ]} 
      />

      <div className="mb-6">
        <Link href={`/${project.category}`}>
          <Button variant="outline" className="mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
          </Button>
        </Link>
      </div>

      {/* Header Image */}
      <div className="mb-8">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-96 md:h-[500px] object-cover rounded-lg shadow-lg"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          <div className="mb-6">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              {project.title}
            </h1>
            
            <div className="flex items-center space-x-6 text-gray-600 mb-6">
              <div className="flex items-center space-x-2">
                <User className="h-4 w-4" />
                <span>By {project.designer}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4" />
                <span>{new Date(project.date).toLocaleDateString()}</span>
              </div>
            </div>
          </div>

          {/* Project Content */}
          <div className="prose prose-lg max-w-none">
            <div dangerouslySetInnerHTML={{ __html: project.content }} />
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Contact Card */}
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4">Interested in this project?</h3>
              <p className="text-gray-600 mb-4">
                Get in touch to learn more about our design process and how we can help transform your space.
              </p>
              <Link href="/contact">
                <Button className="w-full bg-amber-600 hover:bg-amber-700">
                  Contact Us
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Related Projects */}
          {relatedProjects.length > 0 && (
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Related Projects</h3>
                <div className="space-y-4">
                  {relatedProjects.map((relatedProject) => (
                    <Link key={relatedProject.id} href={`/projects/${relatedProject.id}`}>
                      <div className="flex space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                        <img
                          src={relatedProject.image}
                          alt={relatedProject.title}
                          className="w-16 h-16 object-cover rounded-md flex-shrink-0"
                        />
                        <div className="flex-grow">
                          <h4 className="font-medium text-gray-900 text-sm mb-1">
                            {relatedProject.title}
                          </h4>
                          <p className="text-gray-600 text-xs line-clamp-2">
                            {relatedProject.excerpt}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
                <Link href={`/${project.category}`}>
                  <Button variant="outline" className="w-full mt-4">
                    View All {project.category.charAt(0).toUpperCase() + project.category.slice(1)} Projects
                  </Button>
                </Link>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}

// Generate static params for all projects
export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}