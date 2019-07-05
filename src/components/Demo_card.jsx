import React from "react";
import styled from "styled-components";

const Card = styled.div`
  border: 1px;
  padding: 1em;

  border-radius: 0.1em;
  border-style: solid;

  background: linear-gradient(90deg, #d53369 0%, #daae51 100%);
  width: 15em;
`;

const Title = styled.h2`
  text-align: center;
`;
const Greeting = styled.p``;

class Demo_card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Card>
        <Title>this is a title</Title>
        <Greeting>this is a greeting heeeelloooo owo frend</Greeting>
      </Card>
    );
  }
}

export default Demo_card;
