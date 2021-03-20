import React from 'react';
import { NavigationContainer } from '@react-navigation/native';// handle back button, screen tracking ...
import { createStackNavigator } from '@react-navigation/stack';
import  HomeScreen  from './pages/home';
import  NewBottleScreen  from './pages/newBottle';
import  NewCategorieScreen  from './pages/newCategorie';
import Icon from 'react-native-vector-icons/FontAwesome'





const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={({ route, navigation }) => ({
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontSize:30
          },
      
          title: "Votre Cave",
          headerStyle: {
            backgroundColor: '#f4511e',
            height: 100,  
          },
          headerLeft: () => (
            <Icon
              name="beer"
              color="white"
              size={30}  
              onPress={() => navigation.navigate('Home')}
              style={{marginLeft: 20}}
            />
          ),
          headerRight: () => (
            <Icon
              name="plus"
              color="white"
              size={30}  
              onPress={() => navigation.navigate('Home')}
              style={{marginRight: 20}}
            />
          )
        })}
      >
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          
        />
        <Stack.Screen 
          name="NewBottle" 
          component={NewBottleScreen} 
        />
        <Stack.Screen 
          options={{title:'new categorie'}}
          name="NewCategorie" 
          component={NewCategorieScreen} 
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;