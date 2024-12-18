importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
);

const firebaseConfig = {
    apiKey: "AIzaSyDoOn5JOhxPscApKQ_iJBCj-56Fi7eSHCw",
    authDomain: "instagram-770e1.firebaseapp.com",
    projectId: "instagram-770e1",
    storageBucket: "instagram-770e1.appspot.com",
    messagingSenderId: "90302667726",
    appId: "1:90302667726:web:15ccd4bc74a7b502ef699f",
    measurementId: "G-FXQ3KF461D",
  };
  

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.image,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});