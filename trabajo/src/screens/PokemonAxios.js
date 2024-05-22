import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, StyleSheet, Dimensions, TextInput, ActivityIndicator } from 'react-native';
import axios from 'axios';
import FormularioPokemon from '../components/FormularioPokemon';

const WIDTH = Dimensions.get('window').width;
const numColumns = 2;

export default function PokemonAxios() {
  const [pokemon, setPokemon] = useState([]);
  const [nPokemon, setNPokemon]=useState(0); //La api comenzará mostrando solamente 25 pokemones
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getPokemon(nPokemon);
  }, [nPokemon]);

  const getPokemon = async (nPokemon) => {
    try {
      setLoading(true);
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${nPokemon}`);
      const dataPokemon = response.data;
      setPokemon(dataPokemon.results);
      setLoading(false);
    } catch (error) {
      console.log("Hubo un error listando los pokemones", error);
      setLoading(false);
    }
  }

  const renderItem = ({ item }) => {
    return (
      <View style={styles.card}>
        <Image
          style={styles.image}
          source={{ uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${item.url.split('/')[6]}.png` }}
        />
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.number}>N° Pokedex: {item.url.split('/')[6]}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.centeredContainer}>
        <FormularioPokemon
          tituloFormulario='Listado de Pokemones usando Fetch'
          labelInput='Ingrese la cantidad de pokemon a cargar: '
          placeHolderInput='20'
          valor={nPokemon}
          setValor={setNPokemon}
        />
      </View>
      <View style={styles.centeredContainer}>
        {loading ? (
          <ActivityIndicator style={styles.loading} size="large" color="#0000ff" />
        ) : (
          <FlatList
            data={pokemon}
            renderItem={renderItem}
            keyExtractor={(item) => item.name}
            numColumns={numColumns}
            contentContainerStyle={styles.list}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4CAF50',
    paddingHorizontal: 10,
  },
  centeredContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    margin: 5,
    width: WIDTH / numColumns - 20,
    alignItems: 'center',
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 4,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
    textTransform: 'capitalize',
    fontFamily: 'Arial',
  },
  number:{
    fontSize: 14,
    fontWeight:'bold',
    marginBottom: 10,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  loading: {
    marginTop: 20,
  },
});
