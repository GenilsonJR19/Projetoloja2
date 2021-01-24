import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {css} from '../assets/css/Css'

export default function Home(Props){

    console.log(Props);
    return(
        <View style={css.container2}>
         <TouchableOpacity style={css.button__home}onePress={()=> navegation.navegate('Login')}>
           <Image source={require('../assets/img/BUTTONLogin.png')}/>
         </TouchableOpacity>

         <TouchableOpacity onePress={()=> navegation.navegate('Cadastro')}>
           <Image source={require('../assets/img/BUTTONCadastro.png')}/>
         </TouchableOpacity>
        
        
        
        
        
        </View>
  
  
    )
    
    


}

  
  