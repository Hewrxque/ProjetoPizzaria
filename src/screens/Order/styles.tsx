import React from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1D1D2E',
    paddingVertical: '5%',
    paddingEnd: '4%',
    paddingStart: '4%'
  },
 header:{
  flexDirection: 'row',
  marginBottom: 12,
  alignItems: 'center',
  marginTop: 24
 },
 title:{
  fontSize: 30,
  fontWeight: 'bold',
  color: '#FFFFFF',
  marginRight: 14
 }, 
 input:{
  backgroundColor: '#101026',
  borderRadius: 4,
  width: '100%',
  height: 50,
  marginBottom: 12,
  justifyContent: 'center',
  paddingHorizontal: 8,
  color: '#FFFFFF',
  fontSize: 20
 },
 qtdContainer:{
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between'
 },
 qtdText:{
  fontSize: 20,
  fontWeight: 'bold',
  color: '#FFFFFF'
 },
 actions:{
  flexDirection: 'row',
  width: '100%',
  justifyContent: 'space-between'
 },
 buttonAdd:{
  backgroundColor: '#3FD1FF',
  borderRadius: 4,
  height: 50,
  justifyContent: 'center',
  alignItems: 'center',
  width: '25%'
 },
 button:{
  backgroundColor: '#3FFFA3',
  height: 50,
  width: '70%',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 4
 }, 
 textButton:{
  color: '#101026',
  fontSize: 26,
  fontWeight: 'bold'
 }
});

export default styles;
