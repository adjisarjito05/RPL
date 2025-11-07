// firebaseConfig.js
// Modul untuk inisialisasi koneksi Firebase Firestore.
// NOTE: Isi nilai config dibawah sesuai project Firebase-mu.

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDzX7Do6x1_-46SNFl-9xSTKJ4Zcito7ME",
  authDomain: "input-nilai-mhs-f07ce.firebaseapp.com",
  projectId: "input-nilai-mhs-f07ce",
  storageBucket: "input-nilai-mhs-f07ce.firebasestorage.app",
  messagingSenderId: "683307479489",
  appId: "1:683307479489:web:958234b02062ad1c0aff40",
  measurementId: "G-BTTG8987RT",
};

// Inisialisasi Firebase App & Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Export db agar dipakai module lain
export { db };