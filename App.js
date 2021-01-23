import React from 'react';
import {StyleSheet} from 'react-native';
import colors from './assets/colors/colors';
// Import screens here
import {Home, Details, Liked, Profile} from './assets/Pages/index';
// Navigation
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
// tab navigator setup
const TabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: styles.toolBar,
        activeTintColor: colors.Orange,
        inactiveTintColor: colors.Gray,
        labelStyle: styles.label,
      }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Like" component={Liked} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};
// main container (stack containing above tab navigator)
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode={false}>
        <Stack.Screen name="Tab" component={TabNavigator} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const styles = StyleSheet.create({
  toolBar: {},
  label: {
    fontSize: 20,
  },
});
export default App;
