import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

// Mock data for search
const mockProjects: Project[] = [
  {
    id: '1',
    title: 'Modern Pendant Collection',
    category: 'lighting',
    excerpt: 'Sleek pendant lights that transform any space with contemporary elegance.',
    image: 'https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg?auto=compress&cs=tinysrgb&w=400',
    designer: 'Sarah Mitchell',
  },
  {
    id: '2',
    title: 'Scandinavian Dining Set',
    category: 'furniture',
    excerpt: 'Clean lines and natural wood create the perfect dining experience.',
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400',
    designer: 'Erik Nordström',
  },
  {
    id: '3',
    title: 'Botanical Wall Art Series',
    category: 'decor',
    excerpt: 'Bring nature indoors with our curated botanical artwork collection.',
    image: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=400',
    designer: 'Maria Rodriguez',
  },
];

export default function SearchScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);


  useEffect(() => {
    if (searchQuery.trim()) {
      setIsSearching(true);
      // Simulate search delay
      const timer = setTimeout(() => {
        const results = mockProjects.filter((project) =>
          project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          project.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
          project.designer.toLowerCase().includes(searchQuery.toLowerCase()) ||
          project.category.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setSearchResults(results);  // This now works because the state is correctly typed
        setIsSearching(false);
      }, 300);

      return () => clearTimeout(timer);
    } else {
      setSearchResults([]);  // Empty the results when searchQuery is empty
      setIsSearching(false);
    }
  }, [searchQuery]);

  const handleProjectPress = (projectId: string) => {
    router.push(`/project/${projectId}`);
  };

  const clearSearch = () => {
    setSearchQuery('');
    setSearchResults([]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        <View style={styles.searchInputContainer}>
          <Ionicons name="search" size={20} color="#6b7280" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            value={searchQuery}
            onChangeText={setSearchQuery}
            placeholder="Search projects, designers, categories..."
            placeholderTextColor="#9ca3af"
            autoFocus
          />
          {searchQuery.length > 0 && (
            <TouchableOpacity onPress={clearSearch} style={styles.clearButton}>
              <Ionicons name="close-circle" size={20} color="#6b7280" />
            </TouchableOpacity>
          )}
        </View>
      </View>

      <ScrollView style={styles.resultsContainer} showsVerticalScrollIndicator={false}>
        {isSearching ? (
          <View style={styles.loadingContainer}>
            <Text style={styles.loadingText}>Searching...</Text>
          </View>
        ) : searchQuery.trim() && searchResults.length === 0 ? (
          <View style={styles.noResultsContainer}>
            <Ionicons name="search" size={48} color="#d1d5db" />
            <Text style={styles.noResultsTitle}>No results found</Text>
            <Text style={styles.noResultsText}>
              Try searching with different keywords or browse our categories.
            </Text>
          </View>
        ) : searchResults.length > 0 ? (
          <>
            <View style={styles.resultsHeader}>
              <Text style={styles.resultsCount}>
                {searchResults.length} {searchResults.length === 1 ? 'result' : 'results'} for "{searchQuery}"
              </Text>
            </View>
            
            <View style={styles.resultsList}>
              {searchResults.map((project) => (
                <TouchableOpacity
                  key={project.id}
                  style={styles.resultCard}
                  onPress={() => handleProjectPress(project.id)}
                  activeOpacity={0.8}
                >
                  <Image source={{ uri: project.image }} style={styles.resultImage} />
                  <View style={styles.resultContent}>
                    <View style={styles.categoryBadge}>
                      <Text style={styles.categoryBadgeText}>{project.category}</Text>
                    </View>
                    <Text style={styles.resultTitle}>{project.title}</Text>
                    <Text style={styles.resultExcerpt} numberOfLines={2}>
                      {project.excerpt}
                    </Text>
                    <Text style={styles.resultDesigner}>By {project.designer}</Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </>
        ) : (
          <View style={styles.suggestionsContainer}>
            <Text style={styles.suggestionsTitle}>Popular Searches</Text>
            <View style={styles.suggestionsList}>
              {['Modern lighting', 'Scandinavian furniture', 'Botanical decor', 'Sarah Mitchell', 'Industrial design'].map((suggestion, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.suggestionItem}
                  onPress={() => setSearchQuery(suggestion)}
                >
                  <Ionicons name="trending-up" size={16} color="#6b7280" />
                  <Text style={styles.suggestionText}>{suggestion}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  searchContainer: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  searchInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9fafb',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#1f2937',
    paddingVertical: 4,
  },
  clearButton: {
    marginLeft: 8,
  },
  resultsContainer: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 100,
  },
  loadingText: {
    fontSize: 16,
    color: '#6b7280',
  },
  noResultsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
    paddingTop: 100,
  },
  noResultsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1f2937',
    marginTop: 16,
    marginBottom: 8,
  },
  noResultsText: {
    fontSize: 16,
    color: '#6b7280',
    textAlign: 'center',
    lineHeight: 22,
  },
  resultsHeader: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f3f4f6',
  },
  resultsCount: {
    fontSize: 16,
    color: '#6b7280',
    fontWeight: '500',
  },
  resultsList: {
    paddingHorizontal: 20,
    paddingTop: 16,
    gap: 16,
  },
  resultCard: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  resultImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 12,
  },
  resultContent: {
    flex: 1,
    justifyContent: 'center',
  },
  categoryBadge: {
    backgroundColor: '#f97316',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 8,
    alignSelf: 'flex-start',
    marginBottom: 6,
  },
  categoryBadgeText: {
    color: '#ffffff',
    fontSize: 10,
    fontWeight: '600',
    textTransform: 'capitalize',
  },
  resultTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 4,
  },
  resultExcerpt: {
    fontSize: 14,
    color: '#6b7280',
    lineHeight: 18,
    marginBottom: 4,
  },
  resultDesigner: {
    fontSize: 12,
    color: '#9ca3af',
    fontWeight: '500',
  },
  suggestionsContainer: {
    paddingHorizontal: 20,
    paddingTop: 32,
  },
  suggestionsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 16,
  },
  suggestionsList: {
    gap: 12,
  },
  suggestionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: '#f9fafb',
    borderRadius: 8,
    gap: 12,
  },
  suggestionText: {
    fontSize: 16,
    color: '#374151',
  },
});
