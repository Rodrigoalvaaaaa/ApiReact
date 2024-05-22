import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, StyleSheet, Dimensions, ActivityIndicator } from 'react-native';

const WIDTH = Dimensions.get('window').width;
const numColumns = 2;

import PokemonItem from '../components/RickItem';
import FormularioPokemon from '../components/FormRick';

export default function PokemonList() {
    const [pokemon, setPokemon] = useState([]);
    const [loading, setLoading] = useState(false);
    const [nombreP, setNombreP] = useState('');

    const fetchData = async () => {
        try {
            setLoading(true);
            const API = nombreP === ''
                ? 'https://rickandmortyapi.com/api/character'
                : `https://rickandmortyapi.com/api/character/?name=${nombreP}`;

            console.log(API);
            const response = await fetch(API);
            const data = await response.json();
            setPokemon(data.results);
        } catch (error) {
            console.log("Hubo un error listando de rick y morty", error);
        } finally {
            setLoading(false);
        }
    };


    useEffect(() => {
        fetchData();
    }, [nombreP]);

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Listado de personajes usando Fetch</Text>
            <FormularioPokemon
                labelInput='Ingrese el nombre del personaje: '
                placeHolderInput='Rick'
                valor={nombreP}
                setValor={setNombreP}
            />
            {loading ? (
                <ActivityIndicator style={styles.loading} size="large" color="#0000ff" />
            ) : (
                <FlatList
                    data={pokemon}
                    renderItem={({ item }) => <PokemonItem item={item} />}
                    keyExtractor={(item) => item.id.toString()} // Utiliza el ID como clave única
                    numColumns={numColumns}
                    contentContainerStyle={styles.list}
                />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#282c34',
        alignItems: 'center',
        paddingTop: 50,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
        color: '#61dafb',
    },
    list: {
        justifyContent: 'center',
    },
    loading: {
        marginTop: 20,
    },
});
