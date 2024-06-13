import {
  Pressable,
  PressableProps,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

type Props = PressableProps & {
  name: string
  quantity: number
  onDelete: () => void
  onOpen: () => void
}

export function Product({ name, quantity, onDelete, onOpen, ...rest }: Props) {
  return (
    <Pressable {...rest} style={styles.container}>
      <Text style={styles.text}>
        {quantity} - {name}
      </Text>

      <TouchableOpacity onPress={onOpen}>
        <MaterialIcons name="visibility" size={24} color="blue" />
      </TouchableOpacity>

      <TouchableOpacity onPress={onDelete}>
        <MaterialIcons name="delete" size={24} color="red" />
      </TouchableOpacity>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#cecece',
    padding: 24,
    borderRadius: 5,
    gap: 12,
    flexDirection: 'row',
  },
  text: {
    flex: 1,
  },
})
