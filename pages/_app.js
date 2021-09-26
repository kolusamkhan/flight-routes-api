import { NextIntlProvider } from 'next-intl';
import '../styles/global.css'
import Layout from '../layouts';

function MyApp(props) {
  const { Component, pageProps } = props;
  return (
    <>
      <NextIntlProvider messages={pageProps.messages}>
        <Layout {...pageProps} >
          <Component {...pageProps} />
        </Layout>
      </NextIntlProvider>
    </>
  )
}

export default MyApp
