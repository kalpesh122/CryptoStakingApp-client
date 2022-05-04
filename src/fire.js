import firebase from 'firebase/compat/app';
require('firebase/compat/auth');
require('firebase/compat/firestore');
require('firebase/compat/storage');

const firebaseConfig = {
    apiKey: 'AIzaSyBHeR5DmleMctIQgCIA-5-elx5CNr5oTxI',
    authDomain: 'crypto-stacking.firebaseapp.com',
    projectId: 'crypto-stacking',
    storageBucket: 'crypto-stacking.appspot.com',
    messagingSenderId: '174272992605',
    appId: '1:174272992605:web:bf05a04771c64a323384b4',
    measurementId: 'G-CEVM4NGYPT'
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
