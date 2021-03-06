import '@fontsource/montserrat';
import '@fontsource/noto-serif';

import { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import * as Fathom from 'fathom-client';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '@/theme';
import { domain, fathomCode } from '@/lib/config';
import MainLayout from '@/layouts/MainLayout';

import { AnimatePresence } from 'framer-motion'

import { FormspreeProvider } from '@formspree/react';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    if (!fathomCode || fathomCode === '') {
      return;
    }

    Fathom.load(fathomCode, {
      includedDomains: [domain],
    });

    function onRouteChangeComplete() {
      Fathom.trackPageview();
    }

    router.events.on('routeChangeComplete', onRouteChangeComplete);

    return () => {
      router.events.off('routeChangeComplete', onRouteChangeComplete);
    };
  }, [router]);

  return (
    <FormspreeProvider project="1991095907260562934">
    <ChakraProvider theme={theme}>
      <MainLayout router={router}>
      <AnimatePresence exitBeforeEnter initial={true}>
      <Head>
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />

        <link rel="shortcut icon" href="/favicons/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicons/favicon-16x16.png"
        />
      </Head>
      
        <Component {...pageProps} />
      
      </AnimatePresence>
      </MainLayout>
    </ChakraProvider>
    </FormspreeProvider>
  );
}

export default MyApp;