import React, { Component, useState,useRef } from 'react';
 import {Text,Image,View, Dimensions,ScrollView, ImageBackground,Button,TouchableOpacity,SafeAreaView,StatusBar,TextInput, Platform,Alert } from 'react-native'
 import DatePicker from 'react-native-datepicker'
 import PhoneInput from "react-native-phone-number-input";
import {useSelector,useDispatch} from 'react-redux'
import { change_date, change_name, change_tel,change_surname,change_email,change_location } from '../redux/actions/actionCreators';
import * as EmailValidator from 'email-validator';
 


const InfosPerso=({navigation,props})=>{
    const data=useSelector((state)=>state);
    const dispatch=useDispatch()
    const {name,surname,date,typeab,location,photo,tel,email,etab,identif,attest}=data;
    const ref_input1 = useRef();
    const ref_input2 = useRef();
   const [FourthTextInput,setFourthText]=useState(false);
   const [value, setValue] = useState('')
   const [valid, setValid] = useState(false);
   const [showMessage, setShowMessage] =useState(false);
   const secondTextInputRef = useRef(null);

  //  const phoneInput = useRef<PhoneInput>(null);
  
  
  //function to check if fields are empty , required fields must be filled
    const checkTextInput = () => {  

        if (name==""||surname==""||date==""||location==""||tel=="") {
      
            Alert.alert('Erreur','Veuillez remplir tous les champs obligatoires',[ {
            text: 'Close',
            onPress: () => console.log('Cancel Pressed'),
            style: 'Ok',
           
            
          }],
          {cancelable: true},);
        }
        else {
            navigation.navigate('Infos2')

        }
   
    }
    const changeState=()=> {
      setFourthText(true)
      console.log('state is '+FourthTextInput)
    }
const checkEmail=(e)=> {

  console.log("value is "+email)
  EmailValidator.validate(e) ? alert('Yes') : alert('No')

 }
return(
    <ScrollView style={{backgroundColor:'white'}} > 
      <ImageBackground imageStyle={{width:Dimensions.get('window').width,height:Dimensions.get('window').height*0.65,resizeMode:'stretch'}} style={{width:Dimensions.get('window').width,height:Dimensions.get('window').height}} source={require('../assets/images/backa.png')}>
      <TouchableOpacity onPress={()=>navigation.goBack()}>
      <Image source={require('../assets/images/back.png')} style={{width:30,marginLeft:20,marginTop:30,resizeMode:'contain'}}/>
      </TouchableOpacity>
       <ScrollView >
       
       <StatusBar barStyle="light-content" backgroundColor="transparent" translucent={true}/>
      
       <Text style={{alignSelf:'center', fontSize:20,color:'white',marginTop:50}}>Informations personnelles</Text>
       <Text style={{alignSelf:'center',flexDirection:'row',marginTop:20}}><Text style={{fontSize:35,fontWeight:'bold',textAlign:'center',color:'white'}}>01</Text><Text  style={{fontSize:25,color:'rgba(255, 255, 255, 0.5)'}}>/03</Text></Text>
       <ScrollView style={{alignSelf:'center',marginTop:10,marginBottom:20,backgroundColor:'white',width:Dimensions.get('screen').width*0.8,shadowColor:'grey',elevation:2,shadowOffset:{width:5,height:2},shadowOpacity:0.6,shadowRadius:15}}>
       <View style={{margin:15}}>
      <Text style={{color:'#195581', fontSize:20}}>Nom<Text style={{color:'#2BA7FF', fontSize:18}}>*</Text></Text>
           <TextInput onSubmitEditing={() => {secondTextInput.focus(); }} returnKeyType = {"next"} value={name} onChangeText={(value)=>dispatch(change_name(value))} clearButtonMode={"always"} blurOnSubmit={false} require={true} style={{marginTop:15,width:Dimensions.get('window').width*0.69,height:Dimensions.get('window').height*0.085, borderColor:'#1778BD',borderWidth:0.8,borderRadius:5}} placeholder='Entrer votre Nom'/>
       </View>
       <View style={{margin:15,marginTop:5}}>
      <Text style={{color:'#195581', fontSize:20}}>Prénom<Text style={{color:'#2BA7FF', fontSize:18}}>*</Text></Text>
           <TextInput onSubmitEditing={() => {ThirdTextInput.focus(); }} ref={(input) => {secondTextInput = input; }} returnKeyType = {"next"}  value={surname} onChangeText={(value)=>dispatch(change_surname(value))} clearButtonMode={"always"} blurOnSubmit={false} require={true} style={{marginTop:15,width:Dimensions.get('window').width*0.69,height:Dimensions.get('window').height*0.085, borderColor:'#1778BD',borderWidth:0.8,borderRadius:5}} placeholder='Entrer votre prénom'/>
       </View>
       <View style={{margin:15,marginTop:5}}>
      <Text style={{color:'#195581', fontSize:20}}>Email</Text>
      {/* onSubmitEditing={(e) => checkEmail(e)}  */}
           <TextInput ref={(input) => {ThirdTextInput = input; }}returnKeyType = {"next"} value={email} onChangeText={(value)=>dispatch(change_email(value))} clearButtonMode={"always"} blurOnSubmit={true} require={true} style={{marginTop:15,width:Dimensions.get('window').width*0.69,height:Dimensions.get('window').height*0.085, borderColor:'#1778BD',borderWidth:0.8,borderRadius:5}} placeholder='Entrer votre email'/>
       </View>
       <View style={{margin:15,marginTop:5}}>
      <Text  style={{color:'#195581', fontSize:20}}>N° de téléphone<Text style={{color:'#2BA7FF', fontSize:18}}>*</Text></Text>
         <TouchableOpacity returnKeyType={"next"}>
           <PhoneInput
           autoFocus={FourthTextInput==true ? true : false}
            returnKeyType= "next"
            blurOnSubmit={true}
            onSubmitEditing={changeState}
            value={tel}
            defaultCode="GA"
            onChangeFormattedText={(value)=>dispatch(change_tel(value))}
            textInputStyle={{height:Dimensions.get('window').height*0.08}}
            textInputProps={{fontSize:12}}
            containerStyle={{marginTop:15,height:50,borderWidth:0.8,borderRadius:5,width:Dimensions.get('window').width*0.69,height:Dimensions.get('window').height*0.085, borderColor:'#1778BD',}}
            withDarkTheme   
          />
          </TouchableOpacity>

</View>

       <View style={{margin:15}}>
      <Text style={{color:'#195581', fontSize:20}}>Date de naissance<Text style={{color:'#2BA7FF', fontSize:18}}>*</Text></Text>
  
          
           <DatePicker
           focus={FourthTextInput}
           returnKeyType="next"
           placeholder="Entrer date"
           customStyles={{datePicker:{backgroundColor:'black', borderColor:'white'}}}
             style={{marginTop:15,width:Dimensions.get('window').width*0.69}}
             date={date}
             mode="date"
             format="DD-MM-YYYY"
             minDate="01-01-1900"
             confirmBtnText="Confirm"
             cancelBtnText="Cancel"
             customStyles={{
             btnConfirm:{color:'#785412'},
            dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36,
            borderColor:'#1778BD',borderWidth:0.8,borderRadius:5,
            height:50
            
          },
        }}
        onDateChange={(value)=>dispatch(change_date(value))}
      />
       
       </View>
       
       <View style={{margin:15}}>
      <Text style={{color:'#195581', fontSize:20}}>Lieu de résidence<Text style={{color:'#2BA7FF', fontSize:18}}>*</Text></Text>
           <TextInput onSubmitEditing={checkTextInput}  returnKeyType={"done"} enablesReturnKeyAutomatically={true}  value={location} onChangeText={(value)=>dispatch(change_location(value))} blurOnSubmit={true} require={true} style={{marginTop:15,width:Dimensions.get('window').width*0.69,height:Dimensions.get('window').height*0.085,  borderColor:'#1778BD',borderWidth:0.8,borderRadius:5}} placeholder='Entrer votre lieu de résidence'/>
       </View>
       <TouchableOpacity onPress={checkTextInput} style={{backgroundColor:'#168F62',justifyContent:'center', margin:10,height:70,resizeMode:'contain',borderRadius:8}}>
        <Text style={{fontSize:30,alignSelf:'center',color:'white'}}>Continuer</Text>
       </TouchableOpacity>
       {/* <TouchableOpacity onPress={()=>navigation.navigate('Infos2')} style={{backgroundColor:'#168F62',justifyContent:'center', margin:10,height:70,resizeMode:'contain',borderRadius:8}}>
        <Text style={{fontSize:30,alignSelf:'center',color:'white'}}>info2</Text>
       </TouchableOpacity> */}
       </ScrollView>
        </ScrollView>

      </ImageBackground>

      </ScrollView>
)
 }
 export default InfosPerso;