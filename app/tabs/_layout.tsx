import React from 'react';
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const TabsLayout = () => {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Log In',
          tabBarIcon: ({ color, size }) => <Ionicons  size={28} name="home-outline" color={color} />,
        }}
      />
      <Tabs.Screen
        name="productos/index"
        options={{
          title:'Sing Out',
          tabBarIcon: ({ color }) => <Ionicons size={28} name="film-outline" color={color} />,
        }}
      />
      <Tabs.Screen
        name="configuracion/index"
        options={{
          title: 'Datos',
          tabBarIcon: ({ color }) => <Ionicons size={28} name="construct-outline" color={color} />,
        }}
      />
    </Tabs>
  )
}

export default TabsLayout
