import React, { Component, useState } from 'react';
 import {Alert,Text,Image,View, Dimensions,ScrollView, ImageBackground,Button,TouchableOpacity,StatusBar,TextInput, Platform,StyleSheet} from 'react-native'
 //import styles from '../styles/component_styles/styles';
 import {Picker} from '@react-native-community/picker';
 import ImagePicker from 'react-native-image-picker';
 import {useSelector,useDispatch} from 'react-redux'
 import { change_attestation,change_photo,change_typeab,change_etab,change_identif } from '../redux/actions/actionCreators';
 import DocumentPicker from 'react-native-document-picker';


 function InfosPerso2({navigation}){
  const data=useSelector((state)=>state);
  const dispatch=useDispatch()
  const {typeab,photo,etab,identif,attest}=data;
  const [file,setFile]=useState('');
  const [myphoto,setPhoto]=useState('');
     
  

   // function to check if required fields are filled 
   checkTextInput = () => {
    //Check for the Name TextInput
    if (etab==""||photo==null||attest=="") {
  
        Alert.alert('Alerte','Veuillez remplir tous les champs obligatoires',[ {
        text: 'Close',
        onPress: () => console.log('Cancel Pressed'),
        style: 'Ok',
       
        
      }],
      {cancelable: true},);
    }
    else {
    navigation.navigate('Infos3')

    }

}


  //function to upload file (attestation)
     selectOneFile =async ()=> {
        //Opening Document Picker for selection of one file
        try {

          const res = await DocumentPicker.pick({
            type: [DocumentPicker.types.allFiles],
            //There can me more options as well
            // DocumentPicker.types.allFiles
            // DocumentPicker.types.images
            // DocumentPicker.types.plainText
            // DocumentPicker.types.audio
            // DocumentPicker.types.pdf
          });
          //Printing the log realted to the file
          console.log('res : ' + JSON.stringify(res));
          console.log('URI : ' + res.uri);
          console.log('Type : ' + res.type);
          console.log('File Name : ' + res.name);
          console.log('File Size : ' + res.size);
          //Setting the state to show single file attributes
          setFile(res)
          dispatch(change_attestation(res.name))
        } catch (err) {
          //Handling any exception (If any)
          if (DocumentPicker.isCancel(err)) {
            //If user canceled the document selection
            alert("Aucun fichier n'a été sélectionné");
          } else {
            //For Unknown Error
            alert('Unknown Error: ' + JSON.stringify(err));
            throw err;
          }
        }
      }

   
//function to upload the image (photo d'identité)
      selectPhotoTapped=()=> {
        const options = {
          quality: 1.0,
          maxWidth: 500,
          maxHeight: 500,
          storageOptions: {
            skipBackup: true,
          
          },
        };
    
        ImagePicker.showImagePicker(options, response => {
          console.log('Response = ', response);
    
          if (response.didCancel) {
            console.log('User cancelled photo picker');
          } else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
          } else if (response.customButton) {
            console.log('User tapped custom button: ', response.customButton);
          } else {
            let source = {uri: response.uri};
            let name=response.fileName;
            setPhoto(name)
           dispatch(change_photo(source))
         
        }
      });
      Platform.select({
        ios: () => 'file://' + image.path,
        android: () => image.path.replace('file://', '')
        })
     
       
    }


return(
    <ScrollView style={{backgroundColor:'white'}} > 
      <ImageBackground imageStyle={{width:Dimensions.get('window').width,height:Dimensions.get('window').height*0.65,resizeMode:'stretch'}} style={{width:Dimensions.get('window').width,height:Dimensions.get('window').height}} source={require('../assets/images/backa.png')}>
      <TouchableOpacity onPress={()=>navigation.goBack()}>
      <Image source={require('../assets/images/back.png')} style={{width:30,marginLeft:20,marginTop:30,resizeMode:'contain'}}/>
      </TouchableOpacity>
       <ScrollView>
       <StatusBar barStyle="light-content" backgroundColor="transparent" translucent={true}/>
       <Text style={{alignSelf:'center', fontSize:20,color:'white',marginTop:100,marginTop:50}}>Informations personnelles</Text>
       <Text style={{alignSelf:'center',flexDirection:'row',marginTop:20}}><Text style={{fontSize:35,fontWeight:'bold',textAlign:'center',color:'white'}}>02</Text><Text  style={{fontSize:25,color:'rgba(255, 255, 255, 0.5)'}}>/03</Text></Text>
       <ScrollView style={{alignSelf:'center',marginTop:10,marginBottom:20,backgroundColor:'white',width:Dimensions.get('window').width*0.8,shadowColor:'grey',elevation:2,shadowOffset:{width:5,height:2},shadowOpacity:0.6,shadowRadius:15}}>
       <View style={{margin:15,marginTop:5}}>
      <Text style={{color:'#195581', fontSize:20}}>Type d'abonnement<Text style={{color:'#2BA7FF', fontSize:18}}>*</Text></Text>
           <Picker 
           mode={"dropdown"}
           selectedValue={typeab}
          style={{width:Dimensions.get('window').width*0.69, color:'#1778BD'}}
          itemStyle={{color:'#1778BD'}}
          onValueChange={(value)=>dispatch(change_typeab(value))}
         >
  <Picker.Item color='#1778BD' label="Carte MOKI" value="Carte MOKI" />
  <Picker.Item color='#1778BD' label="Carte " value="carte" />
</Picker>

       </View>
       <View style={{margin:15,marginTop:5}}>
      <Text style={{color:'#195581', fontSize:20}}>Établissement scolaire <Text style={{color:'#2BA7FF', fontSize:18}}>*</Text></Text>
           <TextInput onSubmitEditing={() => {Photo.focus(); }}returnKeyType = {"next"}  value={etab} onChangeText={(value)=>dispatch(change_etab(value))} clearButtonMode={"always"} blurOnSubmit={true} require={true} style={{marginTop:15,width:Dimensions.get('window').width*0.69,height:Dimensions.get('window').height*0.085, borderColor:'#1778BD',borderWidth:0.8,borderRadius:5}} placeholder='Entrer le nom de votre établissement'/>
       </View>


       <View style={{margin:15,marginTop:5}}>
      <Text style={{color:'#195581', fontSize:20}}>Photo d'identité<Text style={{color:'#2BA7FF', fontSize:18}}>*</Text></Text>
<TouchableOpacity ref={(input) => {Photo = input; }} 
  onPress={selectPhotoTapped} style={{alignItems:'center',flexDirection:'row',marginTop:15,width:Dimensions.get('window').width*0.69,height:Dimensions.get('window').height*0.085, borderColor:'#1778BD',borderWidth:0.8,borderRadius:5}} >
<View style={{margin:-5}}>
<Text numberOfLines={2} style={{color:'black',fontSize:12}}>{myphoto}</Text>
</View>

<TouchableOpacity  onPress={selectPhotoTapped} >
<Image source={require('../assets/images/upload.png')} style={{width:30,height:30, marginLeft:Dimensions.get('window').width*0.60}}/>
</TouchableOpacity>

</TouchableOpacity>

    </View>

 <View style={{margin:15,marginTop:5}}>
   <Text style={{color:'#195581', fontSize:20}}>Attestation de scolarité <Text style={{color:'#2BA7FF', fontSize:18}}>*</Text></Text>      
<View>

<TouchableOpacity  onPress={selectOneFile} style={{alignItems:'center',flexDirection:'row',marginTop:15,width:Dimensions.get('window').width*0.69,height:Dimensions.get('window').height*0.085, borderColor:'#1778BD',borderWidth:0.8,borderRadius:5}} >
<View style={{margin:2}}>
<Text numberOfLines={2} style={{color:'black',fontSize:12,marginLeft:7}}>{file.name? 'Nom: ' : ' '} {file.name ?file.name : ''}</Text>
<Text numberOfLines={2} style={{color:'black',fontSize:12,marginLeft:7}}>{file.size? 'Taille : ' : ' '}{file.size? file.size : ''}{file.size? 'KB' : ''}</Text>

</View>

<TouchableOpacity  onPress={selectOneFile} >
<Image source={require('../assets/images/file.png')} style={{width:30,height:30, marginLeft:Dimensions.get('window').width*0.53}}/>
</TouchableOpacity>

</TouchableOpacity>
</View>

     </View>
     

       <View style={{margin:15,marginTop:5}}>
      <Text style={{color:'#195581', fontSize:20}}>Identification<Text style={{color:'#2BA7FF', fontSize:18}}>*</Text></Text>
      <Picker 
           mode={"dropdown"}
           selectedValue={identif}
          style={{height: 50,width:Dimensions.get('window').width*0.69,height:Dimensions.get('window').height*0.085,color:'#1778BD'}}
          itemStyle={{color:'#1778BD'}}
          onValueChange={(value)=>dispatch(change_identif(value))}

  >
      <Picker.Item color='#1778BD' label="CIN" value="CIN" />
  <Picker.Item color='#1778BD' label="Carnet de liaison" value="Carnet de liaison" />
  <Picker.Item color='#1778BD' label="Carte étudiant" value="Carte étudiant" />

</Picker>
       </View>
       <TouchableOpacity onPress={checkTextInput} style={{backgroundColor:'#168F62',justifyContent:'center', margin:10,marginTop:50,height:70,resizeMode:'contain',borderRadius:8}}>
        <Text style={{fontSize:30,alignSelf:'center',color:'white'}}>Continuer</Text>
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
 export default InfosPerso2;