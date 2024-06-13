import { useEffect } from 'react'
import { router } from 'expo-router'
import { StyleSheet, Text, View } from 'react-native'

export default function Index() {
  function onEndSplash() {
    setTimeout(() => {
      router.push('/(tabs)')
    }, 200)
  }

  useEffect(() => {
    onEndSplash()
  }, [])

  return (
    <View style={styles.container}>
      <Text>Tela Inicial</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
