import * as React from 'react';
import Home from './home'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, AntDesign } from "@expo/vector-icons";
const Tab = createBottomTabNavigator();

const icons: any = {
  Inicio: {
    lib: AntDesign,
    name: 'home'
  },
  Busca: {
    lib: AntDesign,
    name: 'home'
  },
  Pedidos: {
    lib: AntDesign,
    name: 'home'
  },
  Perfil: {
    lib: AntDesign,
    name: 'home'
  },
}
function MyTabs() {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        const { lib: Icon, name } = icons[route.name];
        return <Icon name={name} size={size} color={color}></Icon>
      },
    })}
      tabBarOptions={{
        activeTintColor: '#3b3b3b',
        inactiveTintColor: '#9c9c9c'

      }}>
      <Tab.Screen name="Inicio" component={Home} />
      <Tab.Screen name="Busca" component={Home} />
      <Tab.Screen name="Pedidos" component={Home} />
      <Tab.Screen name="Perfil" component={Home} />
    </Tab.Navigator>
  );
}
export default MyTabs