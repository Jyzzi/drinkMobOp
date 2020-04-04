import React from 'react';
import { StyleSheet, Text, Button } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import  HomeScreen  from './screens/Home';
import  OptionScreen  from './screens/Option';
import  ListBottle  from './screens/ListBottle';
import  Detail  from './screens/BottleDetail';
import  AddBottle  from './screens/AddBottle';
import  ConfirmDelete  from './screens/ConfirmDelete';
import  CreateCategorie  from './screens/CreateCategorie';
import { useNavigation } from '@react-navigation/native';




const Stack = createStackNavigator();

function MyStack() {

  return (
      <Stack.Navigator
        screenOptions={({ route, navigation }) => ({
          headerStyle: {
            backgroundColor: '#f4511e',
            height: 200,
          },
          headerLeft: () => (
            <Button
              onPress={() => navigation.navigate('Home')}
              title="Info"
            />
          )  
        })
      }
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