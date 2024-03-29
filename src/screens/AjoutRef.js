import React, { Component, useState } from 'react';
 import {Text,Image,View, Dimensions,ScrollView, ImageBackground,Button,TouchableOpacity,StatusBar,TextInput, Platform,StyleSheet} from 'react-native'

import { change_ref } from '../redux/actions/actionCreators';

import {useSelector,useDispatch} from 'react-redux'




function AjoutRef({navigation}){
   
  const data=useSelector((state)=>state); //get states from redux
  const dispatch=useDispatch()
  const {ref}=data; // get data.ref

return(
    <ScrollView style={{backgroundColor:'white'}} > 
        
      <ImageBackground imageStyle={{width:Dimensions.get('window').width,height:Dimensions.get('window').height*0.65,resizeMode:'stretch'}} style={{width:Dimensions.get('window').width,height:Dimensions.get('window').height}} source={require('../assets/images/backa.png')}>
      <TouchableOpacity onPress={()=>navigation.goBack()}>
      <Image source={require('../assets/images/back.png')} style={{width:30,marginLeft:20,marginTop:30,resizeMode:'contain'}}/>
      </TouchableOpacity>
       <ScrollView>
       <StatusBar barStyle="light-content" backgroundColor="transparent" translucent={true}/>
       <Text style={{alignSelf:'center', fontSize:20,color:'white'}}>Suivi d'abonnement</Text>
       <ScrollView style={{alignSelf:'center',marginTop:20,marginBottom:20,backgroundColor:'white',width:Dimensions.get('window').width*0.8,shadowColor:'grey',elevation:2,shadowOffset:{width:5,height:2},shadowOpacity:0.6,shadowRadius:15}}>
     
       <View style={{marginTop:30,marginLeft:18}}>
        <Text style={{fontSize:15,color:'#0C3C5F'}}>
        Référence
        </Text>
        </View>

       <TextInput secureTextEntry={true} value={ref} onChangeText={(value)=>dispatch(change_ref(value))}  style={{alignSelf:'center',marginTop:30,width:Dimensions.get('window').width*0.72, borderColor:'rgba(23,120,189,0.3)',borderWidth:0.8,borderRadius:2}}/>
       <TouchableOpacity>
       <Text style={{fontSize:12,color:'#0C3C5F',textAlign:'right',margin:16}} >Référence oublié ?</Text>
       </TouchableOpacity>
       <TouchableOpacity onPress={()=>navigation.navigate('Donnees')} style={{backgroundColor:'#168F62',justifyContent:'center', margin:10,marginTop:50,height:70,resizeMode:'contain',borderRadius:8}}>
        <Text style={{fontSize:30,alignSelf:'center',color:'white'}}>Confirmer</Text>
       </TouchableOpacity>

       </ScrollView>
        </ScrollView>

      </ImageBackground>

     
        
    
  
      </ScrollView>
)
 }

 const styles=StyleSheet.create({
  inputContainer: {
    flexDirection:'row'
  },
  input: {
    height: 50,
  },
  icon: {
   // position: 'absolute',
  
    color:'red',
    
  }
 })
 export default AjoutRef;