import { useEffect, useState } from 'react'
import {
  View,
  Button,
  StyleSheet,
  Alert,
  FlatList,
  Pressable,
} from 'react-native'
import { Input } from '@/components/Input'

import {
  useProductDatabase,
  ProductDatabase,
} from '@/database/useProductDatabase'
import { Product } from '@/components/product'

export default function Index() {
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

      list()

      Alert.alert('Produto cadastrado com ID:' + response.insertedRowId)
    } catch (error) {
      console.log(error)
    }
  }

  const list = async () => {
    try {
      const response = await productDatabase.searchByName(search)
      setProducts(response)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    list()
  }, [search])

  return (
    <View style={styles.container}>
      <Input placeholder="Nome" onChangeText={setName} value={name} />
      <Input
        placeholder="Quantidade"
        onChangeText={setQuantity}
        value={quantity}
      />
      <Button title="Cadastrar" onPress={create} />

      <Input placeholder="Pesquisar" onChangeText={setSearch} />

      <FlatList
        data={products}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <Product quantity={item.quantity} name={item.name} />
        )}
        contentContainerStyle={{ gap: 16 }}
      />
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
