import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { Icon, ExternalLinkIcon } from '@chakra-ui/icons'
import { DiRuby, DiRor, DiHtml5, DiCss3, DiJavascript, DiBootstrap } from "react-icons/di";
import { FaFigma } from "react-icons/fa";
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../layouts/article'

const Work = () => (
  <Layout title="RentALife">
    <Container>
      <Title>
        Rent A Life <Badge>2019</Badge>
      </Title>
      <P>
        Rent A life was a class project with the Wagon. 
        the goal was to create a Airbnb clone. We had 5 days to create everything from A to Z, and my team was amazing.
      </P>
      <List ml={4} my={8}>
        {/* <ListItem ml={4} my={6}>
          <Meta>Website</Meta>
          <Link href="#">
          <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem> */}
        {/* <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/iOS/Android</span>
        </ListItem> */}
        <ListItem ml={4} my={6}>
          <Meta>Stack</Meta>
          <span>
            <Icon as={DiRuby} w={7} h={7} mx="2px" verticalAlign	="middle"/>
            <Icon as={DiRor} w={8} h={8} mx="2px" verticalAlign	="middle"/>
            <Icon as={DiHtml5} w={8} h={8} mx="2px" verticalAlign	="middle"/>
            <Icon as={DiCss3} w={8} h={8} mx="2px" verticalAlign	="middle"/>
            <Icon as={DiJavascript} w={8} h={8} mx="2px" verticalAlign	="middle"/>
            <Icon as={DiBootstrap} w={8} h={8} mx="2px" verticalAlign	="middle"/>
            <Icon as={FaFigma} w={7} h={7} mx="2px" verticalAlign	="middle"/>
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

      <WorkImage src="/images/works/rentalife.png" alt="RentALife" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'