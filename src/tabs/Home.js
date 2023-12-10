import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text>testing testing testing</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
