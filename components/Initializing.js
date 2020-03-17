import React,{ Component } from 'react'
import {
    StyleSheet,
    View,
    Text,
    ActivityIndicator
} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'


export default class Initializing extends Component {
    render() {
        return(
            <View style={styles.container} >
                <LinearGradient
                    style={[styles.container, styles.activityIndicator]}
                    colors={['steelblue','white', 'maroon']}

                >
                    <Text>Gymook</Text>
                    <ActivityIndicator 
                        size='large' 
                        color='#000'
                        animating
                    />
                </LinearGradient>
            </View>
        )
    }
}

const styles = StyleSheet.create({
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
  });
  