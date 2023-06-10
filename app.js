// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-PQIyC6u3Js4EJZmJVdW0tapcLM2FXzU",
  authDomain: "iccuptech.firebaseapp.com",
  databaseURL: "https://iccuptech-default-rtdb.firebaseio.com",
  projectId: "iccuptech",
  storageBucket: "iccuptech.appspot.com",
  messagingSenderId: "704214415296",
  appId: "1:704214415296:web:955547bc8153fe92287a25"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const { initializeAppCheck, getToken } = require('firebase/app-check');

const appCheck = initializeAppCheck(
    app,
    { provider: provider } // ReCaptchaV3Provider or CustomProvider
);

const callApiWithAppCheckExample = async () => {
  let appCheckTokenResponse;
  try {
      appCheckTokenResponse = await getToken(appCheck, /* forceRefresh= */ false);
  } catch (err) {
      // Handle any errors if the token was not retrieved.
      return;
  }

  // Include the App Check token with requests to your server.
  const apiResponse = await fetch('https://yourbackend.example.com/yourApiEndpoint', {
      headers: {
          'X-Firebase-AppCheck': appCheckTokenResponse.token,
      }
  });

  // Handle response from your backend.
};
