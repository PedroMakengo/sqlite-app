import { useState } from 'react'
import { View, Button, StyleSheet, Alert } from 'react-native'
import { Input } from '@/components/Input'

import { useProductDatabase } from '@/database/useProductDatabase'

export default function Index() {
  const [id, setId] = useState('')
  const [name, setName] = useState('')
  const [quantity, setQuantity] = useState('')
  const [products, setProducts] = useState([])

  const productDatabase = useProductDatabase()

  const create = async () => {
    try {
      if (isNaN(Number(quantity))) {
        return Alert.alert('Quantidade', 'A quantidade precisa ser um número!')
      }
      const response = await productDatabase.create({
        name,
        quantity: Number(quantity),
      })

      Alert.alert('Produto cadastrado com ID:' + response.insertedRowId)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <View style={styles.container}>
      <Input placeholder="Nome" onChangeText={setName} value={name} />
      <Input
        placeholder="Quantidade"
        onChangeText={setQuantity}
        value={quantity}
      />
      <Button title="Cadastrar" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 32,
    gap: 16,
  },
})
