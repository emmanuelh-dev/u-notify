// SearchScreen.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function SearchScreen() {
  const [searchText, setSearchText] = useState<string>('');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <FontAwesome name="search" size={20} color="black" />
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar eventos"
          value={searchText}
          onChangeText={setSearchText}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 8,
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    height: 40,
    marginLeft: 10,
  },
  infoBox: {
    padding: 15,
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: '#FFF',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
  },
});
