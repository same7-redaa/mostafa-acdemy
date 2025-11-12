import { initializeApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics, isSupported } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';

// Firebase Configuration (direct values for production)
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyA62WmynwViepDYBMDLsTqiX6yoZcUteBU",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "mostafa-acdemy.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "mostafa-acdemy",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "mostafa-acdemy.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "886720008123",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:886720008123:web:eda53e06eb7aff76247e9e",
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || "G-BJC1H5D7TB"
};

// Initialize Firebase (تجنب التهيئة المزدوجة)
const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];
const db = getFirestore(app);
const auth = getAuth(app);

// Initialize Analytics فقط في المتصفح وإذا كان مدعوماً
let analytics = null;
if (typeof window !== 'undefined') {
  isSupported().then(yes => yes && (analytics = getAnalytics(app))).catch(() => {});
}

export { app, db, auth, analytics };
