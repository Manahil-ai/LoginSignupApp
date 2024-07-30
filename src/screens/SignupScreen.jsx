import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../utils/colors';
import Ionicons from "react-native-vector-icons/Ionicons";
import { Image } from 'react-native';
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import { useNavigation } from '@react-navigation/native';

const SignupScreen = () => {
    const navigation = useNavigation();
    const [secureEntry, setSecureEntry] = useState(true);

    const handleGoBack = () => {
        navigation.goBack();
    }

    const handleLogin = () => {
        navigation.navigate("LOGIN");
    }

  return (
    <View style = {styles.container}>
      <TouchableOpacity style = {styles.backButtonWrapper} 
      onPress={handleGoBack}
      >
       <Ionicons 
       name ={"arrow-back-outline"} 
       color = {colors.primary}
       size = {25}
       />
      </TouchableOpacity>
    <View style = {styles.textContainer}>
        <Text style = {styles.headingText}>Let's get</Text>
        <Text style = {styles.headingText}>Started</Text>
    </View>
    
    <View style = {styles.formContainer}>
        <View style = {styles.inputContainer}>
            <Ionicons name={"mail-outline"} size = {30} color = {colors.secondary}/>
        <TextInput style= {styles.TextInput}
        placeholder='Enter your email'
        placeholderTextColor={colors.secondary}
        keyboardType='email-address'
        />    
        </View>
        <View style = {styles.inputContainer}>
            <SimpleLineIcons name={"screen-smartphone"} size = {30} color = {colors.secondary}/>
        <TextInput style= {styles.TextInput}
        placeholder='Enter your phone no '
        placeholderTextColor={colors.secondary}
        secureTextEntry = {secureEntry}
        keyboardType='phone-pad'
        />  
        </View>
        <View style = {styles.inputContainer}>
            <SimpleLineIcons name={"lock"} size = {30} color = {colors.secondary}/>
        <TextInput style= {styles.TextInput}
        placeholder='Enter your password'
        placeholderTextColor={colors.secondary}
        secureTextEntry = {secureEntry}
        />  
        <TouchableOpacity 
        onPress={() => {
            setSecureEntry((prev)=> !prev);
        }
        }
        >
        <SimpleLineIcons name={"eye"} size = {20} color = {colors.secondary}/>  
        </TouchableOpacity>
        </View>
        <TouchableOpacity style = {styles.loginButtonWrapper}>
            <Text style= {styles.loginText}>Sign up</Text>
        </TouchableOpacity>
        <Text style = {styles.continueText}>or continue with</Text>

        <TouchableOpacity style = {styles.googleButtonContainer}
        >
        <Image source={require("../assets/google.png")} styel= {styles.googleImage}/>
        <Text style = {styles.googleText}>Google</Text>
        </TouchableOpacity>
        <View style = {styles.footerContainer}>
        <Text style = {styles.accountText}>Already have an account!</Text>
        <TouchableOpacity onPress={handleLogin}>
        <Text style = {styles.signupText}>Login</Text>
        </TouchableOpacity>
        </View>
    </View>
    </View>
  )
}

export default SignupScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        padding: 20,
    },
    backButtonWrapper: {
        height: 40,
        width: 40,
        backgroundColor: colors.gray,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
    },
    textContainer: {
      marginVertical: 20,
    },
    headingText: {
      fontSize: 32,
      color: colors.primary,
      fontFamily: "Poppins-SemiBold",
    },
    formContainer: {
        marginTop: 20,
    },
    inputContainer: {
        borderWidth: 1,
        borderColor: colors.secondary,
        borderRadius: 100,
        paddingHorizontal: 20,
        flexDirection: "row",
        alignItems: "center",
        padding: 2,
        marginVertical: 10,
    },
    TextInput: {
        flex: 1,
        paddingHorizontal: 10,
        fontFamily: "Poppins-Light",
    },
    ForgetPasswordText: {
        textAlign: "right",
        color: colors.primary,
        fontFamily: "Poppins-SemiBold",
        marginVertical: 10,
    },
    loginButtonWrapper: {
        backgroundColor: colors.primary,
        borderRadius: 100,
        marginTop: 20,
    },
    loginText: {
        color: colors.white,
        fontSize: 20,
        fontFamily: "Poppins-SemiBold",
        textAlign: "center",
        padding: 10,
    },
    continueText: {
        textAlign: "center",
        marginVertical: 20,
        fontSize: 14,
        fontFamily: "Poppins-Regular",
        color: colors.primary,
    },
    googleButtonContainer: {
     flexDirection: "row",
     borderWidth: 2,
     borderColor: colors.primary,
     borderRadius: 100,
     justifyContent: "center",
     alignItems: "center",
     padding: 10,
     gap: 10,
    },
    googleImage: {
     width: 20,
     height: 20,
    },
    googleText: {
        fontSize: 20,
        fontFamily: "Poppins-SemiBold",
    },
    footerContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 20,
        gap: 2,
    },
    accountText: {
        color: colors.primary,
        fontFamily: "Poppins-Regular",
    },
    signupText: {
        color: colors.primary,
        fontFamily: "Poppins-Bold",
    },
})

