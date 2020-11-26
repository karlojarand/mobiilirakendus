import * as React from 'react';
import { Button, View, Text, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native';
import { ImageButton } from 'react-native-image-button-text';




//LIIKUMINE ERINEVATE LEHTEDE VAHEL HOME->DETAILS
function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#DEDED9', marginBottom: -20 }}>
      {/* <Text>Home Screen</Text> */}
        <Image  style={{
            resizeMode: "cover",
            height: 250,
            width: 120,
          

          }} source={require("./assets/basket.png")}/> 

{/* ESILEHE NUPU SEADISTUS */}
<TouchableOpacity>
  <ImageButton width={120} height={12} text=""/>
  <ImageButton style ={{marginTop:0}}
    width={120}
    height={120}
    text=""
    onPress={() => navigation.navigate('Details')}
    source={require('./assets/huklab.png')}/>
  
    <Button
        title="PRESS TO START"
        onPress={() => navigation.navigate('Details')
      }/>
</TouchableOpacity>   
      </View>
  );
}

//UUS LEHEKÜLG LISATUD

function DetailsScreen() {

  // const [name, setName] = useState('karl');
  // const [age, setAge] = useState('30');

  return (
    //TEXT INPUT
     <View style={styles.container}>
       <Text style={styles.titleText}>Add Player:</Text>
       <TextInput style={styles.input}
       placeholder='Enter your name'
       onChangeText={(val) =>setName(val)}
       />
       
     </View>
     
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Disc Golf Putting League" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

<Stack.Screen name="Home">
  {props => <HomeScreen {...props} extraData={someData} />}
</Stack.Screen>


//STYLE

const styles = StyleSheet.create({
  screenContainer: {
    fontSize: 0,
    paddingTop: 20,
    fontWeight: "bold",
  },
  titleText: {
    fontWeight: "bold",
    fontSize: 30,
    textAlign: 'center',
  },
  //INPUTI STIIL
  input: {
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200,
  },
  ImageIconStyle: {
    resizeMode: "cover",
    height: 120,
    width: 120
  }
});

export default App;