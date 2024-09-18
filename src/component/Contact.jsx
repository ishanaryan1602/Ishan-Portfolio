import React from "react";
import styled from "styled-components";

const Description = styled.div`
  width: max-content;
  margin-top: 30px;
  font-size: 15px;
  font-weight: 400;
  color: white;
  margin-bottom: 10px;
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const Div = styled.div`
//   width: max-content;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  margin-bottom: 30px;
//   border: 1px solid red;
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const LinkBtn = styled.a`
  text-decoration: none;
  color: white;
  cursor: pointer;
`;

const Contact = () => {
  return (
    <Div>
      <Description>
        Mail : &nbsp;<LinkBtn href="mailto:ishanaryan1602@gmail.com" target="_blank">ishanaryan1602@gmail.com</LinkBtn>
      </Description>
      <Description>
        Linkedin : &nbsp;<LinkBtn href="mailto:https://www.linkedin.com/in/ishan-aryan-401029269/" target="_blank" >Ishan Aryan</LinkBtn>
      </Description>
    </Div>
  );
};

export default Contact;
