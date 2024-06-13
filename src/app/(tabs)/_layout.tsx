import { useRef } from 'react'
import { View } from 'react-native'
import { Tabs } from 'expo-router'
import { Foundation, Ionicons, FontAwesome5 } from '@expo/vector-icons'

export default function TabLayout() {
  return (
    <View style={{ flex: 1 }}>
      <Tabs
        screenOptions={{
          tabBarStyle: {
            backgroundColor: '#000',
            borderColor: '#000',
          },
          tabBarActiveTintColor: '#fff',
          tabBarInactiveTintColor: '#fff',
          headerShown: false,
          tabBarShowLabel: false,
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            tabBarIcon: ({ size, color }) => (
              <Foundation name="home" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="register"
          options={{
            tabBarIcon: ({ size, color }) => (
              <Ionicons name="add" size={size} color={color} />
            ),
          }}
        />
      </Tabs>
    </View>
  )
}
