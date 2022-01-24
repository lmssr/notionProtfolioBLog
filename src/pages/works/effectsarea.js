import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { Icon, ExternalLinkIcon } from '@chakra-ui/icons'
import { DiWordpress, DiPhp, DiHtml5, DiCss3, DiJavascript } from "react-icons/di";
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../layouts/article'

const Work = () => (
  <Layout title="EffectsArea">
    <Container>
      <Title>
        Effects Area <Badge>2016-</Badge>
      </Title>
      <P>
        A Markdown note-taking app with 100+ plugins, cross-platform and
        encrypted data sync support. The life-time revenue is more than $200k.
      </P>
      <List ml={4} my={8}>
        <ListItem ml={4} my={6}>
          <Meta>Website</Meta>
          <Link href="https://www.inkdrop.app/">
            https://www.inkdrop.app/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        {/* <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/iOS/Android</span>
        </ListItem> */}
        <ListItem ml={4} my={6}>
          <Meta>Stack</Meta>
          <span>
            <Icon as={DiWordpress} w={8} h={8} mx="2px" verticalAlign	="middle"/>
            <Icon as={DiPhp} w={8} h={8} mx="2px" verticalAlign	="middle"/>
            <Icon as={DiHtml5} w={8} h={8} mx="2px" verticalAlign	="middle"/>
            <Icon as={DiCss3} w={8} h={8} mx="2px" verticalAlign	="middle"/>
            <Icon as={DiJavascript} w={8} h={8} mx="2px" verticalAlign	="middle"/>
          </span>
        </ListItem>
        <ListItem ml={4} my={6}>
          <Meta>Blogpost</Meta>
          <Link href="https://blog.inkdrop.app/how-ive-attracted-the-first-500-paid-users-for-my-saas-that-costs-5-mo-7a5b94b8e820">
            How I’ve Attracted The First 500 Paid Users For My SaaS That Costs
            $5/mo <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/effectsarea2.png" alt="Inkdrop" />
      <WorkImage src="/images/works/effectsarea1.png" alt="Inkdrop" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'