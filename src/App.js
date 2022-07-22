import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Category from './pages/Category';
import FoodList from './pages/FoodList';
import Details from "./pages/Detail";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Categories'component={Category} options={{
          title:"Categories",
          headerTitleStyle:{color:"#ffa000", fontSize:22},
          }}/>
        <Stack.Screen name='FoodsName'component={FoodList} options={{
          headerTintColor:"#ffa000",
          headerTitleStyle:{fontSize:22}
        }}/>
        <Stack.Screen name='Details' component={Details} options={{
          headerTintColor:"#ffa000",
          headerTitleStyle:{fontSize:22}
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
