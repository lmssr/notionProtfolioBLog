import { Box, Container } from '@chakra-ui/react';

import Socials from '@/components/socials';

const Footer = () => (
  <Box 
    position="absolute" 
    as="footer" 
    w="100%" 
    bottom="0" 
    py={4}
    css={{ backdropFilter: 'blur(10px)' }}
    >
    <Container 
      display="flex"
      p={2}
      maxW="container.lg"
      // wrap="wrap"
      // align="center"

      >
      <Box 
        align="center" 
        opacity={0.4} 
        fontSize="sm"
        >
        &copy; {new Date().getFullYear()} Luc Mosser. All Rights Reserved.
      </Box>
      <Box 
        px={[null, null, 8]}
        >
        <Socials />
      </Box>
    </Container>
  </Box>
);

export default Footer;
