module.exports = {
  // Basic site information (required)
  name: 'Luc Mosser',
  domain: '',
  url: 'https://blog-wheat-kappa.vercel.app/',
  description: 'Luc Mosser personal website and blog about life, music, code and more.',
  fathomCode: 'TBSAIDMS',

  // SEO specific (optional)
  defaultSocialImage:
    'https://images.pexels.com/photos/10166802/pexels-photo-10166802.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',

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
