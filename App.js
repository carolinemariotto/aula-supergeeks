import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  RefreshControl,
} from 'react-native';

const App = () => {

  const [Items, setItems] = useState([
    { key: 1, series: 'Riverdale', temp:4 },
    { key: 2, series: 'Once Upon a time ' , temp:7},
    { key: 3, series: 'Dinastia' , temp:5},
    { key: 4, series: 'The walking dead', temp: 12},
    { key: 5, series: 'Strange Things', temp: 4 },
    { key: 6, series: 'The big bang theory' , temp:4},
    { key: 7, series: 'Friends', temp: 5 },
    { key: 8, series: 'Fuller House', temp: 7},
    { key: 44, series: 'Greys Anatomy', temp: 15},
    { key: 68, series: 'The good doctor', temp: 9 },
    { key: 0, series: 'Flash', temp: 7},
  ]);
  const [Refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setItems([...Items, { key: 68, series: 'temp 9' }]);
    setRefreshing(false);
  }
  {/*ESTE CÓDIGO SÓ ATUALIZA PELO CELULAR, ELE ADICIONA O ITEM 69 QUANDO FOR RECOMPILADO*/}
  return (
    <ScrollView
      style={styles.body}
      refreshControl={
        <RefreshControl
          refreshing={Refreshing}
          onRefresh={onRefresh}
          colors={['#ff00ff']}
        />
      }
    >
      {
        Items.map((object) => {
          return (
            <View style={styles.series} 
                  key={object.key}
               
            >
              <Text 
                style={styles.text}
               >
                
              nome da serie {object.series}
              qtde de temporadas {object.temp}
              
              </Text>
            </View>
          )
        })
      }
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ffffff',
  },
  item: {
    margin: 10,
    backgroundColor: '#4ae1fa',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#000000',
    fontSize: 45,
    fontStyle: 'italic',
    margin: 10,
  },
});

export default App;