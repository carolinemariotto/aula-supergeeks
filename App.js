import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
} from 'react-native';
import { computeWindowedRenderLimits } from 'react-native/Libraries/Lists/VirtualizeUtils';
{/* STATE É MUTAVEL E O PROPS É UMA CARACTERISTICA IMUTAVEL*/}
const App = () => {

  return (
    <View style={styles.body}>
      <View style={styles.view1}>
        <Text style={styles.text}>1</Text>
      </View>
      <View style={styles.view2}>
      <Text style={styles.text}>2</Text>
      </View>
      <View style={styles.view3}>
      <Text style={styles.text}>3</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#0ff',
    alignItems: "stretch",
    justifyContent: 'center',
    flexDirection: 'column-reverse'
  },
  text: {
    color: '#ffffff',
    fontSize: 50,
    fontStyle: 'italic',
    margin: 10,
  },
  view1:{
    flex: 1,
    backgroundColor: '#00ffff',
    alignItems: 'center',
    justifyContent:'center',
  },
  view2:{
    flex: 1,
    backgroundColor: '#000fff',
    alignItems: 'center',
    justifyContent:'center',
  },
  view3:{
    flex: 1,
    backgroundColor: '#99ff',
    alignItems: 'center',
    justifyContent:'center',
  }
});

export default App;