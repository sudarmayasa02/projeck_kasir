import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
export default class Main extends React.Component {
render() {
 return (
 <View style={styles.container}>
  <View style={styles.vHeader}>
  <Text style={styles.txtHeader}>Aplikasi Kasir</Text>
 </View>
  <View style={styles.vButton}>
  <Button
  color="orange"
  onPress={() => this.props.navigation.navigate('Layar1')}
  title="Penjualan"
  accessibilityLabel="Layar 1"
  />
 </View>
  <View style={styles.vButton}>
  <Button
   color="orange"
   onPress={() => this.props.navigation.navigate('Layar2')}
   title="Data Barang"
   accessibilityLabel="Layar 2"
  />
 </View>
 <View style={styles.vButton}>
 <Button
  color="orange"
  onPress={() => this.props.navigation.navigate('Layar3')}
  title="Tentang Kami"
  accessibilityLabel="Layar 3"
 />
</View>
 </View>
 );
}
}
 const styles = StyleSheet.create({
 container: {
 flex: 1
},
 vHeader: {
 alignItems: 'center',
 justifyContent: 'center'
},
 txtHeader: {
 fontSize: 30,
 alignItems: 'center',
 justifyContent: 'center'
},
 vButton: {
 margin: 10
},
Box2: {
  flex: 2,
  backgroundColor: '#373A36',
  flexDirection: 'column',
  justifyContent: 'space-around',
  marginBottom: 10,
  alignItems: 'center'
},
});
