import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import FeaturedCategories from '../../components/FeaturedCategories.tsx';
import ProjectCarousel from '../../components/ProjectCarousel.tsx';
import TestimonialCard from '../../components/TestimonialCard.tsx';

const { width } = Dimensions.get('window');

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Hero Section */}
        <ImageBackground
          source={{
            uri: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
          }}
          style={styles.hero}
          imageStyle={styles.heroImage}
        >
          <View style={styles.heroOverlay}>
            <View style={styles.heroContent}>
              <Text style={styles.heroTitle}>Welcome to{'\n'}Classic Interiors</Text>
              <Text style={styles.heroSubtitle}>
                Transforming spaces with timeless design and exceptional craftsmanship
              </Text>
              <View style={styles.heroButtons}>
                <TouchableOpacity
                  style={styles.primaryButton}
                  onPress={() => router.push('/categories')}
                >
                  <Text style={styles.primaryButtonText}>Explore Projects</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.secondaryButton}
                  onPress={() => router.push('/contact')}
                >
                  <Text style={styles.secondaryButtonText}>Get Consultation</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ImageBackground>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <TouchableOpacity
            style={styles.searchBar}
            onPress={() => router.push('/search')}
          >
            <Ionicons name="search" size={20} color="#6b7280" />
            <Text style={styles.searchPlaceholder}>Search projects, designers...</Text>
          </TouchableOpacity>
        </View>

        {/* Featured Categories */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Explore Our Collections</Text>
          <Text style={styles.sectionSubtitle}>
            Discover our carefully curated categories of interior design elements
          </Text>
          <FeaturedCategories />
        </View>

        {/* Recent Projects */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recent Projects</Text>
          <Text style={styles.sectionSubtitle}>
            Explore our latest interior design projects
          </Text>
          <ProjectCarousel />
        </View>

        {/* Testimonials */}
        <View style={[styles.section, styles.testimonialsSection]}>
          <Text style={styles.sectionTitle}>What Our Clients Say</Text>
          <Text style={styles.sectionSubtitle}>
            Hear from those who have experienced the Classic Interiors difference
          </Text>
          <TestimonialCard />
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
  hero: {
    height: 400,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heroImage: {
    resizeMode: 'cover',
  },
  heroOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heroContent: {
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  heroTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 12,
    lineHeight: 38,
  },
  heroSubtitle: {
    fontSize: 16,
    color: '#e5e7eb',
    textAlign: 'center',
    marginBottom: 24,
    lineHeight: 22,
    paddingHorizontal: 20,
  },
  heroButtons: {
    flexDirection: 'column',
    gap: 12,
    width: '100%',
    maxWidth: 280,
  },
  primaryButton: {
    backgroundColor: '#f97316',
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
  },
  primaryButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#ffffff',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
  },
  secondaryButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  searchContainer: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: '#f9fafb',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e5e7eb',
    gap: 12,
  },
  searchPlaceholder: {
    color: '#6b7280',
    fontSize: 16,
    flex: 1,
  },
  section: {
    paddingHorizontal: 20,
    paddingVertical: 24,
  },
  testimonialsSection: {
    backgroundColor: '#f9fafb',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1f2937',
    textAlign: 'center',
    marginBottom: 8,
  },
  sectionSubtitle: {
    fontSize: 16,
    color: '#6b7280',
    textAlign: 'center',
    marginBottom: 24,
    lineHeight: 22,
  },
});