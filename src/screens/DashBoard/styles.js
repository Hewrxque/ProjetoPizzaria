import React from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1D1D2E',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 24,
  },
  textInput: {
    width: '90%',
    height: 60,
    backgroundColor: '#101026',
    color: '#fff',
    margin: 10,
    textAlign: 'center',
    borderRadius: 4,
    paddingHorizontal: 8,
    fontSize: 22
  },
  button: {
    width: '80%',
    backgroundColor: '#00FF7F',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    margin: 10,
    marginVertical: 12
  },
  textButton: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#1D1D2E',
  },
});

export default styles;
