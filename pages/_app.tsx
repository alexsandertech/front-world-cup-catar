import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return <>
      <Head>
          {/* This ways to add css on global website use css @import property and you also paste Link tag also */}
        <style>
          @import url(&aposhttps://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Work+Sans:wght@100;600&display=swap&apos);
        </style>
    </Head>
    <Component {...pageProps} />
  </>
  
}
