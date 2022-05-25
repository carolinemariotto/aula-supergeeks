import React, {useEffect, useState} from 'react'
import {SafeAreaView,View,FlatList, Image, Text,StyleSheet} from 'react-native'
import { TextoPrincipal, Quadro } from './Components/meusEstilos/styleStyledComponents'
import { styles } from './Components/meusEstilos/styleRN'
export default function App(){
    const [allMovies, setAllMovies] = useState ([])
    
    useEffect (()=>{
        //fetch busca os dados no site
        //then vai transformar a resposta em um json 
        // then data vai transforma os dados mapeando o array 
    })
    fetch('https://ghibliapi.herokuapp.com/films')
    .then(response=>response.json())
    .then(data=> {
        data.forEach(movie=>{
            console.log(movie.title)
            console.log(movie.description)
            console.log(movie.release_date)
        })
        setAllMovies(data);
    }).catch(err=>{
        console.log(err) //data em vez de movie por causa que arquivo do .then é uma variável chamada data 

    },[])
    return(
        <View style={styles.body}>
            {/* flatlist exibe uma sequencia de imagens */}
            <TextoPrincipal >Ghibli Movies</TextoPrincipal>
        <FlatList 
            data={allMovies}
            renderItem={({item})=>
                <Quadro style={styles.body}>
                    <View style= {styles.quadro}>
                    <View style= {styles.header} >
                    <Text style={styles.text}>{item.title} </Text>
                    </View>
                    <Image
                        style={{width: 300, height: 500}}
                        source={{uri: item.image}}
                        />
                    <Text style={styles.textData}>{item.release_date}</Text>
                    </View>
                </Quadro>
            }
        />
        </View>   
    )
}

