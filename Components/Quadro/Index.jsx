import React , {useState} from 'react';
import {View, Text, Image,Modal} from 'react-native';
import { Quadro  } from '../meusEstilos/styleStyledComponents';
import { styles } from '../meusEstilos/styleRN';
import { MdBook } from "react-icons/md";
import { TouchableOpacity } from 'react-native-web';
import Escolhido from '../escolhidos';


function QuadroFinal(props) {
  const[escolhido,setEscolhido] = useState("");
  return (
  <>
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
                <TouchableOpacity onPress={()=>setEscolhido(props.item)}>
                  <View style={styles.icon}> 
                    <MdBook size={25} color='#fff'/>
                  
                  </View>
                </TouchableOpacity>
                </View>   
    </Quadro>
  <Modal visible={escolhido}>
   <Escolhido 
    escolhido ={escolhido}></Escolhido>
    <TouchableOpacity onPress={()=>setEscolhido("")}>
          <Text>OPA</Text>
                  
    </TouchableOpacity>
  </Modal>
  </>
  )
}

export default QuadroFinal;