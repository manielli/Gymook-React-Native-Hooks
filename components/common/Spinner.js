import React from 'react'
import {
    View,
    Text,
    ActivityIndicator
} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

const Spinner = (props) => {
    return (
        <LinearGradient
            style={styles.container}
            colors={['steelblue','white', 'maroon']}

        >
            <Text style={styles.headerText}>
                Gymook
            </Text>
            <ActivityIndicator 
                size={props.size || 'large'} 
                color={props.color || 'maroon'}
                animating
            />
        </LinearGradient>
    )

}

const styles = {
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'maroon',
        margin: 50,
        fontFamily: 'Helvetica',
        shadowColor: 'maroon',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
    },
  };
  
  export { Spinner }
  