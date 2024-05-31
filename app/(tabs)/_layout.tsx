import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      initialRouteName='Study'
      screenOptions={{
        tabBarStyle: {backgroundColor: "#2F3548", borderTopWidth: 0,},
        headerStyle: {backgroundColor: "#2F3548", },
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: true,
      }}>
      <Tabs.Screen
        name="Study"
        options={{
          title: 'Study',
          headerTintColor: "#FFF",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'language' : 'language-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Quiz"
        options={{
          title: 'Quiz',
          headerTintColor: "#FFF",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'book' : 'book-outline'} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
