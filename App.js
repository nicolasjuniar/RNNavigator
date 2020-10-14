/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import BottomTab from './src/BottomTab';
import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

const App: () => React$Node = () => {
    return (
        <NavigationContainer>
            <StatusBar barStyle="dark-content"/>
            <BottomTab/>
        </NavigationContainer>
    );
};

export default App;
