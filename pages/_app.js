// import App from 'next/app'
import { MDXProvider } from "@mdx-js/react";
import * as Chakra from "@chakra-ui/react";
import {
  Alert,
  ChakraProvider,
  Container,
  Box,
  Heading,
  Code,
  Text,
  Image,
  Button,
} from "@chakra-ui/react";

const components = {
  ...Chakra,
  img: Image,
  button: Button,
  h1: (props) => <Heading as="h1" size="2xl" {...props} />,
  h2: (props) => <Heading as="h2" size="xl" {...props} />,
  h3: (props) => <Heading as="h3" size="lg" {...props} />,
  h4: (props) => <Heading as="h4" size="md" {...props} />,
  p: (props) => <Text my="1" {...props} />,
  br: ({ reset, ...props }) => (
    <Box
      as={reset ? "br" : undefined}
      height={reset ? undefined : "24px"}
      {...props}
    />
  ),
  pre: (props) => <Code {...props} />,
  code: Code,
  blockquote: (props) => (
    <Alert
      role="none"
      status="info"
      variant="left-accent"
      as="blockquote"
      rounded="4px"
      my="1"
      {...props}
    />
  ),
};

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <MDXProvider components={components}>
        <Container>
          <Component {...pageProps} />
        </Container>
      </MDXProvider>
    </ChakraProvider>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp;
