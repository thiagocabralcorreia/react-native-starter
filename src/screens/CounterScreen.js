import React, { useState } from 'react';
import { SafeAreaView, View, Text, Button } from 'react-native';
import styles from './styles/styles';

const CounterScreen = () => {
    const [counter, setCounter] = useState(0);

    return (
        <SafeAreaView styles={styles.container}>
            <Text style={styles.title}>Current Count:</Text>
            <View style={styles.buttonContainer}>
                <Button
                title='Increase'
                onPress={() => {setCounter(counter + 1)}}
                />
            </View>
            <View style={styles.buttonContainer}>
                <Button
                title='Decrease'
                onPress={() => {setCounter(counter - 1)}}
                />
            </View>
            <Text style={styles.number}>{counter}</Text>
        </SafeAreaView>
    )
};

export default CounterScreen;