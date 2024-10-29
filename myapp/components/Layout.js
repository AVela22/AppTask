import { View, StyleSheet, StatusBar } from 'react-native'
import React from 'react'

//SE PASAN LOS ESTILOS A LOS HIJOS
const layout = ({children}) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#c48f02'/>
      {children}
    </View>
  )
}


//SE CREA LO ESTILOS
const styles = StyleSheet.create(
    {
        container:{
            backgroundColor:"#222f3e", 
            padding:10,
            flex:1,
            alignItems:"center"
        },
    }
);


export default layout