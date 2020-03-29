import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import  HomeScreen  from './screens/Home';
import  OptionScreen  from './screens/Option';
import  ListBottle  from './screens/ListBottle';
import  Detail  from './screens/BottleDetail';
import  AddBottle  from './screens/AddBottle';
import  ConfirmDelete  from './screens/ConfirmDelete';
import  CreateCategorie  from './screens/CreateCategorie';



const Stack = createStackNavigator();

function MyStack() {
  return (
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f4511e',
            height: 200,
          },
          headerTintColor: '#9E4646',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 50,
          },
        }}
       >

        <Stack.Screen name ="Home" component={HomeScreen}
          options={{
            title: " Accueil ",
          }}
        />

        <Stack.Screen name ="Option" component={OptionScreen}
          options={{
            title: "Option"
          }}
        />

        <Stack.Screen name ="List" component={ListBottle}
          options={{
            title: "Liste"
          }}
        />

<Stack.Screen name ="Detail" component={Detail}
          options={{
            title: "Detail"
          }}
        />

<Stack.Screen name ="Add" component={AddBottle}
          options={{
            title: "Ajout"
          }}
        />

<Stack.Screen name ="ConfirmDelete" component={ConfirmDelete}
          options={{
            title: "ConfirmDelete"
          }}
        />

<Stack.Screen name ="CreateCategorie" component={CreateCategorie}
          options={{
            title: "CreateCategorie"
          }}
        />

{/* <Stack.Screen name ="Option" component={OptionScreen}
          options={{
            title: "Option"
          }}
        /> */}

      </Stack.Navigator>
  
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
};