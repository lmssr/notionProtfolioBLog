import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import VoxelDogLoader from '@/components/voxel-dog-loader'

import dynamic from 'next/dynamic'

const LazyVoxelDog = dynamic(() => import('@/components/voxel-dog'), {
  ssr: false,
  loading: () => <VoxelDogLoader />
})

const MainLayout = ({ children }) => {
  return (
    <>
      <Navigation />
      <LazyVoxelDog />

      {children}

      <Footer />
    </>
  );
};

export default MainLayout;
