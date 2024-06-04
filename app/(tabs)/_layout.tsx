
import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from "@/components/navigation/TabBarIcon";

export default function TabLayout() {

  return (
    <Tabs
      initialRouteName='Study'
      screenOptions={{
        tabBarStyle: {backgroundColor: "#393E46", borderTopWidth: 0,},
        headerStyle: {backgroundColor: "#393E46", },
        tabBarActiveTintColor: "#00ADB5",
        headerShown: true,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Study',
          headerTintColor: "#EEE",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'language' : 'language-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Quiz"
        options={{
          title: 'Quiz',
          headerTintColor: "#EEE",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'book' : 'book-outline'} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
