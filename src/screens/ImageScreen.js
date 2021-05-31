import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import ImageDetail from './components/ImageDetail';
import styles from './styles/styles';
const ImageScreen = () => {
    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.title}>Image Components</Text>
                <ImageDetail title="Forest" imageSource={require('../../assets/forest.jpg')}/>
                <ImageDetail title="Beach" imageSource={require('../../assets/beach.jpg')}/>
                <ImageDetail title="Montain" imageSource={require('../../assets/mountain.jpg')}/>
            </View>
        </ScrollView>
    )
};

export default ImageScreen;