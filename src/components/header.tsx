import { StyleSheet, Text, View } from 'react-native'

export function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>SQlite App</Text>
      <Text style={styles.textDescription}>
        Desenvolvendo um app Crud SQlite
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: 130,
    justifyContent: 'center',
    padding: 32,
  },
  textTitle: {
    fontSize: 24,
    color: '#000',
  },
  textDescription: {
    fontSize: 14,
  },
})
