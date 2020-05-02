import App from 'next/app';
import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';

function MyApp({ Component, pageProps }) {
  const [isDark, setTheme] = useState(false);
  const toggleTheme = () => setTheme(!isDark);
  const dark = {
    colors: {
      primary: '#fff',
    },
  };
  const light = {
    colors: {
      primary: '#000',
    },
  };
  return (
    <ThemeProvider theme={isDark ? dark : light}>
      <div className={isDark ? 'dark' : 'light'}>
        <Component {...pageProps} isDark={isDark} toggleTheme={toggleTheme} />
      </div>
    </ThemeProvider>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp;
