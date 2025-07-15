import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const categories = ['Living Room', 'Bedroom', 'Office', 'Dining', 'Outdoor'];

const FeaturedCategories = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Featured Categories</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {categories.map((category, index) => (
          <TouchableOpacity key={index} style={styles.categoryBox}>
            <Text style={styles.categoryText}>{category}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 12,
  },
  categoryBox: {
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginRight: 10,
  },
  categoryText: {
    fontSize: 16,
    color: '#333',
  },
});

export default FeaturedCategories;
