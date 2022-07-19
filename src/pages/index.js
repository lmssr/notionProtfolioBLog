import Head from 'next/head';
import NextLink from 'next/link';
import { getPosts, getReadings } from '@/lib/notion';
import { 
  Button, 
  Box, 
  Container, 
  Image,
  Flex, 
  Heading,
  Link,
  useColorModeValue,
} from '@chakra-ui/react';
import { name, description, url, socialImage } from '@/lib/config';
import { ChevronRightIcon } from '@chakra-ui/icons';
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '@/layouts/article';
import { GridItem } from '../components/grid-item'
import Section from '../components/section'

import PostsList from '@/components/posts/PostsList';
import ReadingsList from '@/components/readings/ReadingsList';

export default function Home({ posts, readings }) {
  return (
    <Layout>
      <Head>
        <title>{name}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={name} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={socialImage} />
      </Head>

      <Container maxW="container.lg" pb={16}>
        <Box
          borderRadius="lg"
          mb={6}
          p={3}
          textAlign="center"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        >
        Hello, I&apos;m a full-stack developer based in France!
        </Box>

        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
            Luc Mosser
            </Heading>
            <p>Digital Craftsman ( Artist / Developer / Designer )</p>
          </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="../images/luc.png"
            alt="Profile image"
          />
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
        I'm Luc, a Web Developer and UX/UI designer from France.
        Customers have relied on me for design, implementation, and management of their digital products.
        I work to create innovative solutions that inspire, and foster memorable relationships between brands and their clients. With a focus on branding and UI / Web, I strive to create usable and polished products through passionate and deliberate design.
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works">
            <Button 
              ml={6}
              mr={6}
              mt={10}
              rightIcon={<ChevronRightIcon />} 
              bgColor={useColorModeValue('#805ad5', '#fbd38d')} 
              color={useColorModeValue('white', '#1a202c')} 
              _hover={{ transform: 'scale(1.1)' }}
            >
              My portfolio
            </Button>
          </NextLink>
          <NextLink href="/contact">
            <Button 
              ml={6}
              mr={6}
              mt={10}
              rightIcon={<ChevronRightIcon />} 
              bgColor={useColorModeValue('#805ad5', '#fbd38d')} 
              color={useColorModeValue('white', '#1a202c')} 
              _hover={{ transform: 'scale(1.1)' }}
            >
              Contact me
            </Button>
          </NextLink>
        </Box>
      </Section>
      <Section delay={0.9}>
        <Box mb={[12, 16]}>
          <Flex align="center" justify="space-between" px={[4, 8]} mb={6}>
            <Heading as="h2" fontSize="xl" variant="section-title">
              My last posts
            </Heading>
          </Flex>

          <PostsList posts={posts.slice(0, 4)} />

          <Flex justify="flex-end" mt={8}>
            <NextLink href="/archive/posts" passHref>
              <Button
                as="a"
                w={['100%', '100%', 'unset']}
                rightIcon={<ChevronRightIcon />}
                bgColor={useColorModeValue('#805ad5', '#fbd38d')} 
                color={useColorModeValue('white', '#1a202c')} 
                size="lg"
                fontFamily="heading"
                // _active={{ backgroundColor: '#bb3531' }}
                _hover={{ transform: 'scale(1.1)' }}
              >
                All posts
              </Button>
            </NextLink>
          </Flex>
        </Box>
      </Section>
      <Section delay={0.9}>
        <Box>
          <Heading as="h2" fontSize="xl" px={[4, 8]} mb={6}>
            What I’m reading / watching
          </Heading>

          <ReadingsList readings={readings.slice(0, 4)} />

          <Flex justify="flex-end" mt={8}>
            <NextLink href="/archive/readings" passHref>
              <Button
                as="a"
                w={['100%', '100%', 'unset']}
                rightIcon={<ChevronRightIcon />}
                bgColor={useColorModeValue('#805ad5', '#fbd38d')} 
                color={useColorModeValue('white', '#1a202c')} 
                size="lg"
                fontFamily="heading"
                // _active={{ backgroundColor: '#bb3531' }}
                _hover={{ transform: 'scale(1.1)' }}
              >
                View all
              </Button>
            </NextLink>
          </Flex>
        </Box>
      </Section>
      </Container>
    </Layout>
  );
}

export async function getStaticProps() {
  const posts = await getPosts();
  const readings = await getReadings();

  if (!posts || !readings) {
    return {
      notFound: true,
    };
  }

  return {
    props: { posts: posts.data, readings: readings.data },
    revalidate: 10,
  };
}