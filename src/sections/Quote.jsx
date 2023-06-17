import React from "react";
import styled from "styled-components";

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  width: 100vw;
  height: 100vh;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;
  background: var(--dark);
  color: var(--white);
`;

const Text = styled.p`
  position: relative;
  overflow: hidden;
  width: 50%;
  height: var(--fontlg);
  font-size: var(--fontlg);
  span{
    background-color: lightblue;
  }
`;

const Quote = () => {
  return (
    <Section>
      <TextContainer>
        <Text>
          <span>line-1</span>
        </Text>
        <Text>
          <span>line-2</span>
        </Text>
        <Text>
          <span>line-3</span>
        </Text>
        <Text>
          <span>line-4</span>
        </Text>
        <Text>
          <span>line-5</span>
        </Text>
      </TextContainer>
    </Section>
  );
};

export default Quote;
