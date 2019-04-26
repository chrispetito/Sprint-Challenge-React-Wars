import React from "react";
import Character from "./Character";
import "./components/StarWars.css";

function CharacterList(props) {
  return (
    <div className="character-list">
      {props.listProp.starwarsChars.map(character => {
        return <Character key={character.id} character={character} />;
      })}
    </div>
  );
}

export default CharacterList;
