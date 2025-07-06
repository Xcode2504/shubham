import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

export default function AboutScreen() {
  const stats = [
    { number: '15+', label: 'Years Experience', icon: 'calendar' },
    { number: '500+', label: 'Happy Clients', icon: 'people' },
    { number: '50+', label: 'Design Awards', icon: 'trophy' },
    { number: '1000+', label: 'Projects Completed', icon: 'checkmark-circle' },
  ];

  const values = [
    {
      title: 'Timeless Design',
      description: 'We believe in creating spaces that transcend trends, focusing on timeless elegance.',
    },
    {
      title: 'Quality Craftsmanship',
      description: 'Every piece reflects our commitment to exceptional quality and attention to detail.',
    },
    {
      title: 'Personalized Service',
      description: 'We work closely with each client to understand their unique vision.',
    },
    {
      title: 'Sustainable Practices',
      description: 'Environmental responsibility is at the heart of our design philosophy.',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Hero Section */}
        <View style={styles.heroSection}>
          <Image
            source={{
              uri: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800',
            }}
            style={styles.heroImage}
          />
          <View style={styles.heroContent}>
            <Text style={styles.heroTitle}>About Classic Interiors</Text>
            <Text style={styles.heroText}>
              Founded in 2010, Classic Interiors has been transforming spaces with timeless design 
              and exceptional craftsmanship. We believe that great design should not only be beautiful 
              but also functional, sustainable, and deeply personal.
            </Text>
          </View>
        </View>

        {/* Stats Section */}
        <View style={styles.statsSection}>
          <View style={styles.statsGrid}>
            {stats.map((stat, index) => (
              <View key={index} style={styles.statCard}>
                <Ionicons 
                  name={stat.icon as any} 
                  size={32} 
                  color="#f97316" 
                  style={styles.statIcon} 
                />
                <Text style={styles.statNumber}>{stat.number}</Text>
                <Text style={styles.statLabel}>{stat.label}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Story Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Our Story</Text>
          <Text style={styles.sectionText}>
            From humble beginnings to becoming a leading name in interior design, 
            our journey has been driven by passion, creativity, and an unwavering 
            commitment to excellence.
          </Text>
          
          <View style={styles.storyGrid}>
            <View style={styles.storyItem}>
              <Text style={styles.storyItemTitle}>The Beginning</Text>
              <Text style={styles.storyItemText}>
                Classic Interiors was born from a simple belief: that everyone deserves to live in 
                a space that inspires them. Our founders started with a small studio and big dreams.
              </Text>
            </View>
            
            <View style={styles.storyItem}>
              <Text style={styles.storyItemTitle}>Growing Success</Text>
              <Text style={styles.storyItemText}>
                Through word-of-mouth and our commitment to excellence, we quickly gained recognition 
                in the design community and our client base grew nationwide.
              </Text>
            </View>
            
            <View style={styles.storyItem}>
              <Text style={styles.storyItemTitle}>Award Recognition</Text>
              <Text style={styles.storyItemText}>
                Our innovative designs have earned us numerous industry awards, including the 
                prestigious Interior Design Excellence Award.
              </Text>
            </View>
            
            <View style={styles.storyItem}>
              <Text style={styles.storyItemTitle}>Looking Forward</Text>
              <Text style={styles.storyItemText}>
                Today, we continue to push boundaries in design while staying true to our core values, 
                exploring new materials and sustainable technologies.
              </Text>
            </View>
          </View>
        </View>

        {/* Values Section */}
        <View style={[styles.section, styles.valuesSection]}>
          <Text style={styles.sectionTitle}>Our Values</Text>
          <Text style={styles.sectionText}>
            These core principles guide everything we do, from the pieces we select 
            to the relationships we build with our clients.
          </Text>
          
          <View style={styles.valuesGrid}>
            {values.map((value, index) => (
              <View key={index} style={styles.valueCard}>
                <Text style={styles.valueTitle}>{value.title}</Text>
                <Text style={styles.valueDescription}>{value.description}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* CTA Section */}
        <View style={styles.ctaSection}>
          <Text style={styles.ctaTitle}>Meet Our Team</Text>
          <Text style={styles.ctaText}>
            Our talented designers bring diverse perspectives and expertise to every project.
          </Text>
          <TouchableOpacity
            style={styles.ctaButton}
            onPress={() => router.push('/designers')}
          >
            <Text style={styles.ctaButtonText}>View Our Designers</Text>
          </TouchableOpacity>
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
  heroSection: {
    paddingHorizontal: 20,
    paddingVertical: 24,
  },
  heroImage: {
    width: '100%',
    height: 200,
    borderRadius: 12,
    marginBottom: 20,
  },
  heroContent: {
    alignItems: 'center',
  },
  heroTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 16,
    textAlign: 'center',
  },
  heroText: {
    fontSize: 16,
    color: '#6b7280',
    lineHeight: 24,
    textAlign: 'center',
  },
  statsSection: {
    backgroundColor: '#f9fafb',
    paddingVertical: 32,
    paddingHorizontal: 20,
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 16,
  },
  statCard: {
    width: '47%',
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
  },
  statIcon: {
    marginBottom: 8,
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 14,
    color: '#6b7280',
    textAlign: 'center',
  },
  section: {
    paddingHorizontal: 20,
    paddingVertical: 32,
  },
  valuesSection: {
    backgroundColor: '#f9fafb',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1f2937',
    textAlign: 'center',
    marginBottom: 12,
  },
  sectionText: {
    fontSize: 16,
    color: '#6b7280',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 24,
  },
  storyGrid: {
    gap: 20,
  },
  storyItem: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 12,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
  },
  storyItemTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 8,
  },
  storyItemText: {
    fontSize: 14,
    color: '#6b7280',
    lineHeight: 20,
  },
  valuesGrid: {
    gap: 16,
  },
  valueCard: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 12,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
  },
  valueTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 8,
  },
  valueDescription: {
    fontSize: 14,
    color: '#6b7280',
    lineHeight: 20,
  },
  ctaSection: {
    backgroundColor: '#f97316',
    marginHorizontal: 20,
    marginBottom: 20,
    padding: 24,
    borderRadius: 12,
    alignItems: 'center',
  },
  ctaTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 8,
  },
  ctaText: {
    fontSize: 16,
    color: '#fed7aa',
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 20,
  },
  ctaButton: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },
  ctaButtonText: {
    color: '#f97316',
    fontSize: 16,
    fontWeight: '600',
  },
});