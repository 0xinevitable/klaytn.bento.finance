import { appWithTranslation } from 'next-i18next';
import { AppProps } from 'next/app';
import React from 'react';

import { GlobalStyle } from '@/components/GlobalStyle';
import '@/styles/fonts.css';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <React.Fragment>
      {/* @ts-ignore // Type mismatch after upgrading to React 18 */}
      <GlobalStyle />
      <Component {...pageProps} />

      <div id="portal" />
    </React.Fragment>
  );
};

export default appWithTranslation(App);
