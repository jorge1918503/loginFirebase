import { GlobalStyles } from "@/theme/GlobalStyles";
import { Redirect, useRouter } from "expo-router";
import React from 'react';
import { useState } from 'react';
import { Text, Pressable, TextInput, View, Alert } from 'react-native';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from '@firebase/auth';
import { auth } from '@/Firebaseconfig';

export default function Index() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = async () => {
    try{
      const user = await (signInWithEmailAndPassword(auth,email, password));
      setEmail('');
      setPassword('');
    }catch(error : any){
      console.log(error);
      Alert.alert("Inicio de sesión incorrecto", error.message);
    }
  }

  const register = async () => {
    try{
      const user = await (createUserWithEmailAndPassword(auth,email, password));
      setEmail('');
      setPassword('');
      router.push('/tabs');
    }catch(error : any){
      console.log(error);
      Alert.alert("Error al registrar al usuario", error.message);
    }
  }


  return (
    <View style={GlobalStyles.containerCentrado}>
      <Text style={GlobalStyles.titulo}>Iniciar sesión</Text>

      <TextInput placeholder="Email" style={GlobalStyles.loginInputText} value={email} onChangeText={setEmail}/>
      <TextInput placeholder="Contraseña" style={GlobalStyles.loginInputText} value={password} onChangeText={setPassword}/>

      <View style={GlobalStyles.loginButtonContainer}>
          <Pressable style={GlobalStyles.loginButton} onPress={login}>
            <Text style={GlobalStyles.loginButtonText}>Iniciar Sesión</Text>
          </Pressable>
          <Pressable style={GlobalStyles.loginButton} onPress={register}>
            <Text style={GlobalStyles.loginButtonText}>Registrate</Text>
          </Pressable>
        </View>
    </View>
  );
}
