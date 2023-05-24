import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style={{backgroundColor:"brown", height: 65, alignItems:"centre", justifyContent:"space-around"}}>
      <Text style ={{justifyContent: 'center' }}>Furniture Booking</Text>
      <Text> Items </Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({})