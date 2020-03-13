import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Image source={require("./imgs/2.png")} style={{width: 200,height:300}} />
      <Text >Over the garden wall</Text>        
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
});

export default App;
