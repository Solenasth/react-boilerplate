import React from "react";
import Demo_card from "../components/Demo_card.jsx";
import styled from "styled-components";

const Demo_card_container = styled.div`
  display: flex;
`;

class Demo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      greetings: [
        { lang: "English", greeting: "Hello World" },
        { lang: "Español", greeting: "Hola Mundo" },
        { lang: "Afrikáans", greeting: "Groete Wêreld" },
        { lang: "Uzbek", greeting: "Salom Dunyo" },
        { lang: "Japanese", greeting: "Kon'nichiwa sekai" },
        { lang: "Serbian", greeting: "Zdravo Svete" },
        { lang: "Hindi", greeting: "Namaste Duniya" },
        { lang: "Nepali", greeting: "Namaskāra sansāra" },
        { lang: "German", greeting: "Hallo Welt" }
      ]
    };
  }
  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  getRandomGreeting() {
    return this.state.greetings[
      this.getRandomInt(0, this.state.greetings.length)
    ];
  }

  render() {
    return (
      <Demo_card_container>
        <Demo_card />
      </Demo_card_container>
    );
  }
}

export default Demo;
