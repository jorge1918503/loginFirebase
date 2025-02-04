import { GlobalStyles } from "@/theme/GlobalStyles";
import { Redirect, useRouter } from "expo-router";
import React from 'react';
import { Pressable, TextInput, View } from 'react-native';

export default function Index() {
  const router = useRouter();

  return (
    <View style={GlobalStyles.containerCentrado}>
      <TextInput placeholder="Usuario" style={GlobalStyles.loginInputText} />
      <TextInput placeholder="Contraseña" style={GlobalStyles.loginInputText} />

      <View style={GlobalStyles.loginButtonContainer}>
          <Pressable style={GlobalStyles.loginButton} onPress={() => router.push("/tabs")}>
            
          </Pressable>
          <Pressable style={GlobalStyles.loginButton} onPress={() => router.push("/tabs")}>
            
          </Pressable>
        </View>
    </View>
  );
}
