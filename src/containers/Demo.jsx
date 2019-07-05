import React from "react";
import Demo_card from "../components/Demo_card.jsx";

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
      <div>
        <Demo_card />
      </div>
    );
  }
}

export default Demo;
