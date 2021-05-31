import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import styles from './styles/styles';

const TextScreen = () => {
    const [login, setLogin] = useState('');
    return (
        <View style={styles.inputContainer}>
            <Text style={styles.title}>Input</Text>
            <Text style={styles.simpleText}>Enter login:</Text>
            <TextInput
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            value={login}
            onChangeText={newValue => setLogin(newValue)}
            />
            {login.length < 4 ? <Text style={styles.simpleText}>Login must be at least 4 characters.</Text> : null}
        </View>
    )
};

export default TextScreen;