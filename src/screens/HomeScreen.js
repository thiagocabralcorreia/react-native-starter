import React from 'react';
import { SafeAreaView, ScrollView, View, Text, Button } from 'react-native';
import styles from './styles/styles';

const HomeScreen = ( { navigation } ) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>React Native Starter</Text>
        <View style={styles.buttonContainer}>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            onPress={() => navigation.navigate('List')}
            title="Go to List Demo"
            color="#049DD9"/>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            onPress={() => navigation.navigate('Image')}
            title="Go to Image Demo"
            color="#049DD9"/>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            onPress={() => navigation.navigate('Counter')}
            title="Go to Counter Demo"
            color="#049DD9"/>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            onPress={() => navigation.navigate('Color')}
            title="Go to Color Demo"
            color="#049DD9"/>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            onPress={() => navigation.navigate('Square')}
            title="Go to Square Demo"
            color="#049DD9"/>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            onPress={() => navigation.navigate('Text')}
            title="Go to Text Demo"
            color="#049DD9"/>
        </View> 
        <View style={styles.buttonContainer}>
          <Button
            onPress={() => navigation.navigate('Box')}
            title="Go to Box Demo"
            color="#049DD9"/>
        </View>
      </ScrollView>
    </SafeAreaView>
    )
};

export default HomeScreen;
