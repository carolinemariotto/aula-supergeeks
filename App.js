import React, {useEffect, useState} from 'react'
import {SafeAreaView,View,FlatList, Image, Text,StyleSheet} from 'react-native'
import { TextoPrincipal, Quadro } from './Components/meusEstilos/styleStyledComponents'
import { styles } from './Components/meusEstilos/styleRN'
import { MdBook } from "react-icons/md";
import QuadroFinal from './Components/Quadro/Index';
export default function App(){
    const [allMovies,setAllMovie] = useState([])
    const site = "https://ghibliapi.herokuapp.com"
    useEffect(()=>{
      // fetch busca os dados no site
      // then response vai transformar a resposta em um json
      // then data vai formatar os dados mapeando  o array
      fetch(`${site}/films`)
      .then(response=>response.json())
      .then(data=>{
          data.forEach(movie=>{
              console.log(movie.title);
              console.log(movie.description)
              console.log(movie.release_date)
              setAllMovie(movie)
          })
          setAllMovie(data);// data em vez de movie por causa qye i arquivo do .then é uma variavel chamada data, movie é no map
      }).catch(err=>{
          console.log(err)
      })
    },[])
    return(
        <View style={styles.body}>
            {/* flatlist exibe uma sequencia de imagens */}
            <TextoPrincipal >Ghibli Movies</TextoPrincipal>
        <FlatList 
            data={allMovies}
            renderItem={({item})=>
                <QuadroFinal 
                    item={item}
                    
                />
            }
        />
        </View>   
    )
}

