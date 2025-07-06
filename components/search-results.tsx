'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import ProjectCard from '@/components/project-card';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Project } from '@/lib/data';

interface SearchResultsProps {
  query: string;
  results: Project[];
  onClose: () => void;
}

const SearchResults: React.FC<SearchResultsProps> = ({ query, results, onClose }) => {
  if (!query) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-start justify-center pt-20 animate-fade-in">
      <Card className="w-full max-w-4xl mx-4 max-h-[80vh] overflow-hidden shadow-2xl animate-scale-in">
        <div className="flex items-center justify-between p-6 border-b bg-gradient-to-r from-amber-50 to-orange-50">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">
              Search Results for "<span className="text-amber-600">{query}</span>"
            </h2>
            <p className="text-gray-600 text-sm">
              {results.length} {results.length === 1 ? 'result' : 'results'} found
            </p>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition-all duration-300 hover:scale-110"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>
        
        <CardContent className="p-6 overflow-y-auto max-h-[60vh]">
          {results.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {results.map((project, index) => (
                <div 
                  key={project.id} 
                  onClick={onClose}
                  className={`stagger-animation ${index < 4 ? 'visible' : ''}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 animate-fade-in">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">🔍</span>
              </div>
              <p className="text-gray-500 text-lg mb-2">
                No projects found matching your search.
              </p>
              <p className="text-gray-400 text-sm">
                Try searching with different keywords or browse our categories.
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default SearchResults;