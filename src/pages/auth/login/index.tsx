/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-inner-declarations */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable object-shorthand */
/* eslint-disable react/self-closing-comp */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState, useEffect } from 'react';
import GoogleLogin from 'react-google-login';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from 'react-router-dom';

import { AuthGoogleProvider } from '../../../redux/authGoogleSlice';
import { Container } from '../../../components/User/styles';
import { app } from '../../../services/firebaseConfig';

interface AuthProps {
  signed: boolean;
}
const provider = new GoogleAuthProvider();
export default function Login() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [authUser, setAuthUser] = useState<any>();

  const dispatch = useDispatch();
  const auth = getAuth(app);

  const router = useRouter();
  function goHome() {
    return router.replace('/');
  }

  useEffect(() => {
    const loadStoreAuth = async () => {
      const sessionToken = sessionStorage.getItem('@AuthFirebase:token');
      const sessionUser = sessionStorage.getItem('@AuthFirebase:user');
      if (sessionToken && sessionUser) {
        setAuthUser(sessionUser);
      }
    };
    loadStoreAuth();
  }, []);
  useEffect(() => {
    dispatch(AuthGoogleProvider(!!authUser));
  }, [authUser]);

  function singInGoogle() {
    signInWithPopup(auth, provider)
      .then(result => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const { user }: any = result;
        sessionStorage.setItem('@AuthFirebase:token', token);
        sessionStorage.setItem('@AuthFirebase:user', JSON.stringify(user));
        goHome();
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const { email } = error.customData;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  }

  function handleLogin(e) {
    e.preventDefault();

    fetch(`https://factory-clothing-api.herokuapp.com/user/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    })
      .then(response => response.json())
      .then(s => {
        if (s.user) {
          localStorage.setItem('user', JSON.stringify(s.user));
          window.location.reload();
        }
      })
      .catch(err => {
        console.log(err);
      });
  }
  const clientId =
    '848938693135-e3u2kugas45ujjo3se7mte7okfp3mivd.apps.googleusercontent.com';
  const responseGoogle = e => {
    console.log(e);
  };

  const signed = useSelector<AuthProps>(state => state.signed);
  if (!signed) {

    return (
      <Container>
        <div className="left">
          <form onSubmit={handleLogin}>
            <h1>Login/Register</h1>
            <div className="google-btn" onClick={singInGoogle}>
              <div className="google-icon-wrapper">
                <img
                  className="google-icon"
                  src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                />
              </div>
              <p className="btn-text">
                <b>Sign in with google</b>
              </p>
            </div>
          </form>
        </div>
      </Container>
    );
  }
  if (signed) {
    return <Navigate to="/" />;
  }
}
