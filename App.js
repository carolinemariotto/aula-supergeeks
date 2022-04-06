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

  const [fofoca, setFofoca] = useState('nao estou sabendo')
  const onClickHandler = ()=>{
    setFofoca('a maria terminou o noivado e fugiu para minas com o kako')
  }

  return (
    <View style={styles.body}>
      <Text style={styles.text}>Você está sabendo da fofoca</Text>
      <Text style={styles.text}> {fofoca}</Text>
      <Button title='me conta a fofoca' onPress={onClickHandler}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#0000ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#ffffff',
    fontSize: 20,
    fontStyle: 'italic',
    margin: 10,
  },
});

export default App;