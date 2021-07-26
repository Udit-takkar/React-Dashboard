import React from "react";
import "./App.css";
import NavBar from "./components/navbar";
import { ChakraProvider } from "@chakra-ui/react";
import Footer from "./components/Footer";
import { Router } from "@reach/router";
import Login from "./pages/login";
import SignUp from "./pages/SignUp";
import Home from "./pages/home";
import { SIGN_UP, LOG_IN } from "./constants/appConstants";

function App() {
  return (
    <ChakraProvider>
      <NavBar />
      <Router>
        <Home path="/" />
        <Login path={LOG_IN} />
        <SignUp path={SIGN_UP} />
      </Router>
      <Footer />
    </ChakraProvider>
  );
}

export default App;
