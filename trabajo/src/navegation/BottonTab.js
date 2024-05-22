// Utilidades de React Navigation
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';

// Pantallas de navegación
import PokemonList from '../screens/PokemonList';
import RickList from '../screens/RickList';
import HomeScreen from '../screens/HomeScreen';
import PokemonAxios from '../screens/PokemonAxios';

// Navegador Bottom Tabs Navigator
const Tab = createBottomTabNavigator();

export default function BottomTab() {
  return (
    <Tab.Navigator>
    <Tab.Screen
      name="HomeScreen"
      component={HomeScreen}
      options={{
        title: 'Inicio',
        tabBarActiveTintColor: '#000', // Color activo de la pestaña
        headerStyle: {
          backgroundColor: '#fff', // Color del header
        },
        headerTintColor: '#fff', // Color del texto en el header
        tabBarIcon: ({ color }) => ( // Función que define el ícono de la pestaña
          <Ionicons name="home" color={color} size={24} /> // `color` proviene de React Navigation
        ),
      }}
    />
    <Tab.Screen
      name="RickList"
      component={RickList}
      options={{
        title: 'Personajes',
        tabBarActiveTintColor: '#000', // Color activo de la pestaña
        headerStyle: {
          backgroundColor: '#fff', // Color del header
        },
        headerTintColor: '#fff', // Color del texto en el header
        tabBarIcon: ({ color }) => ( // Función que define el ícono de la pestaña
          <Ionicons name="person" color={color} size={24} /> // `color` proviene de React Navigation
        ),
      }}
    />
    <Tab.Screen
      name="PokemonAxios"
      component={PokemonAxios}
      options={{
        title: 'Lista1',
        tabBarActiveTintColor: '#000',
        headerStyle: {
          backgroundColor: '#fff',
          borderBottomRightRadius: 35,
          borderBottomLeftRadius: 35,
        },
        headerTintColor: '#fff',
        tabBarIcon: ({ color }) => (
          <Ionicons name="trash" color={color} size={24} />
        ),
      }}
    />
    <Tab.Screen
      name="PokemonList"
      component={PokemonList}
      options={{
        title: 'Lista2',
        tabBarActiveTintColor: '#000', // Color activo de la pestaña
        headerStyle: {
          backgroundColor: '#fff', // Color del header
        },
        headerTintColor: '#fff',
        tabBarIcon: ({ color }) => (
          <Ionicons name="close" color={color} size={24} />
        ),
      }}
    />
  </Tab.Navigator>
  
  );
}
