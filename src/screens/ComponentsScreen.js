import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ComponentsScreen = () => {
    const name = 'Thiago';
  return (
    <View>
        <Text style={styles.title}>Get started with React Native!</Text>
        <Text style={styles.subtitle}>Hi there. I'm {name}.</Text>
    </View>
    )
};

const styles = StyleSheet.create({
  title: {
    fontSize: 45
  },
  subtitle: {
    fontSize: 20
  }
});

export default ComponentsScreen;
