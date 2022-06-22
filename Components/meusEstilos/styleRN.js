import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    body:{
      backgroundColor: '#4563BF',
      alignItems: 'center'
    },
    icon:{
      width: 32,
      height: 32,
      position: "absolute",
      top: 0,
      
    },
    text:{
      color:'#fff',
      fontSize: 22,
      fontStyle:'italic',
      textAlign: 'center',
    },
    quadro:{
      width:350,
      backgroundColor: '#5670BF',
      alignItems: 'center' ,
      borderRadius:20,
      height:630,
      marginBottom:20,
    },
    textData:{
        color: '#fff',
        fontSize: 28,
        textAling: 'center',
        fontFamily: 'Lobster-Regular',

    },
    header:{
        backgroundColor: 'rgba(13,30,64,0.5)',
        padding: 12,
        borderRadius: 12,
        height: 50, 
        justifyContent: 'center',
        margin: 5
    },
    textEscolhidoTitle:{
      color: '#f0f',
      fontSize: 50,
      textAling: "center"
    },
    bodyEscolhido:{
      backgroundColor: '#050840',
      padding:10,
      flex:1,
      justifyContent: 'center',
      fontFamily: 'Lobster-Regular'

    },
     boxDescription:{
       marginTop:70,
       padding: 10,
       textAling: 'rgba(21, 5, 114, 0.481)',
       borderRadius:8, 
     },
     boxTitle:{
       marginTop:-250,
     }
  });