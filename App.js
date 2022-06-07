import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Image, TouchableOpacity, Text} from 'react-native';
import Torch from 'react-native-torch';
import RNShake from 'react-native-shake';

const imgLightOn = require('./assets/icons/eco-light.png');
const imgLightOff = require('./assets/icons/eco-light-off.png');
const dioOn = require('./assets/icons/logo-dio.png');
const dioOff = require('./assets/icons/logo-dio-white.png');
const avatarOn = require('./assets/icons/avatar.jpg');
const avatarOff = require('./assets/icons/avatarOff.png');

const App = () => {
  const [toggle, setToggle] = useState(false);
  const handleChangeToggle = () => setToggle(oldToggle => !oldToggle);

  useEffect(() => {
    //liga flash do celular
    Torch.switchState(toggle);
  }, [toggle]);

  useEffect(() => {
    const subscription = RNShake.addListener(() => {
      setToggle(oldToggle => !oldToggle)
    });
    //Essa função vai ser chamada quando componente for ser desmontado
    return () => subscription.remove();
  }, [])

  return ( 
  <View style={toggle ? style.containerLight : style.container}>
    <TouchableOpacity onPress={handleChangeToggle}>  
      <Image 
        style={toggle ? style.lightingOn : style.lightingOff}
        source={ toggle ? imgLightOn : imgLightOff}
        /> 
      <Image 
        style={style.dioLogo}
        source={ toggle ? dioOn : dioOff}
        /> 
    </TouchableOpacity>     
    <Image 
      style={style.avatar}
      source={ toggle ? avatarOn : avatarOff}
    />
    <Text style={toggle ? style.footerOn : style.footerOff}>
      Helena Godoy
    </Text>
    <Text style={toggle ? style.footerDioOn : style.footerDioOff}>
      Digital Innovation One
    </Text>
  </View>
  );
};

export default App;

const style = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },

  containerLight: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },

  lightingOn: {
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 150,
    height: 150,
  },

  lightingOff: {
    resizeMode: 'contain',
    alignSelf: 'center',
    tintColor: 'white',
    width: 150,
    height: 150,
  },

  dioLogo: {
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 250,
    height: 250,
    marginTop: 50,
  },

  avatar: {
    width: 60,
    height: 60,
    alignItems: 'flex-start',
    borderRadius: 35,
    position: 'absolute',
    bottom: 5,
    left: 5,
  },
  
  footerOn: {
    color: 'black',
    position: 'absolute',
    bottom: 25,
    left: 85,
  },

  footerOff: {
    color: 'white',
    position: 'absolute',
    bottom: 25,
    left: 85,
  },

  footerDioOn: {
    color: 'black',
    position: 'absolute',
    bottom: 10,
    left: 280,
    fontSize: 10,
  },

  footerDioOff: {
    color: 'white',
    position: 'absolute',
    bottom: 10,
    left: 280,
    fontSize: 10,
  },
});