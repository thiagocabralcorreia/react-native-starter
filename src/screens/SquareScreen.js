import React, { useReducer } from 'react';
import { View, Text, ScrollView } from 'react-native';
import ColorCounter from './components/ColorCounter';
import styles from './styles/styles';

const COLOR_INCREMENT = 15;

const reducer = (state, action) => {
    switch (action.type) {
        case 'change_red':
            return state.red + action.payload > 255 || state.red + action.payload < 0
            ? state
            : { ...state, red: state.red + action.payload};
        case 'change_green':
            return state.green + action.payload > 255 || state.green + action.payload < 0
            ? state
            : { ...state, green: state.green + action.payload};
        case 'change_blue':
            return state.blue + action.payload > 255 || state.blue + action.payload < 0
            ? state
            : { ...state, blue: state.blue + action.payload};
    }
}

const SquareScreen = () => {
    const[state, dispatch] = useReducer(reducer, { red:0, green:0, blue:0 });
    const { red, green, blue} = state;
 
    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={styles.title}>Reducer</Text>
                <ColorCounter
                color="Red"
                onIncrease={() => dispatch({ type: 'change_red', payload: COLOR_INCREMENT })}
                onDecrease={() => dispatch({ type: 'change_red', payload: -1 * COLOR_INCREMENT })}
                />
                <ColorCounter
                color="Green"
                onIncrease={() => dispatch({ type: 'change_green', payload: COLOR_INCREMENT })}
                onDecrease={() => dispatch({ type: 'change_green', payload: -1 * COLOR_INCREMENT })}
                />
                <ColorCounter
                color="Blue"
                onIncrease={() => dispatch({ type: 'change_blue', payload: COLOR_INCREMENT })}
                onDecrease={() => dispatch({ type: 'change_blue', payload: -1 * COLOR_INCREMENT })}
                />
                <View style={styles.square}>
                    <View style={{
                        height: 150,
                        width: 150,
                        backgroundColor: `rgb(${state.red}, ${state.green}, ${state.blue})`}}/>
                    </View>
            </ScrollView>
        </View>
    )
};

export default SquareScreen;