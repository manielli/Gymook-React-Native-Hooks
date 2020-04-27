import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

const Button = ({ onPress, children }) => {
    const { buttonStyle, textStyle } = styles
    
    return (
        <TouchableOpacity onPress={onPress} style={buttonStyle} >
            <Text style={textStyle} >{children}</Text>
        </TouchableOpacity>
    )
}

const styles = {
    textStyle: {
        alignSelf: 'center',
        // color: '#007aff',
        color: '#fff',
        fontSize: 20,
        fontWeight: '500',
        paddingTop: 15,
        paddingBottom: 15
    },
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#000',
        borderRadius: 25,
        // borderWidth: 1,
        // borderColor: '#007aff',
        // marginLeft: 5,
        // marginRight: 5
    }
}

export { Button }
