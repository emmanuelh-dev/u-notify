import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable } from 'react-native';
import { Text, View } from '@/components/Themed';
import { StyleSheet, Image } from 'react-native';
import Constants from 'expo-constants';

import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';
import { Calendar, HelpCircle, Home, House, Search, Settings } from 'lucide-react-native';

function TabBarIcon(props: any) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('@/assets/images/logo.png')} style={styles.logo} />
        <Text style={styles.title}>U-Notify</Text>
        <Image source={require('@/assets/images/perfil1.png')} style={styles.userIcon} />
      </View>

      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
          headerShown: useClientOnlyValue(false, true),
        }}
      >
        <Tabs.Screen
          name="config"
          options={{
            title: 'Configuración',
            tabBarIcon: ({ color }) => <Settings style={{ marginRight: 15 }}
            />,
          }}
        />
        <Tabs.Screen
          name="search"
          options={{
            title: 'Buscar',
            tabBarIcon: ({ color }) => <Search style={{ marginRight: 15 }}
            />,
          }}
        />
        <Tabs.Screen
          name="index"
          options={{
            title: 'Inicio',
            tabBarIcon: ({ color }) => <Home style={{ marginRight: 15 }}
            />,
          }}
        />
        <Tabs.Screen
          name="calendar"
          options={{
            title: 'Calendario',
            tabBarIcon: ({ color }) => <Calendar style={{ marginRight: 15 }}
            />,
          }}
        />
        <Tabs.Screen
          name="help"
          options={{
            title: 'Ayuda',
            tabBarIcon: ({ color }) => <HelpCircle style={{ marginRight: 15 }}
            />,
          }}
        />
      </Tabs>
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
    paddingTop: Constants.statusBarHeight + 10,
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
});
