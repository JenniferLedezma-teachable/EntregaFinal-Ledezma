import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyBuw7NhymX1LfPbkoet_dVFG7Yja9us7nQ',
  authDomain: 'skinglow-ae998.firebaseapp.com',
  projectId: 'skinglow-ae998',
  storageBucket: 'skinglow-ae998.appspot.com',
  messagingSenderId: '663686309231',
  appId: '1:663686309231:web:2493dc325fd8c07170749a'
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
