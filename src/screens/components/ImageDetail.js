import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import styles from '../styles/styles';

const ImageDetail = ({ title, imageSource }) => {
    return (
        <View>
            <Image source={imageSource}/>
            <Text style={styles.legend}>{title}</Text>
            
        </View>
    )
};

export default ImageDetail;