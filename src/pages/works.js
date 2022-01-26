// import Head from 'next/head';
// import NextLink from 'next/link';
// import { getPosts, getReadings } from '@/lib/notion';
// import { name, description, url, socialImage } from '@/lib/config';
// import { ChevronRightIcon } from '@chakra-ui/icons';

// import PostsList from '@/components/posts/PostsList';
// import ReadingsList from '@/components/readings/ReadingsList';


import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '@/layouts/article';
import Section from '@/components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbEffectsArea from '../../public/images/works/effectsarea.png'
import thumbCCcomCha from '../../public/images/works/ccomcha.png'
import thumbBandWizard from '../../public/images/works/bandwizard.png'
import thumbLoowie from '../../public/images/works/loowie.png'
import thumbLandingPage from '../../public/images/works/landingpage.png'
import thumbConseillgbt from '../../public/images/works/conseillgbt.png'
import thumbRentalife from '../../public/images/works/rentalife.png'
// import thumbFreeDBTagger from '../public/images/works/freedbtagger_eyecatch.png'
// import thumbAmembo from '../public/images/works/amembo_eyecatch.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem 
            id="effectsarea" 
            title="EffectsArea" 
            thumbnail={thumbEffectsArea}
          >
          A music gear platform, where you can find rare and vintage guitar pedals. 
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="ccomcha"
            title="CComCha"
            thumbnail={thumbCCcomCha}
          >
            A digital communication agency
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="bandwizard"
            title="BandWizard"
            thumbnail={thumbBandWizard}
          >
            A "Tinder" app for musicians who want to join a band 
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem 
            id="loowie" 
            thumbnail={thumbLoowie} 
            title="Loowie"
          >
            A footwear E-commerce
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Collaborations
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem
            id="conseillgbt"
            thumbnail={thumbConseillgbt}
            title="Conseil LGBT"
          >
            Refreshing of the website of the Conseil Québécois LGBT 
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem 
            id="rentalife" 
            thumbnail={thumbRentalife} 
            title="Rent a life"
          >
            A VR Creative tools for fashion brands
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.4}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Old works
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.5}>
          <WorkGridItem 
            id="landingpage" 
            thumbnail={thumbLandingPage} 
            title="3D Procedural Landing Page"
          >
            First creation of procedural 3D world
          </WorkGridItem>
        </Section>
        {/* <Section delay={0.5}>
          <WorkGridItem
            id="freedbtagger"
            thumbnail={thumbFreeDBTagger}
            title="freeDBTagger"
          >
            Automatic audio file tagging tool using FreeDB for Windows
          </WorkGridItem>
        </Section>
        <Section delay={0.6}>
          <WorkGridItem id="amembo" thumbnail={thumbAmembo} title="Amembo">
            P2P private file sharing tool with MSN Messenger integration for
            Windows
          </WorkGridItem>
        </Section>*/}
      </SimpleGrid> 
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'