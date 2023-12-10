import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { History, Main, Profile } from '../tabs';
import { BottomNav } from '../components';

const Tab = createBottomTabNavigator();

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Mahdy Mubasyir</Text>
      <Tab.Navigator tabBar={(props) => <BottomNav {...props} />}>
        <Tab.Screen name='Main' component={Main} />
        <Tab.Screen name='History' component={History} />
        <Tab.Screen name='Profile' component={Profile} />
      </Tab.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
  },
});
