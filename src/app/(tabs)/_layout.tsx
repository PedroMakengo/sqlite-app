import { useRef } from 'react'
import { View } from 'react-native'
import { Tabs } from 'expo-router'
import { Foundation, Ionicons, FontAwesome5 } from '@expo/vector-icons'
import { Header } from '../../components/header'

export default function TabLayout() {
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <Tabs
        screenOptions={{
          tabBarStyle: {
            backgroundColor: '#fff',
            borderColor: '#fff',
          },
          tabBarActiveTintColor: '#000',
          tabBarInactiveTintColor: '#0000007a',
          headerShown: false,
        }}
      >
        {/* tabBarShowLabel: false, */}
        <Tabs.Screen
          name="index"
          options={{
            tabBarIcon: ({ size, color }) => (
              <Foundation name="home" size={size} color={color} />
            ),
            tabBarLabel: 'Home',
          }}
        />
        <Tabs.Screen
          name="register"
          options={{
            tabBarIcon: ({ size, color }) => (
              <Ionicons name="add" size={size} color={color} />
            ),
            tabBarLabel: 'Register',
          }}
        />
      </Tabs>
    </View>
  )
}
