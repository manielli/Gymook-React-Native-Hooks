import React from 'react'
import {
    View,
    Text,
    ActivityIndicator
} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

const Spinner = (props) => {
    return (
        <View style={styles.container} >
            <LinearGradient
                style={[styles.container, styles.activityIndicator]}
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
        </View>
    )

}

const styles = {
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fff',
    },
    activityIndicator: {
        width: '100%',
        height: '100%',
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
  