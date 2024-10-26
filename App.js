import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Routes from './src/routes';
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore"; // Importando Firestore


const firebaseConfig = {
  apiKey: "AIzaSyDoFjPqz1TeMT7MC9Jj7GIEmmpT7B9pUk4",
  authDomain: "genesis2-e7094.firebaseapp.com",
  projectId: "genesis2-e7094",
  storageBucket: "genesis2-e7094.appspot.com",
  messagingSenderId: "750698452711",
  appId: "1:750698452711:web:ed8d3ce1a7553ad4703442",
  measurementId: "G-2SH84KPT0B"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);



export default function App(){
  return(
    <NavigationContainer>
      <Routes/>
    </NavigationContainer>
  );
}




