import React from "react";
import { FaAngleRight } from "react-icons/fa";
import Wrapper from "./wrapper/Wrapper";
import Title from "./minimum/Title/Title";
import LabelWithField from "./medium/LabelWithField";
import Description from "./minimum/Description";
import SocialConnectBox from "./medium/SocialConnectBox";
import SocialButton from "./minimum/SocialButton";
import HorizontalLine from "./medium/HorizontalLine";
import Button from "./minimum/Button";

const App = () => {
  return (
    <Wrapper>
      <Title type="login" />
      <LabelWithField label="Email" />
      <LabelWithField label="Password" />
      <Description text="Forgot the password?" bold={false} />
      <SocialConnectBox>
        <Description text="Or connect with" bold={true} />
        <HorizontalLine style={{ marginTop: "1rem" }}>
          <SocialButton type="facebook" />
          <SocialButton type="google" />
          <SocialButton type="twitter" />
        </HorizontalLine>
      </SocialConnectBox>
      <HorizontalLine
        style={{
          marginTop: "2.5rem",
          marginLeft: "1.025rem",
          marginRight: "1.025rem"
        }}
      >
        <Description text="Go" bold={true} style={{ fontSize: "2rem" }} />
        <Button
          style={{
            background: "#099268",
            borderRadius: "50%",
            width: "3.5rem",
            height: "3.5rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#fff",
            marginLeft: "auto"
          }}
        >
          <FaAngleRight style={{ fontSize: "2rem" }} />
        </Button>
      </HorizontalLine>
    </Wrapper>
  );
};

export default App;
