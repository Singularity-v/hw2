import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Image source={require("./imgs/2.png")} style={{width: 300,height:400,}} />
      <Text style={styles.text}>Over the garden wall</Text> 
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B4CEB3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize:20,
    color: '#546A76',

  },
});

export default App;
