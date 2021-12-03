// import Navigation from '@/components/navigation';
// import Footer from '@/components/footer';
// import VoxelDogLoader from '@/components/voxel-dog-loader'

// import dynamic from 'next/dynamic'

// const LazyVoxelDog = dynamic(() => import('@/components/voxel-dog'), {
//   ssr: false,
//   loading: () => <VoxelDogLoader />
// })

// const MainLayout = ({ children }) => {
//   return (
//     <>
//       <Navigation />
//       <LazyVoxelDog />

//       {children}

//       <Footer />
//     </>
//   );
// };

// export default MainLayout;

import Head from 'next/head'
import dynamic from 'next/dynamic'
import Navigation from '@/components/navigation'
import { Box, Container } from '@chakra-ui/react'
import Footer from '@/components/footer'
import VoxelDogLoader from '@/components/voxel-dog-loader'
import { name, description, url, socialImage } from '@/lib/config';

const LazyVoxelDog = dynamic(() => import('@/components/voxel-dog'), {
  ssr: false,
  loading: () => <VoxelDogLoader />
})

const MainLayout = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={description} />
        <meta property="og:title" content={name} />
        <meta property="og:description" content={description} />
        <meta name="author" content="Takuya Matsuyama" />
        <meta name="author" content="craftzdog" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@craftzdog" />
        <meta name="twitter:creator" content="@craftzdog" />
        <meta name="twitter:image" content="/card.png" />
        <meta property="og:site_name" content="Takuya Matsuyama's Homepage" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/card.png" />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={socialImage} />
        {/* <title> Luc Mosser - Homepage</title> */}
      </Head>

      <Navigation />

      <Container maxW="container.md" pt={14}>
        <LazyVoxelDog />

        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default MainLayout