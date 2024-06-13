import { StyleSheet, Text, View } from 'react-native'

export function Header() {
  return (
    <View style={styles.container}>
      <Text>Slite App</Text>
      <Text>Desenvolvendo um app Crud Slite</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {},
  textTitle: {},
  textDescription: {},
})
