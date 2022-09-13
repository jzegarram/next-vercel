import { NextPage } from 'next';
import { AppProps } from 'next/app';
import { ReactElement, ReactNode } from 'react';
import '../styles/globals.css'

export type NextPageWithLayout = NextPage & {
  getLayout?: ( page: ReactElement ) => ReactNode;
}

type AppPropsWhitLayout = AppProps & {
  Component: NextPageWithLayout;
}

function MyApp({ Component, pageProps } : AppPropsWhitLayout) {

  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(<Component {...pageProps} />)
}

export default MyApp
