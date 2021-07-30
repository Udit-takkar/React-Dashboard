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
import React, { useEffect, useState } from "react";
import { LOG_IN } from "../constants/appConstants";
import { useAuth } from "../contexts/AuthProvider";

const SignUp = (props: RouteComponentProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, seterrorMessage] = useState(null);

  const { signUp, error } = useAuth();
  const SignUpUser = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    confirmPassword === password
      ? signUp({ email, password, name })
      : seterrorMessage("Passwords don't Match");
  };
  return (
    <Flex width="full" align="center" justifyContent="center">
      <Box p={2}>
        <Box textAlign="center">
          <Heading>Sign Up</Heading>
        </Box>
        <Box my={4} textAlign="left" borderWidth="2px" borderRadius="lg" p={8}>
          <form onSubmit={(e) => SignUpUser(e)}>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input
                required
                onChange={(e) => setName(e.target.value)}
                placeholder="John Doe"
              />
            </FormControl>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input
                required
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="user@saas-startup.com"
              />
            </FormControl>
            <FormControl mt={6}>
              <FormLabel>password</FormLabel>
              <Input
                required
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="*********"
              />
            </FormControl>
            <FormControl mt={6}>
              <FormLabel>confirm password</FormLabel>
              <Input
                required
                onChange={(e) => setConfirmPassword(e.target.value)}
                type="password"
                placeholder="*********"
              />
            </FormControl>
            <h3>{errorMessage && errorMessage}</h3>

            <Button width="full" mt={4} type="submit">
              Sign Up
            </Button>
            <Text fontSize="lg" color="red" align="center">
              {errorMessage && errorMessage}
            </Text>
          </form>
        </Box>
      </Box>
    </Flex>
  );
};

export default SignUp;
