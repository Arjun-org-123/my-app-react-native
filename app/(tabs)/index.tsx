import { Images } from "@/constants/images";
import React from "react";
import {
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
        <ImageBackground
          source={Images.background}
          style={styles.image}
          resizeMode="cover"
        >
          <View style={styles.overlay}>
            <Image source={Images.logo} alt="Logo" style={styles.logo} resizeMode="contain" />
          <Text style={styles.heading}>
            Your Daily Cup, Just a Tap Away
          </Text>
          <Text style={styles.pera}>
            Discover your favorite flavors, make your coffee truly yours, and enjoy seamless ordering for pickup or delivery.
          </Text>
          <TouchableOpacity style={styles.button} onPress={() => console.log("Get Started Pressed")}>
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
          </View>
        </ImageBackground>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    position: "relative",
  },
  background: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    zIndex: 1,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    color: 'white',
    padding: 20,
    zIndex: 2,
    justifyContent: 'flex-end',
    paddingBottom: 120,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 10,
    alignSelf: 'center',
    zIndex: 2,
    borderRadius: 50,
  },
  heading: {
    color: 'white',
    fontSize: 28,
    fontFamily: 'sora-bold',
    textAlign: 'center'
  },
  pera: {
    color: 'white',
    opacity: 0.8,
    fontSize: 15,
    marginTop: 10,
    fontFamily: 'sora-regular',
    textAlign: 'center'
  },
  button: {
    backgroundColor: '#aa734bff',
    padding: 15,
    borderRadius: 10,
    marginTop: 20
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'sora-medium',
    textAlign: 'center',
    color: 'white',
  },
});
