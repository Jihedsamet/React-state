import "./App.css";
import Person from "./Components/Person/Person";
import React from "react";



class App extends React.Component {
  constructor(props) {
    super(props)
  this.state = {
      user: [
        {
          nom: "スズキホンダ",
          img: "https://europe.chinadaily.com.cn/china/images/attachement/jpg/site1/20170105/b083fe955fd619d7d1c80d.jpg",
          profesion: "devoloper",
        },
      ],
      age:18,
    };
  }

  render() {
    return (
      <>
        
        {this.state.user.map((user, key) => (
          <Person
            key={key}
            nom={user.nom}
            img={user.img}
            profesion={user.profesion}
          />
        ))}
      </>
    );
  }
}

export default App;
