import { useState } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import {
  ProductDatabase,
  useProductDatabase,
} from '@/database/useProductDatabase'
import { Input } from '@/components/Input'

export default function Register() {
  const [id, setId] = useState('')
  const [name, setName] = useState('')
  const [quantity, setQuantity] = useState('')
  const [search, setSearch] = useState('')
  const [products, setProducts] = useState<ProductDatabase[]>([])

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

  const update = async () => {
    try {
      if (isNaN(Number(quantity))) {
        return Alert.alert('Quantidade', 'A quantidade precisa ser um número!')
      }
      const response = await productDatabase.update({
        id: Number(id),
        name,
        quantity: Number(quantity),
      })

      Alert.alert('Produto atualizado!')
    } catch (error) {
      console.log(error)
    }
  }

  // TODO

  const list = async () => {
    try {
      const response = await productDatabase.searchByName(search)
      setProducts(response)
    } catch (error) {
      console.log(error)
    }
  }

  async function handleSave() {
    if (id) {
      update()
    } else {
      create()
    }

    setId('')
    setName('')
    setQuantity('')
    await list()
  }

  return (
    <View style={styles.container}>
      <Input placeholder="Nome" onChangeText={setName} value={name} />
      <Input
        placeholder="Quantidade"
        onChangeText={setQuantity}
        value={quantity}
      />
      <Button title="Cadastrar" onPress={handleSave} />
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
