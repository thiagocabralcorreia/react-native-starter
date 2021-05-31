import React, { useState } from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import styles from './styles/styles';

const ColorScreen = () => {
    const[colors, setColors] = useState([]);

    const randomRgb = () => {
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);

        return `rgb(${red}, ${green}, ${blue})`
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Colors with useState</Text>
            <View style={styles.buttonContainer}>
                <Button
                    title="Add a color"
                    onPress={() => setColors([...colors, randomRgb()])}/>
            </View>
            <FlatList
                data={colors}
                showsVerticalScrollIndicator={false} 
                keyExtractor={item => item}
                renderItem={({ item }) => {
                    return (
                     <View
                     style={{ height: 100, width: 100, backgroundColor: item }} />
                    )
                }}
            />
        </View>
    )
};

export default ColorScreen;