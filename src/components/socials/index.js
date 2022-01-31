import { socials } from '@/lib/config';
import NextLink from 'next/link';
import { Icon, List, Link, ListItem, HStack } from '@chakra-ui/react';
import { QuestionOutlineIcon, EmailIcon } from '@chakra-ui/icons';
import {
  SiFacebook,
  SiTwitter,
  SiInstagram,
  SiLinkedin,
  SiYoutube,
  SiTiktok,
  SiMedium,
  SiTwitch,
  SiGithub,
  SiStackoverflow
} from 'react-icons/si';
import { GrMail } from 'react-icons/gr'

const Socials = () => {
  const getIcon = (icon) => {
    switch (icon) {
      case 'SiFacebook':
        return SiFacebook;
      case 'SiTwitter':
        return SiTwitter;
      case 'SiInstagram':
        return SiInstagram;
      case 'SiLinkedin':
        return SiLinkedin;
      case 'SiYoutube':
        return SiYoutube;
      case 'SiTiktok':
        return SiTiktok;
      case 'SiMedium':
        return SiMedium;
      case 'SiTwitch':
        return SiTwitch;
      case 'SiGithub':
        return SiGithub;
      case 'SiStackoverflow':
        return SiStackoverflow;
      default:
        return QuestionOutlineIcon;
    }
  };

  const renderSocials = socials.map((s) => {
    if (s.url === '') {
      return null;
    }

    return (
      <ListItem key={s.name} role="listitem">
        <Link href={s.url} target="_blank" rel="noopener noreferrer">
          <Icon as={getIcon(s.icon)} _hover={{fontSize: '18px' }}/>
        </Link>
      </ListItem>
    );
  });

  return (
    <List>
      <HStack spacing={6} justify="center">
        {renderSocials}
      <Link href="mailto:luc.mosser86@gmail.com" pb="1">
        <EmailIcon _hover={{fontSize: '18px' }}/>
      </Link>
      </HStack>
    </List>
  );
};

export default Socials;
