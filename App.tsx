import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const App: React.FC = () => {
  return (
    <View testID="welcome" style={styles.container}>
      <Text testID="hello_button" style={styles.text}>
        Hello, World!
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default App;
