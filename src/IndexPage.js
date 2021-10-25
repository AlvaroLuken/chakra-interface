import React from 'react';
import {
  Flex,
  Container,
  Heading,
  VStack,
  Text
} from '@chakra-ui/react';
import Details from './Details';
import Cart from './Cart';


function IndexPage() {
  return(
    <Container maxWidth="container.xl" p={0}>
      <Flex h={{base: 'auto', md: '100vh'}} py={[0, 10, 20]} direction={{base: 'column-reverse', md: 'row'}}>
        <Details/>
        <Cart/>
      </Flex>
    </Container>
  )
}

export default IndexPage;