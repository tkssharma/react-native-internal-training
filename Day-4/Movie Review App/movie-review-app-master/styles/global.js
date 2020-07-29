import { StyleSheet } from 'react-native';


export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  textTitle: {
    fontFamily: 'opensans-bold',
    fontSize: 18,
    color: '#333'
  },
  paragraph: {
    marginVertical: 8,
    lineHeight: 20
  },
  input:{
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    fontSize: 18,
    borderRadius: 6,
    marginVertical: 6
  },

  errorText: {
    color: 'crimson',
    marginTop: 6,
    marginBottom: 10,
    fontWeight: 'bold',
    textAlign: 'center'
  }
})