import * as React from 'react';
import { Button, View, Text, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native';
import { ImageButton } from 'react-native-image-button-text';
import { useState } from 'react';
//COUNTER
import CounterInput from "react-native-counter-input";




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
  <ImageButton width={120} height={20} text=""/>
  <ImageButton style ={{marginTop:0, marginLeft:20}}
    width={115}
    height={120}
    text=""
    onPress={() => navigation.navigate('Round Details')}
    source={require('./assets/huklab.png')}/>
  
    <Button
        title="PRESS TO START"
        onPress={() => navigation.navigate('Round Details')
      }/>
</TouchableOpacity>   
      </View>
  );
}

//UUS LEHEKÜLG LISATUD

function DetailsScreen({ navigation }) {

   const [name, setName] = useState(''); 
   const [age, setAge] = useState('');

  return (
    //TEXT INPUT NAME
     <View style={styles.container}>
       <Text style={styles.titleText}>Add Player:</Text>
       <TextInput style={styles.input}
       placeholder='Enter your name'
       onChangeText={(val) =>setName(val)}
       />
      

       {/* TEXT INPUT ROUNDS */}
        
        <TextInput 
        keyboardType ='numeric'
        style={styles.input}
        placeholder='5-20'
        onChangeText={(val) => setAge(val)}
        />
<Text style={styles.secondText}>Player: {name}</Text>
  <Text style={styles.secondText}>Number of rounds: {age}</Text>
  
  <Button
        title="START"
        onPress={() => navigation.navigate('Round 1')
        
      }/>
     </View>
     
  );
}

// KOLMAS VAADE - ROUND 1
function RoundsScreen({ navigation }) {

   return(
    <View>
      <Text style={styles.secondText}>Player name:</Text>
        <Text style={styles.secondText}>Round: 1/5</Text>
          <Text style={styles.secondText}>Length: 10 m</Text>

        <CounterInput
  onChange={(counter) => {
    console.log("onChange Counter:", counter);
  }}
/>
<Text style={styles.secondText}>Hits: </Text>

<Text style={styles.secondText}>Round Score: </Text>
<Text style={styles.secondText}>Overall score: </Text>

<Button
        title="Next Round"
        onPress={() => navigation.navigate('Round 2')
        
      }/>
    </View>
    
   );
}

//NELJAS VAADE - ROUND 2
function Rounds2Screen({ navigation }) {

  return(
   <View>
     <Text style={styles.secondText}>Player name:</Text>
       <Text style={styles.secondText}>Round: 2/5</Text>
         <Text style={styles.secondText}>Length: 10 m</Text>

       <CounterInput
 onChange={(counter) => {
   console.log("onChange Counter:", counter);
 }}
/>
<Text style={styles.secondText}>Hits: </Text>

<Text style={styles.secondText}>Round Score: </Text>
<Text style={styles.secondText}>Overall score: </Text>

<Button
       title="Next Round"
       onPress={() => navigation.navigate('Round 3')
       
     }/>
   </View>
   
  );
}

//VIIES VAADE - ROUND 3
function Rounds3Screen({ navigation }) {

  return(
   <View>
     <Text style={styles.secondText}>Player name:</Text>
       <Text style={styles.secondText}>Round: 3/5</Text>
         <Text style={styles.secondText}>Length: 10 m</Text>

       <CounterInput
 onChange={(counter) => {
   console.log("onChange Counter:", counter);
 }}
/>
<Text style={styles.secondText}>Hits: </Text>

<Text style={styles.secondText}>Round Score: </Text>
<Text style={styles.secondText}>Overall score: </Text>

<Button
       title="Next Round"
       onPress={() => navigation.navigate('Round 4')
       
     }/>
   </View>
   
  );
}

//KUUES VAADE - ROUND 4
function Rounds4Screen({ navigation }) {

  return(
   <View>
     <Text style={styles.secondText}>Player name:</Text>
       <Text style={styles.secondText}>Round: 4/5</Text>
         <Text style={styles.secondText}>Length: 10 m</Text>

       <CounterInput
 onChange={(counter) => {
   console.log("onChange Counter:", counter);
 }}
/>
<Text style={styles.secondText}>Hits: </Text>

<Text style={styles.secondText}>Round Score: </Text>
<Text style={styles.secondText}>Overall score: </Text>

<Button
       title="Next Round"
       onPress={() => navigation.navigate('Round 5')
       
     }/>
   </View>
   
  );
}

//SEITSMES VAADE - ROUND 5
function Rounds5Screen({ navigation }) {

  return(
   <View>
     <Text style={styles.secondText}>Player name:</Text>
       <Text style={styles.secondText}>Round: 5/5</Text>
         <Text style={styles.secondText}>Length: 10 m</Text>

       <CounterInput
 onChange={(counter) => {
   console.log("onChange Counter:", counter);
 }}
/>
<Text style={styles.secondText}>Hits: </Text>

<Text style={styles.secondText}>Round Score: </Text>
<Text style={styles.secondText}>Overall score: </Text>

<Button
       title="FINISH ROUND"
       onPress={() => navigation.navigate('Statistics')
       
     }/>
   </View>
   
  );
}

//KAHEKSAS VAADE - STATISTIKA

function Statistics({ navigation }) {

  return(
   <View>
     <Text style={styles.secondText}>Statistics</Text>


<Button
       title="New Round"
       onPress={() => navigation.navigate('Round Details')
       
     }/>
   </View>
   
  );
}



const Stack = createStackNavigator();

//VAADETE LIST
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Disc Golf Putting League" component={HomeScreen} />
        <Stack.Screen name="Round Details" component={DetailsScreen} />
        <Stack.Screen name="Round 1" component={RoundsScreen} />
        <Stack.Screen name="Round 2" component={Rounds2Screen} />
        <Stack.Screen name="Round 3" component={Rounds3Screen} />
        <Stack.Screen name="Round 4" component={Rounds4Screen} />
        <Stack.Screen name="Round 5" component={Rounds5Screen} />
        <Stack.Screen name="Statistics" component={Statistics} />

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
  },
  secondText: {
    marginTop: 20,
    textAlign: 'center',
    fontSize: 20,
  },
});

export default App;