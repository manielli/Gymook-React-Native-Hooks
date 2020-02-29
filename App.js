import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import { StyleSheet, Text, View } from 'react-native';

const useStyles = makeStyles({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
})

export default function App() {
  const classes = useStyles()

  return (
    <View className={classes.container} >
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
}