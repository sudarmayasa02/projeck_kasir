import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';

export default class DataBarang extends React.Component {
    render() {
        return (
            <View style={styles.containerMain}>
                <View style={styles.Box0}>
                </View>
                <View style={styles.Box1}>
                    <Text style={styles.Text}>Data Barang</Text>
                </View>
                <View style={styles.Box2}>
                    <Text style={styles.Text}>Kode 001</Text>
                    <Text style={styles.Text1}>Kopi Nescape</Text>
                </View>
                <View style={styles.Box3}>
                    <Text style={styles.Text}>Kode 002</Text>
                    <Text style={styles.Text1}>Sabun Mandi</Text>
                </View>
                <View style={styles.Box4}>
                    <Text style={styles.Text}>Kode 003</Text>
                    <Text style={styles.Text1}>Indonie</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    containerMain: {
        flex: 1,
        backgroundColor: '#aed4f4',
        flexDirection: 'column'
    },
    Box0: {
        flex: 0.1,
        backgroundColor: '#0c338d'
    },
    Box1: {
        flex: 1,
        backgroundColor: '#D48166',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    Box2: {
        flex: 1,
        backgroundColor: '#2372dd',
        margin: 10,
        justifyContent:'center'
    },
    Box3: {
        flex: 1,
        backgroundColor: '#0F2557',
        margin: 10,
        justifyContent:'center'
    },
    Box4: {
        flex: 1,
        backgroundColor: '#373A36',
        margin: 10,
        justifyContent:'center'
    },
    Text: {
        color: 'white',
        fontSize: 20
    },
    Text1: {
        color: 'black',
        fontSize: 20
    },
});
