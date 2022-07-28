import {
    Container, 
    Heading, 
    SimpleGrid, 
    Divider,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Button,
    Textarea,
    Input,
    useColorModeValue,
  } from '@chakra-ui/react'
import Layout from '@/layouts/article';
import Section from '@/components/section'
import { WorkGridItem } from '../components/grid-item'
import { ChevronRightIcon } from '@chakra-ui/icons';
import { useForm, ValidationError } from '@formspree/react';


// const Contact = () => (
  
//   <Layout title="Contact">
//     <Container>
//       <Heading as="h3" fontSize={20} mb={4}>
//         Contact
//       </Heading>

//       <SimpleGrid columns={[1, 1, 2]} gap={6}>
//         <Section>
//             <FormControl isRequired>
//                 <FormLabel htmlFor='first-name'>First name</FormLabel>
//                 <Input id='first-name' placeholder='First name' />
//             </FormControl>
//         </Section>
//         <Section>
//             <FormControl isRequired>
//                 <FormLabel htmlFor='last-name'>Last name</FormLabel>
//                 <Input id='last-name' placeholder='Last name' />
//             </FormControl>
//         </Section>
//         </SimpleGrid>
//         <SimpleGrid columns={[1, 1, 1]} gap={6}>
//         <Section delay={0.2}>
//         <FormControl isRequired>
//                 <FormLabel htmlFor='email'>Email</FormLabel>
//                 <Input id='email' placeholder='Email' />
//             </FormControl>
//         </Section>
//       </SimpleGrid>
//       <SimpleGrid columns={[1, 1, 1]} >
//         <Section delay={0.3}>
//         <FormControl isRequired>
//                 <FormLabel htmlFor='object'>Object</FormLabel>
//                 <Input id='object' placeholder='Object' />
//             </FormControl>
//         </Section>
//       </SimpleGrid>
//       <SimpleGrid columns={[1, 1, 1]} >
//         <Section delay={0.4}>
//         <FormControl isRequired>
//                 <FormLabel htmlFor='message'>Message</FormLabel>
//                 <Textarea rows='10' id='message' placeholder='Message' />
//             </FormControl>
//         </Section>
//       </SimpleGrid>
//       <SimpleGrid columns={[1, 1, 1]} gap={6} >
//         <Section delay={0.5}>
//             <Button 
//               ml={6}
//               mr={6}
//               rightIcon={<ChevronRightIcon />} 
//               bgColor={useColorModeValue('#805ad5', '#fbd38d')} 
//               git color={useColorModeValue('white', '#1a202c')} 
//               _hover={{ transform: 'scale(1.1)' }}
//               type='submit'
//             >
//               Submit
//             </Button>
//         </Section>
//       </SimpleGrid>
//     </Container>
//   </Layout>
// )

function ContactForm() {
  const [state, handleSubmit] = useForm("contactMe");
  if (state.succeeded) {
      return (
      <Container 
        mt={20} 
        maxW='md' 
        centerContent>
        <Heading 
          as="h3" 
          fontSize={20} 
          mb={4}>
        Thanks, I will contact you soon 
        </Heading>
      </Container>
      )
  }
  return (
  <form onSubmit={handleSubmit}>
  <Layout title="Contact">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Contact
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
            <FormControl isRequired>
                <FormLabel htmlFor='first-name'>First name</FormLabel>
                <Input id='first-name' placeholder='First name' />
            </FormControl>
        </Section>
        <Section>
            <FormControl isRequired>
                <FormLabel htmlFor='last-name'>Last name</FormLabel>
                <Input id='last-name' placeholder='Last name' />
            </FormControl>
        </Section>
        </SimpleGrid>
        
        <SimpleGrid columns={[1, 1, 1]} gap={6}>
        <Section delay={0.2}>
        <FormControl isRequired>
                <FormLabel htmlFor='email'>Email</FormLabel>
                <Input 
                  id='email' 
                  type='email' 
                  name='email'
                  placeholder='Email' />
                <ValidationError 
                  prefix="Email" 
                  field="email"
                  errors={state.errors} />
        </FormControl>
        </Section>
      </SimpleGrid>
      
      <SimpleGrid columns={[1, 1, 1]} >
        <Section delay={0.3}>
        <FormControl isRequired>
                <FormLabel htmlFor='object'>Object</FormLabel>
                <Input id='object' placeholder='Object' />
            </FormControl>
        </Section>
      </SimpleGrid>
      
      <SimpleGrid columns={[1, 1, 1]} >
        <Section delay={0.4}>
        <FormControl isRequired>
                <FormLabel htmlFor='message'>Message</FormLabel>
                <Textarea 
                  rows='10' 
                  id='message' 
                  name='message'
                  placeholder='Message' />
            </FormControl>
        </Section>
      </SimpleGrid>
      
      <SimpleGrid columns={[1, 1, 1]} gap={6} >
        <Section delay={0.5}>
            <Button 
              type="submit" 
              disabled={state.submitting}
              ml={6}
              mr={6}
              rightIcon={<ChevronRightIcon />} 
              bgColor={useColorModeValue('#805ad5', '#fbd38d')} 
              git color={useColorModeValue('white', '#1a202c')} 
              _hover={{ transform: 'scale(1.1)' }} >
              Submit
            </Button>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
  </form>
  );
}


export default ContactForm
export { getServerSideProps } from '../components/chakra'