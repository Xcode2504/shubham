import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

const categories = [
  {
    id: 'lighting',
    title: 'Lighting',
    description: 'Illuminate your space with our curated collection of modern and classic lighting solutions.',
    image: 'https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg?auto=compress&cs=tinysrgb&w=600',
    projectCount: 15,
  },
  {
    id: 'furniture',
    title: 'Furniture',
    description: 'Discover furniture pieces that combine comfort, style, and exceptional craftsmanship.',
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600',
    projectCount: 22,
  },
  {
    id: 'decor',
    title: 'Decor',
    description: 'Add the perfect finishing touches with our carefully selected decorative elements.',
    image: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=600',
    projectCount: 18,
  },
];

export default function CategoriesScreen() {
  const handleCategoryPress = (categoryId: string) => {
    router.push(`/category/${categoryId}`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.title}>Our Collections</Text>
          <Text style={styles.subtitle}>
            Explore our carefully curated categories of interior design elements
          </Text>
        </View>

        <View style={styles.categoriesContainer}>
          {categories.map((category) => (
            <TouchableOpacity
              key={category.id}
              style={styles.categoryCard}
              onPress={() => handleCategoryPress(category.id)}
              activeOpacity={0.8}
            >
              <Image source={{ uri: category.image }} style={styles.categoryImage} />
              <View style={styles.categoryOverlay}>
                <View style={styles.categoryContent}>
                  <Text style={styles.categoryTitle}>{category.title}</Text>
                  <Text style={styles.categoryDescription}>{category.description}</Text>
                  <View style={styles.projectCount}>
                    <Text style={styles.projectCountText}>
                      {category.projectCount} Projects
                    </Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* Featured Section */}
        <View style={styles.featuredSection}>
          <Text style={styles.featuredTitle}>Why Choose Our Collections?</Text>
          <View style={styles.featuredGrid}>
            <View style={styles.featuredItem}>
              <Text style={styles.featuredItemTitle}>Curated Selection</Text>
              <Text style={styles.featuredItemText}>
                Every piece is carefully selected for quality and design excellence
              </Text>
            </View>
            <View style={styles.featuredItem}>
              <Text style={styles.featuredItemTitle}>Expert Designers</Text>
              <Text style={styles.featuredItemText}>
                Created by our team of experienced interior design professionals
              </Text>
            </View>
            <View style={styles.featuredItem}>
              <Text style={styles.featuredItemTitle}>Timeless Style</Text>
              <Text style={styles.featuredItemText}>
                Designs that transcend trends and remain beautiful for years
              </Text>
            </View>
            <View style={styles.featuredItem}>
              <Text style={styles.featuredItemTitle}>Quality Materials</Text>
              <Text style={styles.featuredItemText}>
                Premium materials and craftsmanship in every piece
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 24,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#6b7280',
    textAlign: 'center',
    lineHeight: 22,
  },
  categoriesContainer: {
    paddingHorizontal: 20,
    gap: 20,
  },
  categoryCard: {
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    backgroundColor: '#ffffff',
  },
  categoryImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  categoryOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    padding: 20,
  },
  categoryContent: {
    alignItems: 'flex-start',
  },
  categoryTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 8,
  },
  categoryDescription: {
    fontSize: 14,
    color: '#e5e7eb',
    lineHeight: 20,
    marginBottom: 12,
  },
  projectCount: {
    backgroundColor: '#f97316',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  projectCountText: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: '600',
  },
  featuredSection: {
    backgroundColor: '#f9fafb',
    marginTop: 32,
    paddingHorizontal: 20,
    paddingVertical: 32,
  },
  featuredTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1f2937',
    textAlign: 'center',
    marginBottom: 24,
  },
  featuredGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
  },
  featuredItem: {
    width: '47%',
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 8,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
  },
  featuredItemTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 8,
  },
  featuredItemText: {
    fontSize: 14,
    color: '#6b7280',
    lineHeight: 18,
  },
});