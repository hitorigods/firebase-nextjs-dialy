// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyCi6YFpuvGMcjux_dC0A9JCM9eUCSqziOg',
	authDomain: 'fir-nextjs-dialy.firebaseapp.com',
	projectId: 'fir-nextjs-dialy',
	storageBucket: 'fir-nextjs-dialy.appspot.com',
	messagingSenderId: '465033307931',
	appId: '1:465033307931:web:09a63bb3d564cc0fc515be',
	measurementId: 'G-N87T2LQ7VD',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
if (typeof window !== 'undefined') {
	const analytics = getAnalytics(app);
}
