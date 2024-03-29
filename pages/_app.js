import WindowSizeProvider from '@/components/WindowSizeProvider';
import { appWithTranslation } from 'next-i18next';
import '@/styles/globals.css'
import Head from 'next/head'
function App({ Component, pageProps }) {
  return (
  <>
    <Head>
        <title>KVN Portfolio</title>
        <link rel="icon" href="/favicon.jpg" sizes="any" />
    </Head>
    <WindowSizeProvider>
      <Component {...pageProps} />
    </WindowSizeProvider>
  </>
  )
}
export default appWithTranslation(App)