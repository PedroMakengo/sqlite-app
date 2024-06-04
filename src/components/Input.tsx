import { StyleSheet, TextInput, TextInputProps } from 'react-native'
export function Input({ ...rest }: TextInputProps) {
  return <TextInput {...rest} style={styles.container} />
}

const styles = StyleSheet.create({
  container: {
    height: 54,
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 7,
    paddingHorizontal: 16,
  },
})
