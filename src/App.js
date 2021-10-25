import React from 'react';
import {
  ChakraProvider
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import theme from './theme/index.js';
import IndexPage from './IndexPage';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <IndexPage/>
    </ChakraProvider>
  );
}

export default App;
