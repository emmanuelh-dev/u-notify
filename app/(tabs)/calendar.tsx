import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function MapScreen() {
  const events = [
    {
      id: '1',
      image: require('@/assets/images/Evento1.jpg'),
      title: 'Bol Mexicano',
      time: '15:15 PM',
      location: 'Mexico City'
    },
    {
      id: '2',
      image: require('@/assets/images/Evento2.jpg'),
      title: 'Sovietbol',
      time: '16:15 PM',
      location: 'Moscow'
    },
    {
      id: '3',
      image: require('@/assets/images/Evento3.jpg'),
      title: 'Futbol Varonil',
      time: '20:00 PM',
      location: 'Madrid'
    },
  ];

  return (
    <View style={styles.container}>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.carouselContainer}
      >
        {events.map((event) => (
          <TouchableOpacity 
            key={event.id} 
            style={styles.eventCard}
          >
            <Image source={event.image} style={styles.eventImage} />
            <View style={styles.eventInfo}>
              <Text style={styles.eventTitle}>{event.title}</Text>
              <Text style={styles.eventTime}>{event.time}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Map Section */}
      <View style={styles.mapContainer}>
      {/* Show an image instead of a map */}
      <Image source={require('@/assets/images/Mapa1.png')} style={styles.map} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#1a237e',
  },
  logo: {
    width: 120,
    height: 30,
    resizeMode: 'contain',
  },
  profileButton: {
    padding: 5,
  },
  carouselContainer: {
    padding: 10,
    maxHeight: 180,
  },
  eventCard: {
    width: 150,
    marginRight: 10,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#FFF',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  eventImage: {
    width: '100%',
    height: 100,
    resizeMode: 'cover',
  },
  eventInfo: {
    padding: 10,
  },
  eventTitle: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  eventTime: {
    fontSize: 12,
    color: '#666',
  },
  mapContainer: {
    flex: 1,
    margin: 10,
    borderRadius: 10,
    overflow: 'hidden',
  },
  map: {
    flex: 1,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 15,
    backgroundColor: '#FFF',
    borderTopWidth: 1,
    borderTopColor: '#EEE',
  },
  navButton: {
    padding: 5,
  },
  infoBox: {
    position: 'absolute',
    top: '50%',
    left: 20,
    right: 20,
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#000',
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  infoDescription: {
    fontSize: 14,
  },
});