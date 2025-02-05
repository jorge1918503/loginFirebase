import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { GlobalStyles } from '@/theme/GlobalStyles'
import { useRouter } from 'expo-router'

const ScreenPrincipal = () => {
  const router = useRouter()
  return (
    <View style={GlobalStyles.containerCentrado}>
      <Text style= {GlobalStyles.titulo}>Datos de la base de datos</Text>
    </View>
  )
}

export default ScreenPrincipal