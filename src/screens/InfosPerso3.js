import React, { Component, useState } from 'react';
 import {Text,Image,View, Dimensions,ScrollView, ImageBackground,Button,TouchableOpacity,StatusBar,TextInput, Platform,StyleSheet} from 'react-native'
 //import styles from '../styles/component_styles/styles';
 import IonIcons from 'react-native-vector-icons/Ionicons';
 import LinearGradient from 'react-native-linear-gradient';
 import PhoneInput from 'react-native-phone-input'
 import {Picker} from '@react-native-community/picker';
 import {useSelector,useDispatch} from 'react-redux'

 import { RadioButton,Card, Title, Paragraph, Modal, Portal, Provider} from 'react-native-paper';

// import Icon from 'react-native-vector-icons/MaterialIcons'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { change_method,change_id } from '../redux/actions/actionCreators';





function InfosPerso3({navigation}){

    const [textInputName, setTextInputName] = useState('');

    const [value, setValue] = React.useState('mobile');
     const [visible, setVisible] = React.useState(false);
     const [Isvisible, setIsVisible] = React.useState(false);
     const [visibleM, setMVisible] = React.useState(false);
     const data=useSelector((state)=>state);
     const dispatch=useDispatch()
     const {method,id}=data;
  const showModal = () => setVisible(true);
  const showIModal = () => setIsVisible(true);
  const showModalM = () => setMVisible(true);
  const hideModalM = () =>{ setMVisible(false) +setIsVisible(true)};

  const hideModal = () => setVisible(false);
  const hideIModal = () => setIsVisible(false);
   const [Textvalue, onChangeValue] = React.useState('');


return(
    <ScrollView style={{backgroundColor:'white'}} > 
        
      <ImageBackground imageStyle={{width:Dimensions.get('window').width,height:Dimensions.get('window').height*0.65,resizeMode:'stretch'}} style={{width:Dimensions.get('window').width,height:Dimensions.get('window').height}} source={require('../assets/images/backa.png')}>
      <TouchableOpacity onPress={()=>navigation.goBack()}>
      <Image source={require('../assets/images/back.png')} style={{width:30,marginLeft:20,marginTop:30,resizeMode:'contain'}}/>
      </TouchableOpacity>
       <ScrollView>
       <StatusBar barStyle="light-content" backgroundColor="transparent" translucent={true}/>
       <Text style={{alignSelf:'center', fontSize:20,color:'white',marginTop:100,marginTop:50}}>Méthode de paiement</Text>
       <Text style={{alignSelf:'center',flexDirection:'row',marginTop:20}}><Text style={{fontSize:35,fontWeight:'bold',textAlign:'center',color:'white'}}>03</Text><Text  style={{fontSize:25,color:'rgba(255, 255, 255, 0.5)'}}>/03</Text></Text>
       <ScrollView style={{alignSelf:'center',marginTop:20,marginBottom:20,backgroundColor:'white',width:Dimensions.get('window').width*0.8,shadowColor:'grey',elevation:2,shadowOffset:{width:5,height:2},shadowOpacity:0.6,shadowRadius:15}}>
       <View style={{marginTop:30}}>
        <Text style={{fontSize:20,color:'#0C3C5F',textAlign:'center'}}>
            Sélectionnez 
        </Text>
<Text style={{fontSize:20,color:'#0C3C5F',textAlign:'center',padding:6}}>votre méthode de paiement</Text>
        </View>
        <View
  style={{
    borderBottomColor: '#354360',
    borderBottomWidth: 0.2,
    width:'80%',
    alignSelf:'center',
    marginTop:20,
    opacity:0.2
  }}
/>

<View style={{marginTop:50,margin:15}}>
    <RadioButton.Group onValueChange={value => dispatch(change_method(value))} value={method} >
      <View style={{flexDirection:'row'}}>
        <RadioButton value="PAIEMENT MOBILE" color='#195581'  />
        <Text style={{color:value=='PAIEMENT MOBILE'?'#195581' :'#9B9B9B' ,fontSize:20,marginTop:3}}>PAIEMENT MOBILE</Text>

      </View>
      <View style={{flexDirection:'row',marginTop:10}}>   
        <RadioButton value="PAIEMENT CASH" color='#195581'  />
        <Text style={{color:value=='PAIEMENT CASH'?'#195581' :'#9B9B9B' ,fontSize:20,marginTop:3}}>PAIEMENT CASH</Text>
      </View>
    </RadioButton.Group>
    </View>

    <Card style={{margin:15,borderRadius:10,elevation:2}}>
    <Card.Content>
      <Paragraph style={{textAlign:'center',fontSize:15,color:'#195581'}}>Dans le cas où vous achetez l’abonnement en tant que agent commercial veuillez entrer votre <Text style={{fontWeight:'bold'}}>identifiant commercial.</Text></Paragraph>
    </Card.Content>
    
  
  </Card>
  
       <TextInput onValueChange={value => dispatch(change_id(value))} value={id}  style={{alignSelf:'center',marginTop:15,width:Dimensions.get('window').width*0.72,height:Dimensions.get('window').height*0.07, borderColor:'rgba(23,120,189,0.3)',borderWidth:0.8,borderRadius:2}}/>

       <TouchableOpacity onPress={showModal} style={{backgroundColor:'#168F62',justifyContent:'center', margin:10,marginTop:50,height:Dimensions.get('window').height*0.1,width:Dimensions.get('window').width*0.75,resizeMode:'contain',borderRadius:8}}>
        <Text style={{fontSize:30,alignSelf:'center',color:'white'}}>Confirmer</Text>
       </TouchableOpacity>

       </ScrollView>
        </ScrollView>

      </ImageBackground>

      <Provider >
    <Portal >
        
      <Modal visible={visible} onDismiss={hideModal} style={{backgroundColor:'red'}} contentContainerStyle={{alignSelf:'center',borderRadius:30,alignSelf:'center'}}>
 
      <View style={{zIndex: 100,marginBottom:-50,justifyContent:'center',backgroundColor:'#fff',width:120,height:100,borderRadius:30,alignSelf:'center',shadowColor:'grey',elevation:2,shadowOffset:{width:5,height:2},shadowOpacity:0.6,shadowRadius:15}}>
        <Image style={{alignSelf:'center',resizeMode:'contain',width:120,height:50}} source={require('../assets/images/transurb.png')}/>
      </View>
       <View style={{borderRadius:30,backgroundColor:'#fff',justifyContent:'center',alignContent:'center', width:Dimensions.get('window').width*0.85,height:Dimensions.get('window').height*0.85, justifyContent:'center'}}>
           <Text style={{margin:5,textAlign:'center',color:'#195581',alignSelf:'center',marginTop:40}}>Vous avez choisi l’abonnement annuelle
                 gratuit avec un cout de construction
               <Text style={{fontWeight:'bold'}}> de 50 euro.</Text> </Text>
               <Text style={{margin:5,textAlign:'center',color:'#195581',alignSelf:'center',fontSize:18}}>Merci de continuer les procédures
              via mobile et assurez vous que
              vous avez le solde suffisant
              pour terminer la transaction.</Text>
        
        <TouchableOpacity onPress={showIModal} style={{backgroundColor:'#168F62',width:220,height:50,borderRadius:6,justifyContent:'center',alignSelf:'center',marginTop:100}}>
         <Text style={{color:'white',alignSelf:'center',fontSize:25,fontWeight:'bold'}}>Continuer</Text>
       </TouchableOpacity>
       </View> 
      </Modal>
   
    </Portal>
    
  </Provider>

  {/* second modal */}
  <Provider >
    <Portal >
        
      <Modal visible={Isvisible} onDismiss={hideIModal} style={{backgroundColor:'red'}} contentContainerStyle={{alignSelf:'center',borderRadius:30}}>
 
      <View style={{zIndex: 100,marginBottom:-50,justifyContent:'center',backgroundColor:'#fff',width:120,height:100,borderRadius:30,alignSelf:'center',shadowColor:'grey',elevation:2,shadowOffset:{width:5,height:2},shadowOpacity:0.6,shadowRadius:15}}>
        <Image style={{alignSelf:'center',resizeMode:'contain',width:120,height:50}} source={require('../assets/images/check.png')}/>
      </View>
       <View style={{borderRadius:30,backgroundColor:'#fff',justifyContent:'center',alignContent:'center', width:Dimensions.get('window').width*0.85,height:Dimensions.get('window').height*0.85,justifyContent:'center'}}>
           <Text style={{margin:5,textAlign:'center',color:'#195581',alignSelf:'center',fontWeight:'bold',fontSize:30}}>
             Confirmation
                </Text>
               <Text style={{margin:5,textAlign:'center',color:'#195581',alignSelf:'center',fontSize:18,fontWeight:'bold'}}>
              Entrer le code envoyé par SMS
              Pour confirmer le paiement</Text>

<TextInput
      style={{marginTop:20,width:Dimensions.get('window').width*0.7, height: 50, borderColor: '#1778BD', borderWidth: 1,opacity:0.5,alignSelf:'center'}}  
      onChange={text => onChangeValue(text)}
    />
        
        <TouchableOpacity onPress={showModalM} style={{backgroundColor:'#168F62',width:220,height:50,borderRadius:6,justifyContent:'center',alignSelf:'center',marginTop:100}}>
         <Text style={{color:'white',alignSelf:'center',fontSize:25,fontWeight:'bold'}}>OK</Text>
       </TouchableOpacity>
       </View> 
      </Modal>
   
    </Portal>
    
  </Provider>
  <Provider >
    <Portal >
        
      <Modal visible={visibleM} onDismiss={hideModalM} style={{backgroundColor:'red'}} contentContainerStyle={{alignSelf:'center',borderRadius:30}}>
 
      <View style={{zIndex: 100,marginBottom:-50,justifyContent:'center',backgroundColor:'#fff',width:120,height:100,borderRadius:30,alignSelf:'center',shadowColor:'grey',elevation:2,shadowOffset:{width:5,height:2},shadowOpacity:0.6,shadowRadius:15}}>
        <Image style={{alignSelf:'center',resizeMode:'contain',width:120,height:50}} source={require('../assets/images/check.png')}/>
      </View>
       <View style={{borderRadius:30,backgroundColor:'#fff',justifyContent:'center',alignContent:'center', width:Dimensions.get('window').width*0.85,height:Dimensions.get('window').height*0.85, justifyContent:'center'}}>
           <Text style={{margin:5,textAlign:'center',color:'#195581',alignSelf:'center',fontWeight:'bold',fontSize:30,marginTop:45}}>
             Merci
                </Text>
               <Text style={{margin:5,textAlign:'center',color:'#195581',alignSelf:'center',fontSize:21,fontWeight:'bold'}}>
               la procédure de paiement est terminée avec succès.
              </Text>
<Text style={{margin:5,marginTop:15,textAlign:'center',color:'#195581',alignSelf:'center',fontSize:21,fontWeight:'bold'}}>Voila votre code ID</Text>
        <Text style={{margin:5,marginTop:15,textAlign:'center',color:'#195581',alignSelf:'center',fontSize:21}}>Liberville...</Text>
        <TouchableOpacity onPress={showModalM} style={{backgroundColor:'#168F62',width:220,height:50,borderRadius:6,justifyContent:'center',alignSelf:'center',marginTop:70}}>
         <Text style={{color:'white',alignSelf:'center',fontSize:25,fontWeight:'bold'}}>OK</Text>
       </TouchableOpacity>
       </View> 
      </Modal>
   
    </Portal>
    
  </Provider>
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
 export default InfosPerso3;