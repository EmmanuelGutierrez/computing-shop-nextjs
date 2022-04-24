import '../styles/globals.css';
import '../styles/global.scss';
import type { AppProps } from 'next/app';
import { AppContext } from '@context/AppContext';
import { useInitialState } from '@hooks/useInitialState';
import Header from '@componets/Header';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  const initialState = useInitialState();
  return (
    <AppContext.Provider value={initialState}>
      <Head>
        <title>Next shop</title>
      </Head>
      <Header />
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}

export default MyApp;
