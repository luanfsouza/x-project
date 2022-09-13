/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable react/jsx-boolean-value */
import { AiOutlineUser } from 'react-icons/ai';
import Switch from 'react-switch';
import { useContext, useEffect, useState } from 'react';
import Link from 'next/link'
import { useDispatch } from 'react-redux';
import { ThemeContext } from 'styled-components';
import light from '../../styles/themes/light';
import dark from '../../styles/themes/dark';
import { Container } from './styles';
// import { changeTheme } from '../../redux/authGoogleSlice';

export default function Navbar({ toggleTheme }) {
  const [themes, setThemes] = useState(light);
  const [authUser, setAuthUser] = useState<string>('usuario');
  const dispatch = useDispatch();
  useEffect(() => {
    const sesstionUser = sessionStorage.getItem('@AuthFirebase:user');
    if (sesstionUser) {
      setAuthUser(JSON.parse(sesstionUser).displayName);
    }
  }, []);
  const { exchangeMenuBorder1, ww, title } = useContext(ThemeContext);
  return (
    <Container>
      <nav>
        <div className="logo">
          <h1>
            <span>X</span>Project
          </h1>
          <Switch
            onChange={toggleTheme}
            checked={title === 'dark'}
            checkedIcon={false}
            uncheckedIcon={false}
            height={20}
            width={40}
            handleDiameter={20}
            onColor={ww}
          />
        </div>
        <ul>
          <li>
            <AiOutlineUser />
            <strong>Bem vindo, {authUser}!</strong>
          </li>
          <li className='login'>
            <strong><Link href='/auth/login'>register/login</Link></strong>
          </li>
        </ul>
      </nav>
    </Container>
  );
}
