import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
} from "@chakra-ui/react";
import { Link, RouteComponentProps } from "@reach/router";
import React from "react";
import { SIGN_UP } from "../constants/appConstants";

const Login = (props: RouteComponentProps) => {
  return (
    <Flex width="full" align="center" justifyContent="center">
      <Box p={2}>
        <Box textAlign="center">
          <Heading>Login</Heading>
        </Box>
        <Box my={4} textAlign="left" borderWidth="2px" borderRadius="lg" p={8}>
          <form>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input type="email" placeholder="Enter Email Address" />
            </FormControl>
            <FormControl mt={6}>
              <FormLabel>password</FormLabel>
              <Input type="password" placeholder="Enter Password" />
            </FormControl>
            <p>
              Don't have an account? <Link to={SIGN_UP}>Sign Up</Link>
            </p>
            <Button width="full" mt={4} type="submit">
              Log In
            </Button>
          </form>
        </Box>
      </Box>
    </Flex>
  );
};

export default Login;
