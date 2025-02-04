import { GlobalStyles } from "@/theme/GlobalStyles";
import { Redirect, useRouter } from "expo-router";
import React from 'react';
import { Text, Pressable, TextInput, View } from 'react-native';

export default function Index() {
  const router = useRouter();

  return (
    <View style={GlobalStyles.containerCentrado}>
      <Text style={GlobalStyles.titulo}>Iniciar sesión</Text>

      <TextInput placeholder="Usuario" style={GlobalStyles.loginInputText} />
      <TextInput placeholder="Contraseña" style={GlobalStyles.loginInputText} />

      <View style={GlobalStyles.loginButtonContainer}>
          <Pressable style={GlobalStyles.loginButton} onPress={() => router.push("/tabs")}>
            <Text style={GlobalStyles.loginButtonText}>Iniciar Sesión</Text>
          </Pressable>
          <Pressable style={GlobalStyles.loginButton} onPress={() => router.push("/tabs")}>
            <Text style={GlobalStyles.loginButtonText}>Registrate</Text>
          </Pressable>
        </View>
    </View>
  );
}
