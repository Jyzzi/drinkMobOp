import React from 'react';
import { StyleSheet, View, Header, Text, Button, Image } from 'react-native'
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
import Icon from 'react-native-vector-icons/FontAwesome'



const Stack = createStackNavigator();

const ImageHeader = props => (
  <View style={{ backgroundColor: '#eee' }}>
    <Image
      style={StyleSheet.absoluteFill}
      source={require('./images/backGround.png')}
    />
    <Header {...props} style={{ backgroundColor: 'transparent' }}/>
  </View>
);

function MyStack() {

  return (
      <Stack.Navigator
        screenOptions={({ route, navigation }) => ({
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontSize:50
          },
        
          title: "Votre Cave",
          headerStyle: {
            backgroundColor: '#f4511e',
            height: 200,
            
          },
          headerLeft: () => (
            <Icon
              name="beer"
              color="white"
              size={50}  
              onPress={() => navigation.navigate('Home')}
              style={{marginLeft: 20}}
            />
          )  
        })
      }
      >
       

        <Stack.Screen name ="Home" component={HomeScreen}
          options={{
            header: (props) => <ImageHeader {...props} />,
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