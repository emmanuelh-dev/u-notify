import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

interface Avatar {
  id: string;
  image: any;
  name: string;
}

export default function AvatarSelectionScreen() {
  const [modalVisible, setModalVisible] = useState(true);

  const avatars: Avatar[] = [
    {
      id: '1',
      image: require('@/assets/images/perfil1.png'),
      name: 'FIME'
    },
    {
      id: '2',
      image: require('@/assets/images/perfil2.png'),
      name: 'Tigre'
    },
    {
      id: '3',
      image: require('@/assets/images/perfil3.png'),
      name: 'Phoenix'
    },
    {
      id: '4',
      image: require('@/assets/images/perfil4.png'),
      name: 'Unicornio'
    },
    {
      id: '5',
      image: require('@/assets/images/perfil5.png'),
      name: 'Dragón'
    },
    {
      id: '6',
      image: require('@/assets/images/perfil6.png'),
      name: 'Escudo'
    },
  ];

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Escoge tu avatar</Text>
              <TouchableOpacity 
                onPress={() => setModalVisible(false)}
                style={styles.closeButton}
              >
                <FontAwesome name="times-circle" size={24} color="#666" />
              </TouchableOpacity>
            </View>

            <View style={styles.avatarGrid}>
              {avatars.map((avatar) => (
                <TouchableOpacity 
                  key={avatar.id}
                  style={styles.avatarButton}
                  onPress={() => {
                    setModalVisible(false);
                  }}
                >
                  <Image source={avatar.image} style={styles.avatarImage} />
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    backgroundColor: '#4a148c',
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  menuButton: {
    padding: 5,
  },
  logo: {
    width: 120,
    height: 40,
    resizeMode: 'contain',
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  userName: {
    color: 'white',
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    width: '90%',
    maxHeight: '80%',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  closeButton: {
    padding: 5,
  },
  avatarGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    gap: 20,
  },
  avatarButton: {
    width: '30%',
    aspectRatio: 1,
    borderRadius: 75,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: '#ddd',
  },
  avatarImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
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
});