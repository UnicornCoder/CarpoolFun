//homepage


import * as React from 'react';

import MapView, {Marker, Callout} from 'react-native-maps';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SectionList, StyleSheet, Text, View, Dimensions, Image, Button } from 'react-native';
import Linking from 'react-router-native';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

import { createStackNavigator } from '@react-navigation/stack';


function HomeScreen() {
 
  return (
    
    <View style={StyleSheet.absoluteFillObject}>
        
        <MapView style={StyleSheet.absoluteFillObject} 
          region = {{
            latitude: 45.508888,
            longitude: -73.561668,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
        
        >

          <Marker style = {styles.marker}
            coordinate = {{
              latitude: 45.508888,
              longitude: -73.561668,
            }}

            image = {require('./assets/car2.png')}

            title={"The hippy carpool!"}
            description={"4/5 full"}
          >

            <Callout tooltip>
              <View>
                <View style = { styles.bubble}>
  
                  <Text style = {styles.name}> 
                  Cool Carpool 
                  </Text>

                  <Text > 0/5 full </Text>
                  <Image
                    style = {styles.image}
                    source = {require('./assets/game.jpg')}
                  />

                  <Button
                    
                    title="Join"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                  />
                </View>
                <View style = {styles.arrowBorder}  />
                <View style = {styles.arrow}   />
              </View>

            </Callout>

        

          </Marker>


          <Marker style = {styles.marker}
            coordinate = {{
              latitude: 45.50,
              longitude: -73.56,
            }}

            image = {require('./assets/car2.png')}

            title={"The cool carpool!"}
            description={"4/5 full"}
          >

            <Callout tooltip>
              <View>
                <View style = { styles.bubble}>

          
                  <Text style>Gaming carpool</Text>
                  <Text > 4/5 full </Text>
                  <Image
                    style = {styles.image}
                    source = {require('./assets/marker.png')}
                  />
                  <Button
                    
                    title="Join"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                  />
                </View>
                <View style = {styles.arrowBorder}  />
                <View style = {styles.arrow}   />
              </View>

              

            </Callout>

        

          </Marker>

        </MapView>

        
       
        <View style={{ position: 'absolute', top: 50, left: 0, right: 0, height: 50, borderWidth: 1, backgroundColor: 'white', borderColor: 'white', justifyContent: 'center', marginLeft: 25, marginRight: 25, paddingLeft: 10}}>
           <Text style = {styles.name}>Carpool Fun</Text>
        </View>

        
      </View>
  );
}

//actually chat screen

function SettingsScreen() {
  return (
    <View style={styles.container}>
        <Text style = { styles.name}> Friends</Text>
        <SectionList
          sections={[
            {title: 'A', data: ['Amy Li', 'Andrea Bush', 'Anthony']},
            {title: 'B', data: ['Bruce Banner', 'Big guy', 'Benjamin', 'Bob', 'Bill', 'Booom', 'Balloon']},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
          keyExtractor={(item, index) => index}
        />
    </View>
  );
}

function ProfileScreen(){
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile!</Text>
    </View>

  )
}

function RoutesScreen(){
  return (
    <View style={styles.container}>
      <Text style = { styles.name}> My Routes</Text>
        <SectionList
          sections={[
            {title: 'C', data: ['Cool Carpool']},
            {title: 'G', data: ['Gamers Carpool', 'Grocery shopping']},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
          keyExtractor={(item, index) => index}
        />
    </View>

  )
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
            } else if (route.name === 'Friends') {
              iconName = focused ? 'ios-chatbubbles' : 'ios-chatbubbles-outline';
            }
            else if(route.name == 'Profile'){
              iconName = focused ? 'ios-body' : 'ios-body-outline';
            }
            else if(route.name == 'My Routes'){
              iconName = focused ? 'ios-car' : 'ios-car-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'black',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Friends" component={SettingsScreen} />
        <Tab.Screen name = "Profile" component = {ProfileScreen}/>
        <Tab.Screen name = "My Routes" component = {RoutesScreen}/>
      </Tab.Navigator>

    // <Tab.Navigator>
    //   <Tab.Screen name="Home" component={HomeScreen} />
    //   <Tab.Screen name="Friends" component={SettingsScreen} />
    //   <Tab.Screen name = "Profile" component = {ProfileScreen}/>
    //   <Tab.Screen name = "My Routes" component = {RoutesScreen}/>
    // </Tab.Navigator>
  );
}



export default function App() {

  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );

}

const styles = StyleSheet.create({


  bubble:{
    flexDirection: 'column',
    alignSelf: 'flex-start',
    backgroundColor: 'white',

    borderRadius: 6,
    borderColor: 'white',

    borderWidth: 0.5,
    padding: 15,
    width: 150,


  },
  name:{
    fontSize: 30,
    marginBottom: 5,

  },

  image:{
    width: 120,
    height: 80,
    marginTop: 5,

  },

  arrowBorder:{
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderTopColor: 'white',
    borderWidth: 16,
    alignSelf: 'center',
    marginTop: -0.5,
    

  },

  arrow:{
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderTopColor: 'white',
    borderWidth: 16,
    alignSelf: 'center',
    marginTop: -32,


  },



 container: {
   flex: 1,
   paddingTop: 22
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    color: '#708090',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
