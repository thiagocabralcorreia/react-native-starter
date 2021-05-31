import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },

    title: {
        fontSize: 30,
        alignSelf: 'center',
        marginBottom: 15,
    },

    simpleText: {
        marginTop: 10,
        marginBottom: 10
    },

    buttonContainer: {
        width: 300,
        margin: 7,
        alignSelf: 'center',
        color: '#FFF'
    },

    flatList: {
        margin: 10,
    },

    list: {
        fontSize: 20,
        alignSelf: 'center',
        marginBottom: 15,
    },

    legend: {
        fontStyle: 'italic',
        marginBottom: 10,
    },

    number: {
        fontSize: 100,
        alignSelf: 'center',
        marginBottom: 15,
    },

    square: {
        marginTop: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },

    colorCounter: {
        marginBottom: 15
    },

    inputContainer: {
        margin: 20,
    },

    input: {
        borderColor: 'black',
        borderWidth: 1
    },

    boxView: {
        padding: 20,
        height: 200,
    },

    boxContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    squareOneStyle: {
        backgroundColor: 'red',
        alignSelf: 'flex-start',
        height: 50,
        width: 50,
    },

    squareTwoStyle: {
        backgroundColor: 'blue',
        alignSelf: 'flex-end',
        height: 50,
        width: 50,
    },

    squareThreeStyle: {
        backgroundColor: 'green',
        alignSelf: 'center',
        height: 50,
        width: 50,
        
    },
    squareFourStyle: {
        backgroundColor: 'purple',
        alignSelf: 'stretch',
        top: 50,
        height: 50,
    },
})

export default styles;