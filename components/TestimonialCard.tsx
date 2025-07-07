import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

type Testimonial = {
  name: string;
  role: string;
  content: string;
  image: string;
  date: string;
};

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.content}>"{testimonial.content}"</Text>
      <View style={styles.footer}>
        {testimonial.image ? (
          <Image source={{ uri: testimonial.image }} style={styles.avatar} />
        ) : (
          <View style={styles.avatarPlaceholder} />
        )}
        <View>
          <Text style={styles.name}>{testimonial.name}</Text>
          <Text style={styles.role}>{testimonial.role}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    marginHorizontal: 16,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 4,
  },
  content: {
    fontSize: 16,
    fontStyle: 'italic',
    marginBottom: 12,
    color: '#333',
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  avatarPlaceholder: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#ccc',
    marginRight: 12,
  },
  name: {
    fontWeight: '600',
    fontSize: 14,
  },
  role: {
    fontSize: 12,
    color: '#777',
  },
});

export default TestimonialCard;
