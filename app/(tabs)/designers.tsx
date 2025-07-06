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

const designers = [
  {
    id: '1',
    name: 'Sarah Mitchell',
    bio: 'Sarah Mitchell is a renowned lighting designer with over 15 years of experience in creating atmospheric lighting solutions.',
    image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=400',
    specialty: 'Lighting Design',
    projectCount: 12,
  },
  {
    id: '2',
    name: 'Erik Nordström',
    bio: 'Erik brings the essence of Scandinavian design to furniture creation, specializing in sustainable, minimalist furniture.',
    image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=400',
    specialty: 'Furniture Design',
    projectCount: 18,
  },
  {
    id: '3',
    name: 'Maria Rodriguez',
    bio: 'Maria is a curator and interior stylist who specializes in botanical and nature-inspired decor.',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
    specialty: 'Decor & Styling',
    projectCount: 15,
  },
  {
    id: '4',
    name: 'James Chen',
    bio: 'James Chen combines industrial heritage with modern innovation in his lighting designs.',
    image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=400',
    specialty: 'Industrial Design',
    projectCount: 10,
  },
  {
    id: '5',
    name: 'Isabella Laurent',
    bio: 'Isabella Laurent is a luxury furniture designer known for her attention to detail and use of premium materials.',
    image: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=400',
    specialty: 'Luxury Furniture',
    projectCount: 14,
  },
  {
    id: '6',
    name: 'David Kim',
    bio: 'David Kim is a ceramic artist and designer who creates functional art pieces.',
    image: 'https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=400',
    specialty: 'Ceramic Art',
    projectCount: 8,
  },
];

export default function DesignersScreen() {
  const handleDesignerPress = (designerId: string) => {
    router.push(`/designer/${designerId}`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.title}>Our Designers</Text>
          <Text style={styles.subtitle}>
            Meet the talented designers behind our exceptional projects
          </Text>
        </View>

        <View style={styles.designersContainer}>
          {designers.map((designer) => (
            <TouchableOpacity
              key={designer.id}
              style={styles.designerCard}
              onPress={() => handleDesignerPress(designer.id)}
              activeOpacity={0.8}
            >
              <Image source={{ uri: designer.image }} style={styles.designerImage} />
              <View style={styles.designerInfo}>
                <Text style={styles.designerName}>{designer.name}</Text>
                <Text style={styles.designerSpecialty}>{designer.specialty}</Text>
                <Text style={styles.designerBio} numberOfLines={3}>
                  {designer.bio}
                </Text>
                <View style={styles.designerStats}>
                  <Text style={styles.projectCount}>
                    {designer.projectCount} Projects
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* Call to Action */}
        <View style={styles.ctaSection}>
          <Text style={styles.ctaTitle}>Work With Our Team</Text>
          <Text style={styles.ctaText}>
            Ready to transform your space? Our talented designers are here to bring your vision to life.
          </Text>
          <TouchableOpacity
            style={styles.ctaButton}
            onPress={() => router.push('/contact')}
          >
            <Text style={styles.ctaButtonText}>Get Consultation</Text>
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
  designersContainer: {
    paddingHorizontal: 20,
    gap: 16,
  },
  designerCard: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  designerImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 16,
  },
  designerInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  designerName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 4,
  },
  designerSpecialty: {
    fontSize: 14,
    color: '#f97316',
    fontWeight: '600',
    marginBottom: 8,
  },
  designerBio: {
    fontSize: 14,
    color: '#6b7280',
    lineHeight: 18,
    marginBottom: 8,
  },
  designerStats: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  projectCount: {
    fontSize: 12,
    color: '#9ca3af',
    fontWeight: '500',
  },
  ctaSection: {
    backgroundColor: '#f97316',
    marginHorizontal: 20,
    marginTop: 32,
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