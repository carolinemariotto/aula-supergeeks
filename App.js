import React, {useEffect, useState} from 'react'
import {SafeAreaView,View,FlatList, Image, Text} from 'react-native'

export default function App(){
    const [pokemons, setPokemons ]= useState([])
    useEffect(()=>{
        fetch('https://pokeapi.co/api/v2/pokemon', {
            method:'GET',
            headers:{
                'Accept':'application/json'
            } 
        })
        .then(response=> response.json())
        .then(date=>{
            console.log(date)
            setPokemons(date.results)
        })
    },[])
    return(
        <SafeAreaView>
            <FlatList
                data={pokemons}
                keyExtractor={(pokemon)=> pokemon.name}
                contentContainerStyle={{flexGrow:1}}
                renderItem={PokemonShow}
            />
        </SafeAreaView>
    )
}
function PokemonShow (item){
    const {name,url} = item.item
    const pokemonNumber = url.replace('https://pokeapi.co/api/v2/pokemon','')
    const ImageUrl = 'https://cdn.traction.one/pokedex/pokemon'+pokemonNumber+'.png'
    return(
        <View Style={{flexDirection: 'row'}}>
            <Image style={{width: 100, height:100}} source={{uri: ImageUrl.replace('/.png','.png')}}/>
            <Text>{name}</Text>
        </View>
    )
}

