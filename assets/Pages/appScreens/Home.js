import React from 'react';
import {Button, Text, View} from 'react-native';

const Home = (props) => (
  <View>
    <Text>Home</Text>
    <Button
      onPress={() => {
        props.navigation.navigate('Details');
      }}
      title="Details"></Button>
  </View>
);

export default Home;
