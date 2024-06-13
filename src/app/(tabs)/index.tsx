import { useEffect, useState } from 'react'
import { View, Button, StyleSheet, Alert, FlatList } from 'react-native'
import { Input } from '@/components/Input'
import { router } from 'expo-router'

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

  const list = async () => {
    try {
      const response = await productDatabase.searchByName(search)
      setProducts(response)
    } catch (error) {
      console.log(error)
    }
  }

  const remove = async (id: number) => {
    try {
      await productDatabase.remove(id)
      list()
    } catch (error) {
      throw error
    }
  }

  function details(item: ProductDatabase) {
    setId(String(item.id))
    setName(item.name)
    setQuantity(String(item.quantity))
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
      <Button title="Cadastrar" onPress={handleSave} />

      <Input placeholder="Pesquisar" onChangeText={setSearch} />

      <FlatList
        data={products}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <Product
            quantity={item.quantity}
            name={item.name}
            onPress={() => details(item)}
            onOpen={() => router.navigate('/details/' + item.id)}
            onDelete={() => remove(Number(item.id))}
          />
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
