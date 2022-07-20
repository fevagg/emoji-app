import React from "react";

//Importing components
import { Emoji } from "./components/Emoji";
import { Search } from "./components/Search";
import { Header } from "./components/Header";
//Importing assets;
import "./assets/style/App.css";

function App() {
  const [value, setValue] = React.useState({});

  //Handle the inputs from app.js to passing values to the child components through props;
  const handleInputs = (input) => {
    const inputName = input.target.name;
    const inputValue = input.target.value;
    //Using prevState parameter to keep the other input value stored;
    setValue((prev) => {
      return {
        ...prev,
        [inputName]: inputValue,
      };
    });
  };

  //Setting a default category if it doesn't exists;
  React.useEffect(() => {
    if (!value.category) {
      setValue((prev) => {
        return {
          ...prev,
          category: "Smileys & Emotion",
        };
      });
    }
  }, []);

  return (
    <main className="App-body">
      <Header/>
      <Search handleInput={handleInputs} />
      <Emoji search={value} />
    </main>
  );
}

export default App;
