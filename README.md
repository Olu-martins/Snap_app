# About the app
-Snaplearn is a Static Single Page react APP built with version "react": "^18.0.0"
you will need a corresponding version on your machine to run the app. if you use a lower version you can update your own software version. 
-The backend and user authentication is built with firebase version 9 install. if you visit the hosted app url, you wont need firebase installation, but if you wish to run this code on your machine you may need to sign up and install firebase. ii describe the step in this documentation as well.  

# Sign up 
* To use the hosted app you will need an email and password. for testing you can use a desposable temp email so that you need to protect your official or personal email, since this app is just a test app. 
You can create a desposable temp email for use here : https://temp-mail.org/en/
 # Features  Note* all screens are desktop resolution designs
-Sign up screen 
-Login screen
-Retrieve Email screen
-App main screen - The main app page is static SPA
-firebase backend authentication


# Starting the APP
Prerequisite
*Install Node.js and NPM : Download Node.js from https://nodejs.org/en/download/ and install it on your system. NPM comes bundled with Node.js


*When you extract file from download you will find following folder/file:
-public 
-src
-package.json
-package-lock.json
-Readme.md

*There in the src lives the following 
-assests
-Components
-color lib
-color styles
-index.js
-index style

# Running the app
*After installing Node.js on your machine
-On the folder level one of the download do the following:
1. open the download folder with any supported code editor. for building i used VS Code.  
2. run npm install
3. run npm start to view the app locally
4. if you dont want to follow 1-3 you can run 'npx create-react-app my app' on an empty folder. then copy my code to your app. then run npm start
5. or you can clone my repo here : https://github.com/Olu-martins/Snap_app . The do step 1-3.  

# Accessing auth and login
-You will need a firebase authentication if you want to interact with the app locally
* you can sign up firebase here : https://firebase.google.com/?gclid=Cj0KCQjwpImTBhCmARIsAKr58cyANIsL9CoxfO2uQPnPKjBCFIpW4yW9ReWfS9klrCeY3_NGbOTL1AEaAkKdEALw_wcB&gclsrc=aw.ds

* after sign up follow the firebase set up steps 
* on succefull set up, add a project and install an app in the project
* copy the sdk data on the settings page, and replace yours with mine on the firebase.js of these file. You are good to go!

Thanks 