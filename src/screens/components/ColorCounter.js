import React from 'react';
import { View, Text, Button } from 'react-native';
import styles from '../styles/styles';

const ColorCounter = ({ color, onIncrease, onDecrease }) => {
    return (
        <View style={styles.colorCounter}>
            <Text style={styles.title}>{color}</Text>
            <View style={styles.buttonContainer}>
                <Button onPress={() => onIncrease()} title={`Increase ${color}`}/>
            </View>
            <View style={styles.buttonContainer}>
                <Button onPress={() => onDecrease()} title={`Decrease ${color}`}/>
            </View>
        </View>
    )
};

export default ColorCounter;