/* eslint-disable import/no-extraneous-dependencies */

import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyBL_kM7MvAOXKIpZ0sKKhQRc50RgQxMD9Q',
  authDomain: 'next-auth-72b5c.firebaseapp.com',
  projectId: 'next-auth-72b5c',
  storageBucket: 'next-auth-72b5c.appspot.com',
  messagingSenderId: '954819427914',
  appId: '1:954819427914:web:2ac4100204a249cc8830b3',
  measurementId: 'G-D2717X213E'
};
export const app = initializeApp(firebaseConfig);
