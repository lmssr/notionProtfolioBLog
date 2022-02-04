module.exports = {
  // Basic site information (required)
  name: 'Luc Mosser',
  domain: 'lucmosser.com',
  url: 'https://www.lucmosser.com/',
  description: 'Luc Mosser personal website and blog about life, music, code and more.',
  fathomCode: 'TBSAIDMS',

  // SEO specific (optional)
  defaultSocialImage:
    'https://images.unsplash.com/photo-1575330741514-88046900ba72?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1166&q=80',

  /* 
    Social media URLS (optional)

    - Don't have one of the socials below? You can leave the URL empty like ''.
    - As of now it's not possible to alter the icons (we might add this in a later version), 
      so please keep the icon value as is.
  */
  socials: [
    {
      name: 'Facebook',
      url: '',
      icon: 'SiFacebook',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/Luc_Mosser',
      icon: 'SiTwitter',
    },
    {
      name: 'Instagram',
      url: '',
      icon: 'SiInstagram',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/luc-mosser/',
      icon: 'SiLinkedin',
    },
    {
      name: 'Youtube',
      url: '',
      icon: 'SiYoutube',
    },
    {
      name: 'TikTok',
      url: '',
      icon: 'SiTiktok',
    },
    {
      name: 'Medium',
      url: 'https://medium.com/@luc.mosser86',
      icon: 'SiMedium',
    },
    {
      name: 'Twitch',
      url: '',
      icon: 'SiTwitch',
    },
    {
      name: 'Github',
      url: 'https://github.com/lmssr',
      icon: 'SiGithub',
    },
    {
      name: 'Stackoverflow',
      url: 'https://stackoverflow.com/users/13640675/luc-mosser',
      icon: 'SiStackoverflow',
    },
  ],

  /* 
    Currently, it's not possible to fetch the images from the notion API.
    So until then, you can make use of the postImageSource.

    If you add this url as a link to your post, it will always get rendered as an image.
  */
  postImageSource: [
    'images.unsplash.com',
    'res.cloudinary.com',
    'dl.dropboxusercontent.com',
  ],
};
