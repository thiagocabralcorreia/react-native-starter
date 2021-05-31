import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles/styles';

const BoxScreen = () => {
    return (
        <View style={styles.boxView}>
            <Text style={styles.title}>FlexBox</Text>
            <View style={styles.boxContainer}>
                <View style={styles.squareOneStyle}></View>
                <View style={styles.squareTwoStyle}></View>
            </View>
            <View style={styles.squareThreeStyle}></View>
            <View style={styles.squareFourStyle}></View>
        </View>
    )
};

export default BoxScreen;