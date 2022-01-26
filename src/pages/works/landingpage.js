import { Container, Badge, Link, List, ListItem, Image } from '@chakra-ui/react'
import { Icon, ExternalLinkIcon } from '@chakra-ui/icons'
import { DiWordpress, DiPhp, DiHtml5, DiCss3, DiJavascript } from "react-icons/di";
import { SiWebgl } from "react-icons/si";
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../layouts/article'

const Work = () => (
  <Layout title="LandingPage">
    <Container>
      <Title>
        3D Landing Page <Badge>2020-</Badge>
      </Title>
      <P>
        It was one of my first use of 3D in a "real" project
      </P>
      <List ml={4} my={8}>
        <ListItem ml={4} my={6}>
          <Meta>Website</Meta>
          <Link href="https://lmssr.github.io/threejs_portfolio/">
          https://lmssr.github.io/threejs_portfolio/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        {/* <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/iOS/Android</span>
        </ListItem> */}
        <ListItem ml={4} my={6}>
          <Meta>Stack</Meta>
          <span>
            <Icon as={SiWebgl} w={8} h={8} mx="2px" verticalAlign	="middle"/>
            <Icon as={DiHtml5} w={8} h={8} mx="2px" verticalAlign	="middle"/>
            <Icon as={DiCss3} w={8} h={8} mx="2px" verticalAlign	="middle"/>
            <Icon as={DiJavascript} w={8} h={8} mx="2px" verticalAlign	="middle"/>
          </span>
        </ListItem>
        {/* <ListItem ml={4} my={6}>
          <Meta>Blogpost</Meta>
          <Link href="https://blog.inkdrop.app/how-ive-attracted-the-first-500-paid-users-for-my-saas-that-costs-5-mo-7a5b94b8e820">
            How I’ve Attracted The First 500 Paid Users For My SaaS That Costs
            $5/mo <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem> */}
      </List>

      <Image src="/images/works/landingpage.gif" alt="icon" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'