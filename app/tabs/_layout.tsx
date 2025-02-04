import React from 'react';
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const TabsLayout = () => {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Sign Out',
          tabBarIcon: ({ color, size }) => <Ionicons size={28} name="home-outline" color={color} />,
        }}
      />
      <Tabs.Screen
        name="datos/index"
        options={{
          title: 'Datos',
          tabBarIcon: ({ color }) => <Ionicons size={28} name="document-text-outline" color={color} />,
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;

