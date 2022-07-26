import { useState } from "react";
import styled from "styled-components";
import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm";
import { Button } from "../styles";
import Home from "./home/Home";

function Login({ user, onLogin }) {
  const [showLogin, setShowLogin] = useState(true);

  if(user) return <Home />

  return (
    <Wrapper>
      <Logo>Mitalist</Logo>
      {showLogin ? (
        <>
          <LoginForm user={user} onLogin={onLogin} />
          <Divider />
          <p>
            New User? &nbsp;
            <Button color="secondary" onClick={() => setShowLogin(false)}>
              Sign Up
            </Button>
          </p>
        </>
      ) : (
        <>
          <SignUpForm onLogin={onLogin} />
          <Divider />
          <p>
            Existing user? &nbsp;
            <Button color="secondary" onClick={() => setShowLogin(true)}>
              Log In
            </Button>
          </p>
        </>
      )}
    </Wrapper>
  );
}

const Logo = styled.h1`
  font-family: Avant Garde,Avantgarde,Century Gothic,CenturyGothic,AppleGothic,sans-serif; 
  font-size: 6rem;
  font-variant: small-caps;
  font-weight: 100;
  letter-spacing: .5rem;
  color: #c71568;
  margin: 8px 0 16px;
`;

const Wrapper = styled.section`
  max-width: 500px;
  margin: 40px auto;
  padding: 16px;
`;

const Divider = styled.hr`
  border: none;
  border-bottom: 1px solid #ccc;
  margin: 16px 0;
`;

export default Login;