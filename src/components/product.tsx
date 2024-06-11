import { Pressable, PressableProps, Text, StyleSheet } from 'react-native'

type Props = PressableProps & {
  name: string
  quantity: number
}

export function Product({ name, quantity, ...rest }: Props) {
  return (
    <Pressable {...rest} style={styles.container}>
      <Text>
        {quantity} - {name}
      </Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {},
})
