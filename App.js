import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import Header from "./scr/components/Header";
import AlbumList from "./scr/components/AlbumList";

const App = () => {
  return (
    <View style={styles.viewStyle}>
       <Header />
       <AlbumList />
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: '#779FA1',

  },

});
export default App;
