import React from 'react'
import { Card, CardSection } from '../components/common'
import { Text } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

const BookingsScreen = ({navigation}) => {
    return (
        <LinearGradient
            style={styles.container}
            colors={['steelblue', 'white', 'maroon']}
        >
            <Card>
                <CardSection>
                    <Text>Bookings</Text>
                </CardSection>
            </Card>
        </LinearGradient>
    )
}

const styles = {
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
    }
}

export { BookingsScreen }