import { Box, Container, Stack } from '@chakra-ui/react';


import Socials from '@/components/socials';

const Footer = () => (
  <Box 
    position="relative" 
    as="footer" 
    top="100%"
    py={4}
    css={{ backdropFilter: 'blur(10px)' }}
    // pr={130}
    // pl={130}
    align="center"
  >
    <Container 
      display="flex"
      p={2}
      maxW="fit-content"
      wrap="wrap"
      align="center"
    >
      <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'column', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          align="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
      >
        <Box 
          opacity={0.4} 
          fontSize="sm"
          >
          &copy; {new Date().getFullYear()} Luc Mosser.  
        </Box>
        <Box 
          px={[null, null, 8]}
          align="center"
          >
          <Socials/>
        </Box>
      </Stack>
    </Container>
  </Box>
  
);

export default Footer;
