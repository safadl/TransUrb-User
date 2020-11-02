////TEMPLATE !! 


// import React, {Component} from 'react'
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
// import {Text, View} from 'react-native'
// import {Icon, Button,Provider} from 'react-native-paper'
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// const Tab = createMaterialBottomTabNavigator();

// function Home(){
//     return(
//         <View style={{alignItems:'center', flex:1, justifyContent:'center'}}>
//         <Text>Home screen</Text>
//         </View>
//     )
// }
// function Details(){
//     return(
//         <View style={{alignItems:'center', flex:1, justifyContent:'center'}}>
//         <Text>Details screen</Text>
//         </View>
//     )
// }
// function BottomNavigator(){
// return(
//     <Provider>
// <Tab.Navigator shifting={true}>
//     <Tab.Screen name="Home" component={Home} options={{
//       tabBarColor:'blue',
         
//           tabBarIcon: () => (
//             <MaterialCommunityIcons name="home" color='white'  size={26} />
//           ),
//         }} 
//         />
//     <Tab.Screen       
//  options={{
//           tabBarColor:'tomato',
          
//           tabBarIcon: () => (
//             <MaterialCommunityIcons name="view-list" color='white'  size={26} />
//           ),
//         }}  name="Details" component={Details} />

// </Tab.Navigator>
// </Provider>
// )
// }

// export default BottomNavigator;