import React, { Component } from 'react';
import { Button, StyleSheet, View, TextInput, Text } from 'react-native';

import Logo from '../components/Logo';
import FormSignUp from '../components/FormSignUp';

import { useNavigation } from '@react-navigation/native';

export default function Signup1() {

  const navigation = useNavigation();

    function navigateToList() {
        navigation.navigate("Login");
    }

    return (
      <View style={styles.container}>
        <Logo/>
        <FormSignUp/>
         <View style={styles.SingUp}>
          <Text style={styles.SingUpText}>Already have account?</Text>
          <Button style={styles.SingUpLink}
        title="Login"
        onPress={() => navigateToList()} />
         </View> 
                                
      </View>
      

    );
  
}

const styles = StyleSheet.create({
  container: {
    backgroundColor : '#455a64',
    flexGrow: 1,
    alignItems : "center",
    justifyContent: "center" 
  },
  SingUp:{
    flexGrow: 1,
    alignItems:"center",
    justifyContent:"center",
    paddingVertical:30,
    flexDirection:'row'
  },
  SingUpText:{
    color:'rgba(255,255,255,0.7)',
    fontSize:16
  },
  SingUpLink:{
    color:'#ffffff',
    fontSize:16,
    fontWeight:'500'
  }

});
