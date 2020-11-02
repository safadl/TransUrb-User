import React, { Component, useState } from 'react';
 import {Text,Image,View, Dimensions,ScrollView, ImageBackground,Button,TouchableOpacity,StatusBar,TextInput, Platform,Alert,StyleSheet} from 'react-native'
 import {Modal, Portal, Provider} from 'react-native-paper';
 import {useSelector,useDispatch} from 'react-redux'

 function Donnees({navigation}){
  const [value, setValue] = React.useState('mobile');
  const [visible, setVisible] = React.useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const data=useSelector((state)=>state);
  const dispatch=useDispatch()
  const {name,surname,date,typeab,location,photo,tel,email,etab,identif,attest}=data;
return(


    <ScrollView style={{backgroundColor:'white'}} > 

      <ImageBackground imageStyle={{width:Dimensions.get('window').width,height:Dimensions.get('window').height*0.65,resizeMode:'stretch'}} style={{width:Dimensions.get('window').width,height:Dimensions.get('window').height}} source={require('../assets/images/backa.png')}>
       <TouchableOpacity onPress={()=>navigation.goBack()}>
      <Image source={require('../assets/images/back.png')} style={{width:30,marginLeft:20,marginTop:30,resizeMode:'contain'}}/>
      </TouchableOpacity>
       <StatusBar barStyle="light-content" backgroundColor="transparent" translucent={true}/>
     
 <Text style={{alignSelf:'center', fontSize:20,color:'white',marginTop:50}}>Données abonnements</Text>

<View
    style={{
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      width: 100,
      height: 100,
      alignSelf:'center',
      marginTop:165,
      marginVertical:100,
      borderRadius: 50 ,
      backgroundColor: 'white',
      zIndex: 2,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 0.2,
      shadowRadius: 10,
      elevation: 7,
      borderColor:'#1A9BFE',
      borderWidth:1
    }}
  >

    <Image  source={photo} style={{borderRadius:50,width:99,height:99,resizeMode:'cover'}}/>
  </View>
      
       
       <ScrollView style={{zIndex:1,alignSelf:'center',marginTop:60,marginBottom:20,backgroundColor:'white',width:Dimensions.get('window').width*0.8,height:Dimensions.get('window').height*1.1,shadowColor:'grey',elevation:2,shadowOffset:{width:5,height:2},shadowOpacity:0.6,shadowRadius:15}}>
  
      <ScrollView style={{marginTop:50}} >
        
      <View style={{alignSelf:'center'}}>
      <Text style={{color:'#195581',textAlign:'center'}}>{name} {surname}</Text>
      <Text style={{color:'#168F62',textAlign:'center'}}>Etudiant</Text>
  </View>
       
       <View style={{margin:15}}>
      <Text style={{color:'#195581', fontSize:15}}>Type d’abonnement</Text>
      <View style={{justifyContent:'center',marginTop:10,backgroundColor:'white',width:Dimensions.get('window').width*0.7,height:Dimensions.get('window').height*0.09,shadowColor:'#1778BD',elevation:2,shadowOffset:{width:5,height:2},shadowOpacity:0.6,shadowRadius:15,borderRadius:3}}>

      <Text style={{margin:5,color:'#195581',fontSize:18}}>{typeab}</Text>
      </View>
     </View>
     <View style={{margin:15}}>
      <Text style={{color:'#195581', fontSize:15}}>Email</Text>
      <View style={{justifyContent:'center',marginTop:10,backgroundColor:'white',width:Dimensions.get('window').width*0.7,height:Dimensions.get('window').height*0.09,shadowColor:'#1778BD',elevation:2,shadowOffset:{width:5,height:2},shadowOpacity:0.6,shadowRadius:15,borderRadius:3}}>
      <Text style={{margin:5,color:'#195581',fontSize:18}}>{email}</Text>
      </View>
     </View>

     <View style={{margin:15}}>
      <Text style={{color:'#195581', fontSize:15}}>N° de téléphone</Text>
      <View style={{justifyContent:'center',marginTop:10,backgroundColor:'white',width:Dimensions.get('window').width*0.7,height:Dimensions.get('window').height*0.09,shadowColor:'#1778BD',elevation:2,shadowOffset:{width:5,height:2},shadowOpacity:0.6,shadowRadius:15,borderRadius:3}}>
      <Text style={{margin:5,color:'#195581',fontSize:18}}>{tel}</Text>
      </View>
     </View>
     <View style={{margin:15}}>
      <Text style={{color:'#195581', fontSize:15}}>Date de naissance</Text>
      <View style={{justifyContent:'center',marginTop:10,backgroundColor:'white',width:Dimensions.get('window').width*0.7,height:Dimensions.get('window').height*0.09,shadowColor:'#1778BD',elevation:2,shadowOffset:{width:5,height:2},shadowOpacity:0.6,shadowRadius:15,borderRadius:3}}>
      <Text style={{margin:5,color:'#195581',fontSize:18}}>{date}</Text>
      </View>
     </View>

     <View style={{margin:15}}>
      <Text style={{color:'#195581', fontSize:15}}>Lieu de résidence</Text>
      <View style={{justifyContent:'center',marginTop:10,backgroundColor:'white',width:Dimensions.get('window').width*0.7,height:Dimensions.get('window').height*0.09,shadowColor:'#1778BD',elevation:2,shadowOffset:{width:5,height:2},shadowOpacity:0.6,shadowRadius:15,borderRadius:3}}>
      <Text style={{margin:5,color:'#195581',fontSize:18}}>{location}</Text>
      </View>
     </View>
     <View style={{margin:15}}>
      <Text style={{color:'#195581', fontSize:15}}>établissement scolaire</Text>
      <View style={{justifyContent:'center',marginTop:10,backgroundColor:'white',width:Dimensions.get('window').width*0.7,height:Dimensions.get('window').height*0.09,shadowColor:'#1778BD',elevation:2,shadowOffset:{width:5,height:2},shadowOpacity:0.6,shadowRadius:15,borderRadius:3}}>
      <Text style={{margin:5,color:'#195581',fontSize:18}}>{etab}</Text>
      </View>
     </View>  
     <View style={{margin:15}}>
      <Text style={{color:'#195581', fontSize:15}}>Identification</Text>
      <View style={{justifyContent:'center',marginTop:10,backgroundColor:'white',width:Dimensions.get('window').width*0.7,height:Dimensions.get('window').height*0.09,shadowColor:'#1778BD',elevation:2,shadowOffset:{width:5,height:2},shadowOpacity:0.6,shadowRadius:15,borderRadius:3}}>
      <Text style={{margin:5,color:'#195581',fontSize:18}}>{identif}</Text>
      </View>
     </View> 
     <View style={{margin:15}}>
      <Text style={{color:'#195581', fontSize:15}}>Attestation de scolarité</Text>
      <View style={{justifyContent:'center',marginTop:10,backgroundColor:'white',width:Dimensions.get('window').width*0.7,height:Dimensions.get('window').height*0.09,shadowColor:'#1778BD',elevation:2,shadowOffset:{width:5,height:2},shadowOpacity:0.6,shadowRadius:15,borderRadius:3}}>
      <Text style={{margin:5,color:'#195581',fontSize:18}}>{attest}</Text>
      </View>
     </View> 

       <TouchableOpacity onPress={showModal} style={{backgroundColor:'#168F62',justifyContent:'center', margin:10,height:Dimensions.get('window').height*0.12,resizeMode:'contain',width:Dimensions.get('window').width*0.74,borderRadius:8}}>
        <Text style={{fontSize:30,alignSelf:'center',color:'white'}}>Confirmer</Text>
       </TouchableOpacity>

       </ScrollView>
       {/* <Image  source={require('../assets/images/user.png')} style={{width:100,height:100,borderRadius:50,alignSelf:'center',top:10,position:'absolute'}}/> */}
        </ScrollView>
       

      </ImageBackground>
      <Provider >
    
    <Portal>
      <Modal visible={visible} onDismiss={hideModal} height={100}  contentContainerStyle={{alignSelf:'center',borderRadius:30}}>
 
      <View style={{marginBottom:-50,justifyContent:'center',backgroundColor:'#fff',width:120,height:100,borderRadius:30,alignSelf:'center',shadowColor:'grey',elevation:2,shadowOffset:{width:5,height:2},shadowOpacity:0.6,shadowRadius:15}}>
        <Image style={{alignSelf:'center',resizeMode:'contain',width:120,height:50}} source={require('../assets/images/transurb.png')}/>
      </View>
       <View style={{borderRadius:30,backgroundColor:'#fff',justifyContent:'center',alignContent:'center',width:Dimensions.get('window').width*0.85,height:Dimensions.get('window').height*0.85,justifyContent:'center'}}>
           <Text style={{margin:5,textAlign:'center',color:'#195581',alignSelf:'center'}}>Veuillez confirmer ou modifier
           vos données.</Text>
              
        <View style={{flexDirection:'row',alignSelf:'center',alignItems:'center'}}>
        {/* onPress={navigation.navigate('Infos1')} */}
       <TouchableOpacity onPress={()=>console.log('clicked')}s style={{margin:10,borderColor:'#168F62',borderWidth:2,width:130,height:50,borderRadius:3,justifyContent:'center',alignSelf:'center',marginTop:100}}>
         <Text style={{color:'#168F62',alignSelf:'center',fontSize:18,fontWeight:'bold'}}>Modifier</Text>
       </TouchableOpacity>
       <TouchableOpacity onPress={()=>console.log('clicked')} style={{padding:5,margin:10,backgroundColor:'#168F62',width:130,height:50,borderRadius:3,justifyContent:'center',alignSelf:'center',marginTop:100}}>
         <Text style={{color:'white',alignSelf:'center',fontSize:18,fontWeight:'bold'}}>Valider</Text>
       </TouchableOpacity>
       </View> 
       </View>
      </Modal>
    </Portal>
  </Provider>

      </ScrollView>
)
 }
 
 export default Donnees;
 