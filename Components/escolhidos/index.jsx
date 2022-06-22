import React from 'react'
import { styles } from '../meusEstilos/styleRN'
import { View, Text} from 'react-native-web'

function Escolhido(props) {
  return (
    <>
     <View style={styles.bodyEscolhido}>
      <View style={styles.boxTitle}>
        <Text style={styles.textEscolhidoTitle}>{props.escolhido.title}</Text>
      </View>
      <View style={styles.boxDescription}>
        <Text style={styles.textEscolhidoDescription}>{props.escolhido.description}</Text>
      </View>
    </View>
    </>
  )
}

export default Escolhido