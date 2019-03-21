import React from 'react';
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';

export default class Penjualan extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        kode: 0,
        barang: 0,
        harga: 0,
        total: '',
        bayar: '',
        kembalian: '',
      };
    }
    render() {
        return (
            <View style={styles.vMain}>

              {/* View untuk header */}
              <View style={styles.vHeader}>
                <Text style={styles.txtHeader}>PENJUALAN</Text>
              </View>

              {/* View untuk Input */}
              <View style={styles.vInput}>
                <View style={styles.itemInput}>
                  <Text>Kode Barang </Text>
                  <TextInput
                    style={styles.txtInput}
                    keyboardType='numeric'
                    onChangeText={
                      (txtKode) => this.setState({kode:txtKode})
                    }
                  />
            </View>
            <View style={styles.itemInput}>
                <Text>Harga Barang </Text>
                <TextInput
                  style={styles.txtInput}
                  keyboardType='numeric'
                  onChangeText={
                    (txtHarga) => this.setState({ harga: txtHarga })
                    }
                />
            </View>
              <View style={styles.itemInput}>
                  <Text>Banyak Barang </Text>
                  <TextInput
                    style={styles.txtInput}
                    keyboardType='numeric'
                    onChangeText={
                      (txtBarang) => this.setState({ barang: txtBarang })
                    }
                  />

              </View>
              </View>

              {/* View untuk Tombol */}
              <View style={styles.vTombol}>
                <Button
                  title="Hitung"
                  onPress={
                    () => {
                        const belanja==this.state.barang * this.state.harga;
                        this.setState({ total: belanja });
                    }
                  }
                />
              </View>
              {/* View untuk Hasil */}
              <View style={styles.vHasil}>
                <Text> Total Belanja Anda = {this.state.total}</Text>
              </View>

              <View style={styles.itemInput}>
                  <Text>Uang bayar </Text>
                  <TextInput
                    style={styles.txtInput}
                    keyboardType='numeric'
                    onChangeText ={
                      (txtBayar) => this.setState({bayar:txtBayar})
                    }
                  />
              </View>
              {/* View untuk Hasil */}
              <View style={styles.vTombol}>
                <Button
                  title="Kembalian"
                  onPress ={
                    () => {
                        let kembali =this.state.total - this.state.bayar;
                        this.setState({kembalian:kembali});
                    }
                  }
                />
              </View>
              <View style={styles.vHasil}>
                <Text> Kembalian Anda = {this.state.kembalian}</Text>
              </View>


            </View>

        );
    }
}

const styles = StyleSheet.create({
    vMain: {
        flex: 4,
        backgroundColor:'white'
    },
    vHeader:{
      flex:1,
      backgroundColor:'#0D47A1',
      alignItems:'center',
      justifyContent:'center'
    },
    txtHeader :{
      fontSize:20,
      color :'white',
      fontWeight:'bold'
    },
    vInput:{
      flex:2,
      backgroundColor:'#90CAF9',
    },
    itemInput :{
      flexDirection:'row',
      marginTop:10,
      marginLeft:10

    },
    txtInput:{
      width:160,
      height:30,
      borderColor :'#A9A9A9',
      borderWidth:1,
      marginLeft:50
    },

    vTombol:{
      flex: 0.5,
      borderColor :'#A9A9A9',
    },
    vHasil:{
      flex:1
    },

  })
