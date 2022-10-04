import axios from "axios";
import React, { useState } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore, addDoc, collection } from "firebase/firestore";
const App = () => {
  const [ipInfo, setIpInfo] = useState("");

  const firebaseApp = initializeApp({
    apiKey: "AIzaSyD0ccDCYBbyV5uKi3au4nrNBBNngJ1ogew",
    authDomain: "ipcapture-4c45b.firebaseapp.com",
    projectId: "ipcapture-4c45b",
  });

  const ipDefine = async () => {
    const callIP = await axios.get("https://api.ipify.org?format=json");
    setIpInfo(callIP.data);
  };
  const db = getFirestore(firebaseApp);
  const userCollectionref = collection(db, "users");

  async function showIp() {
    const ipNome = await addDoc(userCollectionref, {
      ipInfo,
    });
    console.log(ipNome);
  }
  showIp();
  return (
    <div className="border flex justify-center items-center w-full h-screen">
      <button
        className="block border cursor-pointer border-black p-10"
        onClick={ipDefine}
      >
        Clique aqui
      </button>
    </div>
  );
};

export default App;
