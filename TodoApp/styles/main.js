import {
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  baseText: {
    alignSelf: 'center',
    fontSize: 14,
    width: 300,
    marginBottom: 5,
  },
  buttonContainer: {
    alignSelf: 'center',
    backgroundColor: '#00d46a',
    borderRadius: 4,
    marginTop: 15,
    padding: 5,
    width: 300,
  },
  container: {
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flex: 1,
    justifyContent: 'center',
  },
  heading: {
    fontSize: 20,
    marginBottom: 10,
    textAlign: 'center',
    width: 300,
  },
  input: {
    alignSelf: 'center',
    backgroundColor: '#FFF',
    borderColor: '#cdcdcd',
    borderRadius: 4,
    borderWidth: 1,
    height: 40,
    textAlign: 'center',
    width: 300,
  },
  link: {
    color: '#00d46a',
    fontWeight: 'bold',
    fontSize: 14,
    marginTop: 10,
    textAlign: 'center',
    width: 300,
  },
});

export default styles;