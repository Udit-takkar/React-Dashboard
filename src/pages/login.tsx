import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
} from "@chakra-ui/react";
import { Link, RouteComponentProps } from "@reach/router";
import React, { useState } from "react";
import { SIGN_UP } from "../constants/appConstants";
import { useAuth } from "../contexts/AuthProvider";

const Login = (props: RouteComponentProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn, error } = useAuth();
  const LogInUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await signIn({ email, password });
    console.log(res);
  };

  return (
    <Flex width="full" align="center" justifyContent="center">
      <Box p={2}>
        <Box textAlign="center">
          <Heading>Login</Heading>
        </Box>
        <Box my={4} textAlign="left" borderWidth="2px" borderRadius="lg" p={8}>
          <form onClick={(e) => LogInUser(e)}>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Enter Email Address"
              />
            </FormControl>
            <FormControl mt={6}>
              <FormLabel>password</FormLabel>
              <Input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Enter Password"
              />
            </FormControl>
            <p>
              Don't have an account? <Link to={SIGN_UP}>Sign Up</Link>
            </p>
            <Button width="full" mt={4} type="submit">
              Log In
            </Button>
            {error && <Text color="red"> {error.message}</Text>}
          </form>
        </Box>
      </Box>
    </Flex>
  );
};

export default Login;
