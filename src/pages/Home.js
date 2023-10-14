import React, { createContext, useContext } from 'react'
import Letter from '../components/Letter'
import PhoneNumber from '../components/PhoneNumber'
import { initializeApp } from 'firebase/app';
import { getDatabase } from "firebase/database";

function Home() {

  const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: "https://dearhumanity-29682-default-rtdb.firebaseio.com",
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_MESSAGING_APP_ID,
    measurementId: process.env.REACT_APP_MESSAGING_MEASUREMENT_ID
  };

  const app = initializeApp(firebaseConfig);
  const database = getDatabase();

  const FirebaseContext = createContext(null);

  function DatabaseProvider({ children }){
    return (
      <FirebaseContext.Provider value={database}>
        { children }
      </FirebaseContext.Provider>
    )
  }

  return (
    <>
        <Letter/>
        <DatabaseProvider>
          <PhoneNumber/>
        </DatabaseProvider>
    </>
  )
}

export default Home