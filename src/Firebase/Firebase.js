// //Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// console.log(import.meta.env.VITE_apiKey);

// // Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: import.meta.env.VITE_apiKey,
//     authDomain: import.meta.env.VITE_authDomain,
//     projectId: import.meta.env.VITE_projectId,
//     storageBucket: import.meta.env.VITE_storageBucket,
//     messagingSenderId: import.meta.env.VITE_messagingSenderId,
//     appId: import.meta.env.VITE_appId
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// export default app;


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAh1hWsqph-3JY1Hi5hdEl5kyPIG3wWlGs",
  authDomain: "bistro-boss-76b7d.firebaseapp.com",
  projectId: "bistro-boss-76b7d",
  storageBucket: "bistro-boss-76b7d.appspot.com",
  messagingSenderId: "640293267564",
  appId: "1:640293267564:web:823a6b1e8f686a8d4b5049"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app