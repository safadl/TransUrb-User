////// TEMPLATE !!! 

// import React, { Component } from 'react';
// import {createDrawerNavigator} from '@react-navigation/drawer'
// import {createStackNavigator}  from '@react-navigation/stack'
// import Icon from 'react-native-vector-icons/Ionicons';
// import {Dimensions} from 'react-native'
// import Buttons from '../components/Buttons'
// import Lists from '../components/Lists'
// import Modals from '../components/Modals';
// import StackNavigator from '../navigation/StackNavigator'
// import Pressables from '../components/Pressable'
// import Switches from '../components/Switches';
// import Inputs from '../components/inputs'
// import Cards from '../components/Cards'
// import BottomNavigator from '../navigation/BottomNavigator'
// import TopBars from '../components/TopBars';
// import TopTabNavigator from '../navigation/TopTabNavigator'
// const Drawer = createDrawerNavigator()
// const Stack = createStackNavigator()
// // function MyButtons({navigation}) {
// //   return (
// //     <Stack.Navigator >
// //       <Stack.Screen options={{title: "Buttons",headerBackTitle:'Go back',headerTitleStyle:{marginLeft:Dimensions.get('window').width/4}, headerLeft:()=><Icon onPress={()=>navigation.toggleDrawer()}name="menu" size={30}/>}}  name="Buttons" component={Buttons}  />
// //       <Stack.Screen options={{title: "Lists",headerBackTitle:'Go back',headerTitleStyle:{marginLeft:Dimensions.get('window').width/4}, headerLeft:()=><Icon onPress={()=>navigation.toggleDrawer()}name="menu" size={30}/>}}  name="Lists" component={Lists}  />

// //     </Stack.Navigator>
    
// //   );
// // } 
// // function MyLists({navigation}) {
// //   return (
// //     <Stack.Navigator >
// //       <Stack.Screen options={{title: "Lists",headerBackTitle:'Go back',headerTitleStyle:{marginLeft:Dimensions.get('window').width/4}, headerLeft:()=><Icon onPress={()=>navigation.toggleDrawer()}name="menu" size={30}/>}}  name="Lists" component={Lists}  />

// //     </Stack.Navigator>
    
// //   );
// // } 
// // function MyModals({navigation}) {
// //   return (
// //     <Stack.Navigator >
// //       <Stack.Screen options={{title: "Modal",headerBackTitle:'Go back',headerTitleStyle:{marginLeft:Dimensions.get('window').width/4}, headerLeft:()=><Icon onPress={()=>navigation.toggleDrawer()}name="menu" size={30}/>}}  name="Modals" component={Modals}  />

// //     </Stack.Navigator>
    
// //   );
// // } 

// function DrawerNavigator () {
//         return (
//             <Drawer.Navigator options={{drawerIcon:config=><Icon name="menu"/>}}   >
//                 <Drawer.Screen name="Buttons" component={Buttons}  />
//                 <Drawer.Screen name="Lists" component={Lists}  />
//                 <Drawer.Screen name="Modals" component={Modals}  />
//                 <Drawer.Screen name="Stack navigator" component={StackNavigator}  />
//                 <Drawer.Screen name="Pressables" component={Pressables}  />
//                 <Drawer.Screen name="Switches" component={Switches}  />
//                 <Drawer.Screen name="Inputs" component={Inputs}  />
//                 <Drawer.Screen name="Cards" component={Cards}  />
//                 <Drawer.Screen  name='Bottom Navigator' component={BottomNavigator}/>
//                 <Drawer.Screen  name='Top Bars' component={TopBars}/>
//                 <Drawer.Screen  name='Top Tabs Navigatior' component={TopTabNavigator}/>







//             </Drawer.Navigator>
 
//         );

// }

// export default DrawerNavigator;