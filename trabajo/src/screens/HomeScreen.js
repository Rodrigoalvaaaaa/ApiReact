import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const HomeScreen = () => {
    return ( 
        <View style={styles.container}>
        <Text style={styles.title}>
            Api ejemplo
        </Text>
        </View>
     );
}
 
export default HomeScreen;


// Estilos para los componentes.
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      paddingTop: 20,
      paddingHorizontal:15
    },
    title: {
      fontSize: 40,
      fontWeight: 'bold',
      textAlign: 'center',
      marginTop: 100,
      textTransform: 'uppercase',
    },
      negrita:{
        fontWeight:'bold'
      }
  });
  