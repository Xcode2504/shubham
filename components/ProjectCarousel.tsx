import React from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';

const projects = [
  { id: '1', title: 'Modern Living Room', image: 'https://via.placeholder.com/150' },
  { id: '2', title: 'Luxury Bedroom', image: 'https://via.placeholder.com/150' },
  { id: '3', title: 'Office Setup', image: 'https://via.placeholder.com/150' },
];

const ProjectCarousel = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Our Projects</Text>
      <FlatList
        horizontal
        data={projects}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.title}>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    marginTop: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 10,
  },
  card: {
    marginRight: 12,
    width: 150,
  },
  image: {
    width: '100%',
    height: 100,
    borderRadius: 8,
    backgroundColor: '#ccc',
  },
  title: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: '500',
  },
});

export default ProjectCarousel;
