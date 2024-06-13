import { useState, useEffect } from 'react'
import { router, useLocalSearchParams } from 'expo-router'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { useProductDatabase } from '../../database/useProductDatabase'

export default function Details() {
  const params = useLocalSearchParams<{ id: string }>()
  const [data, setData] = useState({
    name: '',
    quantity: 0,
  })

  const productDatabase = useProductDatabase()
  useEffect(() => {
    if (params.id) {
      productDatabase.show(Number(params.id)).then((response) => {
        if (response) {
          setData({
            name: response.name,
            quantity: response.quantity,
          })
        }
      })
    }
  }, [params.id])

  return (
    <View style={styles.container}>
      <Text style={styles.text}>ID: {params.id}</Text>
      <Text style={styles.text}>Quantidade: {data.quantity}</Text>
      <Text style={styles.text}>Nome: {data.name}</Text>

      <Pressable style={styles.btnVoltar} onPress={() => router.navigate('/')}>
        <Text>Voltar</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 32,
  },
  btnVoltar: {
    marginTop: 30,
  },
})
