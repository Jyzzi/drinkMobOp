import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import  HomeScreen  from './screens/Home'; 
import  OptionScreen  from './screens/Option'; 



const Stack = createStackNavigator();

function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#9E4646',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}      
       initialRouteName="Home">

        <Stack.Screen 
          name ="Home" 
          component={HomeScreen} 
          options={{
            title: " Accueil "
          }}
        />

        <Stack.Screen 
          name ="Option" 
          component={OptionScreen} 
          options={{
            title: " Option "
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MyStack;