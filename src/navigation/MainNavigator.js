import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import StackNavigator from './StackNavigator';


function MainNavigator(){
return( <>

    <NavigationContainer>
          <StackNavigator />
    </NavigationContainer>
    </>
)
}
export default MainNavigator