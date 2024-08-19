import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Image
        source={{ uri: 'https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-6/454937946_1287576289289125_7897028907186830200_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeG2E_NBXGpXpdyo1G8tIXqM-ct-fTXMnVb5y359NcydVla1aNYxVXwT4OefQQwm6CxACwryY6wb9jnO2NMnKFK7&_nc_ohc=Z5-Q0qZI-ZYQ7kNvgF7MPrT&_nc_ht=scontent.fdad3-1.fna&oh=00_AYBH8XaH3WYAi1dQBGNebZYtd_RGalJAPeP2A1fDEPfAvg&oe=66C926A6' }} 
        style={styles.logo}
      />
      <Text style={styles.title}>Larry Dev React Native</Text>
      <Text style={styles.description}>
        Study 1 day ....
      </Text>
      <View style={styles.buttonContainer}>
        <Button title="Continue" onPress={() => alert('Yeddd')} />
        <Button title="Give up" onPress={() => alert('Noooo')} />
        <Button title="End" onPress={() => alert('eND')} />
      </View>


      {/* // Footer */}
       <Text style={styles.footer}>
        Design by Lê Bá Trình
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  buttonContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  footer : {
    marginTop : "auto",
    backgroundColor : "blue",
    width : "100%",
    padding : "2%", 
    fontSize: 26,
    textAlign : "center",
    color : "white"
  }
});
