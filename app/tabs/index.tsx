import { View, Text, Pressable, TextInput, FlatList } from 'react-native'
import React, { useEffect } from 'react'
import { GlobalStyles } from '@/theme/GlobalStyles'
import { useRouter } from 'expo-router'
import { useState } from 'react';
import { auth, db } from '@/Firebaseconfig'
import { addDoc, collection, getDocs, query, doc, deleteDoc } from 'firebase/firestore'
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry';


const ScreenPrincipal = () => {
  const router = useRouter()
  const user = auth.currentUser;
  const coleccionTareas = collection(db, 'tareas');
  const [tareas, setTareas] = useState<any>([]);
  const [tarea, setTarea] = useState('');

  useEffect(() => {
    cargarDatos();
  }, [user]);


  const cargarDatos = async () => {
    if (user) {
      const q = query(coleccionTareas);
      const datos = await getDocs(q);
      setTareas(datos.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      console.log(tareas);
    }
  }

  const addTarea = async () => {
    if (user) {
      await addDoc(coleccionTareas, { tarea, finalizada: false })
      setTareas('')
      cargarDatos();
    } else {
      console.log("Para añadir una tarea es preciso loguearse primero")
    }
  }

  const borrarTarea = async (id: string) =>{
    const referenciaTarea = doc(coleccionTareas, id);

    await (deleteDoc(referenciaTarea));
    console.log("Tarea eliminada: " + referenciaTarea);
    cargarDatos();
  }


  return (
    <View style={GlobalStyles.containerCentrado}>
      <Text style={GlobalStyles.titulo}>Lista tareas</Text>
      <View style={GlobalStyles.introducirTareaFlex}>
        <TextInput style={[GlobalStyles.loginInputText, { width: 300 }]} placeholder="Introduzca una tarea" value={tarea} onChangeText={setTarea} />
        <Pressable style={[GlobalStyles.loginButton, { width: 60, marginTop: 10 }]} onPress={addTarea}>
          <Text style={GlobalStyles.loginButtonText}>Add</Text>
        </Pressable>
      </View>

      <FlatList data={tareas}
        style={{ width: '100%' }}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <View style={GlobalStyles.introducirTareaFlex}>
              <Text>{item.tarea}</Text>
              <Pressable style={GlobalStyles.loginButton} onPress={() => borrarTarea(item.id)}>
                <Text style={GlobalStyles.loginButtonText}>Eliminar</Text>
              </Pressable>
            </View>
          )}}/>


    </View>
  )
}

export default ScreenPrincipal