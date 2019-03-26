import styled from "styled-components";

const Title = styled.h2`
  font-family: "Montserrat", sans-serif;
  font-size: 3em;
  font-weight: 700;
  color: rgba(1, 1, 1, 1);
  letter-spacing: 2px;
  text-transform: lowercase;
`;
const Description = styled.p`
  width: 55%;
  margin: 0px 0px 2em;
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 28px;
  color: rgba(71, 71, 71, 0.9);
`;

const Slug = props => (
  <div>
    <Title className="body-pad">{props.title}</Title>
    <Description className="body-pad">{props.description}</Description>
  </div>
);

export default Slug;
