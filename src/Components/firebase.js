import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const app = firebase.initializeApp({
	apiKey: "AIzaSyAzK-BnRpcg0M2HDdSXpBQkYkE9a13KRzU",
	authDomain: "snaplearn-code-uni.firebaseapp.com",
	databaseURL: "https://snaplearn-code-uni-default-rtdb.firebaseio.com",
	projectId: "snaplearn-code-uni",
	storageBucket: "snaplearn-code-uni.appspot.com",
	messagingSenderId: "351415632198",
	appId: "1:351415632198:web:730f425e4cb2a191bb2547",
	measurementId: "G-GBM9P05ZJ0",
	// apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
	// authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
	// databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
	// projectId:  process.env.REACT_APP_FIREBASE_PROJECT_ID,
	// storageBucket:  process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
	// messagingSenderId:  process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
	// appId:  process.env.REACT_APP_FIREBASE_APP_ID,
	// measurementId:  process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
});

export const auth = app.auth();
export default app;
