import Head from 'next/head';
import { useRouter } from 'next/router';
import { Box, Container, Flex, Heading } from '@chakra-ui/react';
import { name, description, url, socialImage } from '@/lib/config';
import { usePaginatePosts } from '@/lib/posts';

import Layout from '@/layouts/article';
import PostsList from '@/components/posts/PostsList';

import Section from '@/components/section'

export default function Posts() {
  const { pathname } = useRouter();

  const { posts, error, isLoadingMore, size, setSize, reachedEnd } =
    usePaginatePosts();

  return (
    <Layout title="Posts">
      <Section delay={0.1}>
      <Head>
        {/* <title>{name} - all posts</title> */}
        <meta name="description" content={description} />
        <meta property="og:title" content={`${name} - all posts`} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url + pathname} />
        <meta property="og:image" content={socialImage} />
      </Head>

      <Container maxW="container.lg" pb={16}>
        <Box mb={[8, 16]}>
          <Flex align="center" justify="space-between" px={[4, 8]} mb={6}>
            <Heading as="h2" fontSize="xl">
              All posts
            </Heading>
          </Flex>

          <PostsList
            posts={posts}
            error={error}
            isLoadingMore={isLoadingMore}
            loadMore={() => setSize(size + 1)}
            reachedEnd={reachedEnd}
          />
        </Box>
      </Container>
      </Section>
    </Layout>
  );
}
