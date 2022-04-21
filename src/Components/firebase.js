import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const app = firebase.initializeApp({
	apiKey: "AIzaSyAzK-BnRpcg0M2HDdSXpBQkYkE9a13KRzU",
	authDomain: "snaplearn-code-uni.firebaseapp.com",
	databaseURL:"https://snaplearn-code-uni-default-rtdb.firebaseio.com/",
	projectId: "snaplearn-code-uni",
	storageBucket: "snaplearn-code-uni.appspot.com",
	messagingSenderId: "351415632198",
	appId: "1:351415632198:web:730f425e4cb2a191bb2547",
	measurementId: "G-GBM9P05ZJ0"

})

export const auth = app.auth();
export default app;

