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
            <View>
                <LinearGradient
                    style={styles.container}
                    colors={['steelblue','white', 'maroon']}
                >
                    <Text>Gymook</Text>
                    <ActivityIndicator 
                        size='large' 
                        color='#00ff00'
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
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  