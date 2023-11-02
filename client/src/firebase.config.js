import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {GoogleAuthProvider, getAuth} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyD8wdO9_zSjhKPTsFMD8QNkwTU016j9gP4",
  authDomain: "intern-project-a325a.firebaseapp.com",
  projectId: "intern-project-a325a",
  storageBucket: "intern-project-a325a.appspot.com",
  messagingSenderId: "324669972881",
  appId: "1:324669972881:web:abf3746e73b8186e47fa30",
  measurementId: "G-F6LZMKFKFV"
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app)

const provider = new GoogleAuthProvider();

export {
  auth,
  provider,
}