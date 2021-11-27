import Head from 'next/head';
import NextLink from 'next/link';
import { getPosts, getReadings } from '@/lib/notion';
import { 
  Button, 
  Box, 
  Container, 
  Flex, 
  Heading,
  Link,
  useColorModeValue,
} from '@chakra-ui/react';
import { name, description, url, socialImage } from '@/lib/config';
import { ChevronRightIcon } from '@chakra-ui/icons';

import MainLayout from '@/layouts/MainLayout';
import PostsList from '@/components/posts/PostsList';
import ReadingsList from '@/components/readings/ReadingsList';

import Section from '../components/section'
import Paragraph from '../components/paragraph'

export default function Home({ posts, readings }) {
  return (
    <MainLayout>
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
          {/* <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/takuya.jpg"
            alt="Profile image"
          /> */}
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Takuya is a freelance and a full-stack developer based in Osaka with a
          passion for building digital services/stuff he wants. He has a knack
          for all things launching products, from planning and designing all the
          way to solving real-life problems with code. When not online, he loves
          hanging out with his camera. Currently, he is living off of his own
          product called{' '}
          <NextLink href="/works/inkdrop">
            <Link>Inkdrop</Link>
          </NextLink>
          .
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/work">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>
      <Section delay={0.9}>
        <Box mb={[12, 16]}>
          <Flex align="center" justify="space-between" px={[4, 8]} mb={6}>
            <Heading as="h2" fontSize="xl">
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
                bg="#FBD38D"
                color="white"
                size="lg"
                fontFamily="heading"
                _active={{ backgroundColor: '#bb3531' }}
                _hover={{ boxShadow: '2px 2px 0 #880400' }}
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
                bg="#FBD38D"
                color="white"
                size="lg"
                fontFamily="heading"
                _active={{ backgroundColor: '#bb3531' }}
                _hover={{ boxShadow: '2px 2px 0 #880400' }}
              >
                View all
              </Button>
            </NextLink>
          </Flex>
        </Box>
      </Section>
      </Container>
    </MainLayout>
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
