import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const CheckUser = () => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    const checkUser = async () => {
      try {
        const storedUser = await AsyncStorage.getItem('user');
        if (storedUser) {
          setUser(JSON.parse(storedUser));  // Si hay usuario, parsearlo
        } else {
          setUser(null);  // Si no hay usuario, null
        }
      } catch (error) {
        console.log('Error checking user:', error);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    checkUser();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (user) {
    // Si hay usuario, navega a la pantalla principal
    navigation.replace('Home');  // Ajusta a la pantalla principal de tu app
    return null;
  } else {
    // Si no hay usuario, redirige al registro
    navigation.replace('Register');  // Ajusta al nombre de tu pantalla de registro
    return null;
  }
};

export default CheckUser;
