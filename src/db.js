import firebase from 'firebase/app'
import 'firebase/database'

const config = {
  // API KEYS
  apiKey: 'AIzaSyB7W7ABcnK22whS-ahpFcPJnWhTuDqCfgs',
  authDomain: 'vue-chat-1f1dd.firebaseapp.com',
  projectId: 'vue-chat-1f1dd',
  storageBucket: 'vue-chat-1f1dd.appspot.com',
  messagingSenderId: '803883661315',
  appId: '1:803883661315:web:14e7b3faf8241d47a83636'
}

const db = firebase.initializeApp(config)
export default db
