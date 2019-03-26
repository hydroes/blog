import styled from "styled-components";

const AboutFlexContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: black;
`;

const AboutFlexDiv = styled.div`
  width: 40%;
  /* color: rgba(154, 154, 154, 1); */

  background-color: ${props => props.backColor || ""};
  color: ${props => props.foreColor || ""};
`;

const Title = styled.h2`
  font-size: 3em;
  font-weight: 700;
  letter-spacing: 2px;
  color: #ffffff;
`;

const Paragraph = styled.p`
  color: rgba(154, 154, 154, 1);
`;

const AboutMe = () => (
  <AboutFlexContainer>
    <AboutFlexDiv backColor="rgba(1, 1, 1, 1)" foreColor="#ffffff">
      <Title>about me</Title>
      <h3>sent at laoreet libero, molestie euismod enim. Suspend</h3>
      <Paragraph>
        Praesent at laoreet libero, molestie euismod enim. Suspendisse pulvinar,
        erat vel tincidunt rutrum, leo nibh ornare orci, nec pulvinar sem diam
        at sem.
      </Paragraph>
    </AboutFlexDiv>
    {/* @todo: remove the style */}
    <AboutFlexDiv backColor="#e9bc03" style={{ "text-align": "center" }}>
      <img src="https://via.placeholder.com/470x300.png" />
    </AboutFlexDiv>
  </AboutFlexContainer>
);

export default AboutMe;
