import * as React from 'react';
import { Button, View, Text, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native';


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
      
        <Image
          style={{
            resizeMode: "cover",
            height: 120,
            width: 120
          }}
          source={require("./assets/huklab.png")} />

      <View style={styles.screenContainer}>
      <Button
        title="PRESS TO START"
        onPress={() => navigation.navigate('Details')}
      />
      </View>
    </View>
  );
}



//UUS LEHEKÜLG LISATUD





function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#DEDED9' }}>
      <Text style={styles.titleText}>Add Player:</Text>
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


const styles = StyleSheet.create({
  screenContainer: {
    fontSize: 0,
    paddingTop: 20,
    fontWeight: "bold",
  },
  titleText: {
    fontWeight: "bold",
    fontSize: 30,
  }
});

export default App;