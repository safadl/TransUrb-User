import React, { Component, useState } from 'react';
 import {Alert,Text,Image,View, Dimensions,ScrollView, ImageBackground,Button,TouchableOpacity,StatusBar,TextInput, Platform,StyleSheet} from 'react-native'
 //import styles from '../styles/component_styles/styles';
 import IonIcons from 'react-native-vector-icons/Ionicons';
 import LinearGradient from 'react-native-linear-gradient';
 import PhoneInput from 'react-native-phone-input'
 import {Picker} from '@react-native-community/picker';
 import ImagePicker from 'react-native-image-picker';
 import Upload from 'react-native-background-upload'
 import {useSelector,useDispatch} from 'react-redux'
 import { change_attestation,change_photo,change_typeab,change_etab,change_identif } from '../redux/actions/actionCreators';


 function InfosPerso2({navigation}){
  const data=useSelector((state)=>state);
  const dispatch=useDispatch()
  const {name,surname,date,typeab,location,photo,tel,email,etab,identif,attest}=data;
  const [myphoto,setPhoto]=useState('')
      // state = {
      //   avatarSource: null,
      //   videoSource: null,
      //   uploadId: null,
      //   typeab:'Carte Moki',
      //   etabl:'',
      //   photo:'',
      //   attest:'',
      //   identif:'Carnet de liaison',
      //   fileName:'',
         


      // };
    
      // constructor(props) {
      //   super(props);
    
      //   this.selectPhotoTapped = this.selectPhotoTapped.bind(this);
      // }

     checkTextInput = () => {
        //Check for the Name TextInput
        if (typeab==""||etab==""||identif==""||photo==""||attest=="") {
      
            Alert.alert('Erreur','Veuillez remplir tous les champs obligatoires',[ {
            text: 'Close',
            onPress: () => console.log('Cancel Pressed'),
            style: 'Ok',
           
            
          }],
          {cancelable: true},);
        }
        else {
            this.props.navigation.navigate('Infos3')

        }
   
    }
      startUpload = (opts) => {
        Upload.getFileInfo(opts.path).then((metadata) => {
          const options = Object.assign({
            method: 'POST',
            headers: {
              'content-type': metadata.mimeType // server requires a content-type header
            }
          }, opts)
    
          Upload.startUpload(options).then((uploadId) => {
            console.log(`Upload started with options: ${JSON.stringify(options)}`)
            this.setState({ uploadId, progress: 0 })
            Upload.addListener('progress', uploadId, (data) => {
              this.handleProgress(+data.progress)
              console.log(`Progress: ${data.progress}%`)
            })
            Upload.addListener('error', uploadId, (data) => {
              console.log(`Error: ${data.error}%`)
            })
            Upload.addListener('completed', uploadId, (data) => {
              console.log('Completed!')
            })
          }).catch(function(err) {
            this.setState({ uploadId: null, progress: null })
            console.log('Upload error!', err)
          })
        })
      }



     selectFile=()=>{
      const options = {
        url: 'https://myservice.com/path/to/post',
        path: 'file://',
        method: 'POST',
        type: 'raw',
        maxRetries: 2,
  
        headers: {
          'content-type': 'application/octet-stream', // Customize content-type
          'my-custom-header': 'Select File'
        },
        // Below are options only supported on Android
        notification: {
          enabled: true
        },
        useUtf8Charset: true
      }
      
      Upload.startUpload(options).then((uploadId) => {
        console.log('Upload started')
        Upload.addListener('progress', uploadId, (data) => {
          console.log(`Progress: ${data.progress}%`)
        })
        Upload.addListener('error', uploadId, (data) => {
          console.log(`Error: ${data.error}%`)
        })
        Upload.addListener('cancelled', uploadId, (data) => {
          console.log(`Cancelled!`)
        })
        Upload.addListener('completed', uploadId, (data) => {
          // data includes responseCode: number and responseBody: Object
          console.log('Completed!')
        })
      }).catch((err) => {
        console.log('Upload error!', err)
      })
      Platform.select({
        ios: () => 'file://' + image.path,
        android: () => image.path.replace('file://', '')
        })
     }

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
      <ImageBackground imageStyle={{width:Dimensions.get('window').width,height:500,resizeMode:'stretch'}} style={{width:Dimensions.get('window').width,height:Dimensions.get('window').height}} source={require('../assets/images/backa.png')}>
      <TouchableOpacity onPress={()=>navigation.goBack()}>
      <Image source={require('../assets/images/back.png')} style={{width:30,marginLeft:20,marginTop:30,resizeMode:'contain'}}/>
      </TouchableOpacity>
       <ScrollView>
       <StatusBar barStyle="light-content" backgroundColor="transparent" translucent={true}/>
       <Text style={{alignSelf:'center', fontSize:20,color:'white',marginTop:100,marginTop:50}}>Informations personnelles</Text>
       <Text style={{alignSelf:'center',flexDirection:'row',marginTop:20}}><Text style={{fontSize:35,fontWeight:'bold',textAlign:'center',color:'white'}}>02</Text><Text  style={{fontSize:25,color:'rgba(255, 255, 255, 0.5)'}}>/03</Text></Text>
       <ScrollView style={{alignSelf:'center',marginTop:10,marginBottom:20,backgroundColor:'white',width:Dimensions.get('window').width*0.8,height:Dimensions.get('window').height*0.9,shadowColor:'grey',elevation:2,shadowOffset:{width:5,height:2},shadowOpacity:0.6,shadowRadius:15}}>
       <View style={{margin:15}}>
      <Text style={{color:'#195581', fontSize:20}}>Type d'abonnement<Text style={{color:'#2BA7FF', fontSize:18}}>*</Text></Text>
           <Picker 
           mode={"dropdown"}
           selectedValue={typeab}
          style={{height: 50, width: Dimensions.get('window').width*0.72, color:'#1778BD'}}
          itemStyle={{color:'#1778BD'}}
          onValueChange={(value)=>dispatch(change_typeab(value))}
         >
  <Picker.Item color='#1778BD' label="Carte MOKI" value="Carte MOKI" />
  <Picker.Item color='#1778BD' label="Carte " value="carte" />
</Picker>


       </View>
       <View style={{margin:15,marginTop:5}}>
      <Text style={{color:'#195581', fontSize:20}}>Établissement scolaire <Text style={{color:'#2BA7FF', fontSize:18}}>*</Text></Text>
           <TextInput value={etab} onChangeText={(value)=>dispatch(change_etab(value))} clearButtonMode={"always"} blurOnSubmit={true} require={true} style={{marginTop:15,width:Dimensions.get('window').width*0.69, borderColor:'#1778BD',borderWidth:0.8,borderRadius:5}} placeholder='Entrer votre prénom'/>
       </View>


       <View style={{margin:15,marginTop:5}}>
      <Text style={{color:'#195581', fontSize:20}}>Photo d'identité<Text style={{color:'#2BA7FF', fontSize:18}}>*</Text></Text>
<TouchableOpacity  onPress={selectPhotoTapped} style={{alignItems:'center',flexDirection:'row',marginTop:15,width:Dimensions.get('window').width*0.69, borderColor:'#1778BD',borderWidth:0.8,borderRadius:5,height:50}} >
<View style={{margin:2}}>
<Text numberOfLines={2} style={{color:'black',fontSize:12}}>{myphoto}</Text>
</View>

{/* add this!! onPress={this.selectPhotoTapped.bind(this)}  */} 
<TouchableOpacity  onPress={selectPhotoTapped} >
<Image source={require('../assets/images/upload.png')} style={{width:30,height:30, marginLeft:Dimensions.get('window').width*0.60}}/>
{/* <Text style={{color:'red',fontSize:15}}>{photo}</Text> */}
</TouchableOpacity>

</TouchableOpacity>

    </View>

           <View style={{margin:15,marginTop:5}}>

           <Text style={{color:'#195581', fontSize:20}}>Attestation de scolarité <Text style={{color:'#2BA7FF', fontSize:18}}>*</Text></Text>

           <TouchableOpacity style={{justifyContent:'center',alignItems:'center',flexDirection:'row',marginTop:15,width:Dimensions.get('window').width*0.69, borderColor:'#1778BD',borderWidth:0.8,borderRadius:5,height:50}} >
{/* <Icon.Button style={styles.icon} backgroundColor='transparent'  size={24} color="#195581" name="image" onPress={this.selectPhotoTapped.bind(this)} /> */}
{/*  add this !!!! onPress={()=>this.selectFile} */}
<TouchableOpacity  >
<Image source={require('../assets/images/file.png')} style={{width:30,height:30, marginLeft:Dimensions.get('window').width*0.60}}/>
</TouchableOpacity>
</TouchableOpacity>      
     </View>
     

       <View style={{margin:15,marginTop:5}}>
      <Text style={{color:'#195581', fontSize:20}}>Identification<Text style={{color:'#2BA7FF', fontSize:18}}>*</Text></Text>
      <Picker 
           mode={"dropdown"}
           selectedValue={identif}
          style={{height: 50, width: Dimensions.get('window').width*0.72, color:'#1778BD'}}
          itemStyle={{color:'#1778BD'}}
          onValueChange={(value)=>dispatch(change_identif(value))}

  >
      <Picker.Item color='#1778BD' label="CIN" value="CIN" />
  <Picker.Item color='#1778BD' label="Carnet de liaison" value="Carnet de liaison" />
  <Picker.Item color='#1778BD' label="Carte étudiant" value="Carte étudiant" />

</Picker>
       </View>
       {/* add this !!! onPress={this.checkTextInput} */}
       <TouchableOpacity onPress={()=>navigation.navigate('Donnees')} style={{backgroundColor:'#168F62',justifyContent:'center', margin:10,marginTop:50,height:70,resizeMode:'contain',borderRadius:8}}>
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