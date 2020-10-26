import React from 'react';
 import {Text,Image,View, Dimensions,ScrollView, ImageBackground,Button,TouchableOpacity,StatusBar,TextInput, Platform,Alert,StyleSheet} from 'react-native'
 import {useSelector,useDispatch} from 'react-redux'


 function Attente({navigation}){

  const data=useSelector((state)=>state);
  const dispatch=useDispatch()
  const {photo,name}=data;
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
    {/* put profile image here  */}
    {photo==null?<Image  source={require('../assets/images/picture.png')} style={{borderRadius:50,width:99,resizeMode:'contain'}} /> : <Image  source={photo} style={{borderRadius:50,width:99,height:99,resizeMode:'cover'}} />}
  </View>
 
       <ScrollView style={{zIndex:1,alignSelf:'center',marginTop:80,marginBottom:20,backgroundColor:'white',width:Dimensions.get('window').width*0.8,shadowColor:'grey',elevation:2,shadowOffset:{width:5,height:2},shadowOpacity:0.6,shadowRadius:15}}>
  
      <ScrollView style={{marginTop:50}} >
          <View style={{alignSelf:'center'}}>
      <Text style={{color:'#195581',textAlign:'center'}}>{name}</Text>
  <Text style={{color:'#168F62',textAlign:'center'}}>Etudiant</Text>
  </View>
  <View style={{flexDirection:'row',justifyContent:'center', alignItems:'center', padding:20}}>
               <View style={{backgroundColor:'red',marginRight:5, borderRadius:30, width:15,height:15}} />
               <Text style={{color:'#33333D', fontSize:15}}>En attente de validation</Text>
           </View>
       
           <View style={{margin:15}}>
      <Text style={{color:'#195581', fontSize:15}}>Réference</Text>
  
      <TextInput secureTextEntry={true} onChangeText={(value) => setRef(value)} clearButtonMode={"always"} blurOnSubmit={true} require={true} style={{justifyContent:'center',marginTop:10,backgroundColor:'white',width:Dimensions.get('window').width*0.7,height:50,shadowColor:'#1778BD',elevation:2,shadowOffset:{width:5,height:2},shadowOpacity:0.6,shadowRadius:15,borderRadius:3}} placeholder='Entrer votre prénom'/>

     </View>
     <View style={{margin:15}}>
      <Text style={{color:'#195581', fontSize:15}}>Validité</Text>
   
 <View style={{justifyContent:'center',marginTop:10,backgroundColor:'white',width:Dimensions.get('window').width*0.7,height:50,shadowColor:'#1778BD',elevation:2,shadowOffset:{width:5,height:2},shadowOpacity:0.6,shadowRadius:15,borderRadius:3}}>
      <Text style={{margin:5,color:'#195581',fontSize:15,textAlign:'center'}}>Du 1 janvier 2020 au 31 décembre 2020</Text>
      </View>
     </View>
    

       </ScrollView>
        </ScrollView>

      </ImageBackground>
      
      
 
      </ScrollView>
)
 }
 
 export default Attente;
 