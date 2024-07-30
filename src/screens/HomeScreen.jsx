import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors } from '../utils/colors'
import { useNavigation } from '@react-navigation/native';


export default function HomeScreen() {
  const navigation = useNavigation();

  const handleLogin = () => {
    navigation.navigate("LOGIN");
  };
  const handleSignup = () => {
    navigation.navigate("SIGNUP");
  };
  return (
    <View style= {styles.container}>
      <Image source= {require("../assets/logo.png")} style = {styles.logo}/>
      <Image source= {require("../assets/man.png")} style = {styles.bannerImage}/>
      <Text style = {styles.title}>Lorem ipsum dolor.</Text>
      <Text style = {styles.subtitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore </Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style = {[
          styles.loginButtonWrapper,
          {backgroundColor: colors.primary},
          ]}
          onPress={handleLogin}
          >
          <Text style = {styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {[
          styles.loginButtonWrapper,]}
          onPress={handleSignup}
          >
          <Text style = {styles.signupButtonText}>Sign-up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: "center",
  },
  logo: {
    height: 30,
    width: 140,
    marginVertical: 30,
  },
  bannerImage: {
    marginVertical: 20,
    height: 250,
    width: 231,
  },
  title: {
    fontSize: 40,
    fontFamily: 'Poppins-SemiBold',
    textAlign: 'center',
    paddingHorizontal: 20,
    color: colors.primary,
    marginTop: 30,
  },
  subtitle: {
    fontSize: 16,
    paddingHorizontal: 20,
    textAlign: 'center',
    color: colors.secondary,
    fontFamily: 'Poppins-Medium',
    marginVertical: 15,
  },
  buttonContainer: {
    marginTop: 20,
   flexDirection: "row",
   borderWidth: 2,
   borderColor: colors.primary,
   width: "80%",
   height: 60,
   borderRadius: 100,
  },
  loginButtonWrapper: {
    justifyContent: "center",
    alignItems: "center",
    width: "50%",
    borderRadius: 98,
  },
  loginButtonText: {
    color: colors.white,
    fontSize: 18,
    fontFamily: "Poppins-SemiBold",
  },
  signupButtonText: {
    fontSize: 18,
    fontFamily: "Poppins-SemiBold",
  },
});