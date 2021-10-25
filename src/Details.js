import React from 'react';
import {
  Heading,
  VStack,
  Text,
  SimpleGrid,
  Input,
  FormControl,
  GridItem,
  FormLabel,
  Select,
  Checkbox,
  Button,
  useBreakpointValue
} from '@chakra-ui/react';


function Details() {
  const colSpan = useBreakpointValue({base: 2, md: 1})
  return (
    <VStack w="full" h="full" p={10} spacing={10} alignItems="flex-start">
      <VStack spacing={3} alignItems="flex-start">
        <Heading size="2xl">
          Your Details
        </Heading>
        <Text>
          If you already have an account, click here to log in.
        </Text>
      </VStack>
      <SimpleGrid columns={2} columnGap={3} rowGap={6} w="full">
        <GridItem colSpan={colSpan}>
          <FormLabel>First Name</FormLabel>
          <Input placeholder="John"/>
        </GridItem>
        <GridItem colSpan={1}>
          <FormLabel>Last Name</FormLabel>
          <Input placeholder="Doe"/>
        </GridItem>
        <GridItem colSpan={colSpan}>
          <FormLabel>Address</FormLabel>
          <Input placeholder="1000 Mansiones Lane"/>
        </GridItem>
        <GridItem colSpan={colSpan}>
          <FormLabel>City</FormLabel>
          <Input placeholder="San Diego"/>
        </GridItem>
        <GridItem colSpan={2}>
          <FormLabel>Country</FormLabel>
          <Select>
            <option value="usa">United States of America</option>
            <option value="mex">Mexico</option>
            <option value="gb">United Kingdom</option>
            <option value="sk">South Korea</option>
          </Select>
        </GridItem>
        <GridItem colSpan={2}>
          <Checkbox defaultChecked>Ship to billing address</Checkbox>
        </GridItem>
        <GridItem colSpan={2}>
          <Button variant="primary" size="lg" w="full">Place Order</Button>
        </GridItem>
      </SimpleGrid>
    </VStack>
  )
}

export default Details;