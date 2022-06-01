import React from 'react';
import {View, Text, Image} from 'react-native';
import { Quadro  } from '../meusEstilos/styleStyledComponents';
import { styles } from '../meusEstilos/styleRN';
import { MdBook } from "react-icons/md";


function QuadroFinal(props) {
  return (
    <Quadro style={styles.body}>
        <View style= {styles.quadro}>
                <View style= {styles.header} >
                <Text style={styles.text}>{props.item.title} </Text>
                </View>
                <Image
                    style={{width: 300, height: 500}}
                    source={{uri: props.item.image}}
                    />
                <Text style={styles.textData}>{props.item.release_date}</Text>
                <View style= {styles.icon}>
                    <MdBook size={25} color='#fff'/>
                </View>
                </View>
                    
    </Quadro>
  )
}

export default QuadroFinal;