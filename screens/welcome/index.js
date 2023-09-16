import React from 'react';
import { SafeAreaView, View, Text, Image, StyleSheet } from 'react-native';

const WelcomeScreen = () => {
  return <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Welcome to Health & Wellness</Text>
      </View>
      <View style={styles.content}>
        <Image style={styles.image} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />
        <Text style={styles.text}>Your journey to a healthier life starts here.</Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Let's get started!</Text>
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    width: 231,
    height: 32,
    textAlign: "center"
  },
  content: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: 220,
    height: 131
  },
  text: {
    marginTop: 20,
    fontSize: 18,
    textAlign: 'center',
    paddingHorizontal: 10
  },
  footer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  footerText: {
    fontSize: 18,
    color: 'blue'
  }
});
export default WelcomeScreen;