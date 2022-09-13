import { ThemeProvider } from 'styled-components';
import { useState } from 'react';
import { useSelector } from 'react-redux/es/exports';
import { useDispatch, Provider } from 'react-redux';
import store from '../redux/store';
import light from '../styles/themes/light';
import dark from '../styles/themes/dark';

import GlobalStyles from '../styles/global';
// import theme from '../styles/theme';

function MyApp({ Component, pageProps }) {
  const [themes, setThemes] = useState(light);

  const toggleThemes = () => {
    setThemes(themes.title === 'light' ? dark : light);

  };

  return (
    <Provider store={store}>
      <ThemeProvider theme={themes}>
        <Component {...pageProps} toggleTheme={toggleThemes}/>

        <GlobalStyles />
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
