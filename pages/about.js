import styled from "styled-components";
import Layout from "../components/Layout";

const Button = styled.button`
  border: 1px solid red;
  background-color: plum;
`;

const Title = styled.h1`
  color: red;
  background-color: rebeccapurple;
  border: 1px solid red;
  border-top-right-radius: 5px;
`;

export default () => (
  <Layout>
    <div>
      <Title>My First style component</Title>
      <Button>test</Button>
    </div>
  </Layout>
);
