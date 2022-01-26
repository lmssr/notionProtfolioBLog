import { Box, Container } from '@chakra-ui/react';

import { GrMail } from 'react-icons/gr'

import Socials from '@/components/socials';

const Footer = () => (
  <Box 
    position="absolute" 
    as="footer" 
    // w="100%" 
    bottom="0"
    py={4}
    css={{ backdropFilter: 'blur(10px)' }}
    pr={130}
    pl={130}
    >
    <Container 
      display="flex"
      p={2}
      maxW="container.md"
      wrap="wrap"
      >
      <Box 
        opacity={0.4} 
        fontSize="sm"
        pr={5}
        >
        &copy; {new Date().getFullYear()} Luc Mosser.  
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
