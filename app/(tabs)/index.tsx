import { events } from '@/data/events';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';

export default function TabOneScreen() {
  const [showAllEvents, setShowAllEvents] = useState(false);


  const visibleEvents = showAllEvents ? events : events.slice(0, 2);

  return (
    <View style={styles.container}>

      <ScrollView contentContainerStyle={styles.content}>
        {visibleEvents.map((event) => (
          <View key={event.id} style={styles.card}>
            <Image source={event.image} style={styles.cardImage} />
            <Text style={styles.cardText}>{event.title}</Text>
            <Text style={styles.cardSubtext}>{event.date}</Text>
          </View>
        ))}
      </ScrollView>

      <View style={styles.arrowContainer}>
        <TouchableOpacity onPress={() => setShowAllEvents(!showAllEvents)}>
          <Text style={styles.arrow}>{showAllEvents ? '▲' : '▼'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#6A1B9A',
  },
  logo: {
    width: 40,
    height: 40,
  },
  title: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
  },
  userIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  content: {
    padding: 10,
  },
  card: {
    marginBottom: 15,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#fff',
    elevation: 3,
  },
  cardImage: {
    width: '100%',
    height: 150,
  },
  cardText: {
    fontSize: 18,
    fontWeight: 'bold',
    padding: 10,
    color: '#333',
  },
  cardSubtext: {
    fontSize: 14,
    color: '#666',
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  arrowContainer: {
    alignItems: 'center',
    marginVertical: 10,
  },
  arrow: {
    fontSize: 20,
    color: '#333',
  },
});
