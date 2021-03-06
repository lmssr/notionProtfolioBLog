import { motion } from 'framer-motion'
import Head from 'next/head'
import { GridItemStyle } from '@/components/grid-item'
import { name, description, url, socialImage } from '@/lib/config';

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -0, y: 20 }
}

const Layout = ({ children, title }) => (
  <motion.article
    initial="hidden"
    animate="enter"
    exit="exit"
    variants={variants}
    transition={{ duration: 0.4, type: 'easeInOut' }}
    style={{ position: 'relative' }}
  >
    <>
      {title && (
        <Head>
          <title>{title} - Luc Mosser</title>
          <meta property="og:title" content={title} />
          <meta property="og:type" content="website" />
          <meta property="og:url" content={url} />
          <meta property="og:image" content={socialImage} />
          <meta name="twitter:title" content={title} />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@SuitUpDev" />
          <meta name="twitter:description" content={description} />
          <meta name="twitter:image" content="https://images.unsplash.com/photo-1643584239394-b29bb3a150e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
        </Head>
      )}
      {children}

      <GridItemStyle />
    </>
  </motion.article>
)

export default Layout