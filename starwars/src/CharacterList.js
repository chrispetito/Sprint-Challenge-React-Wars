import React from "react";
import Character from "./Character";
import "./components/StarWars.css";

function CharacterList(props) {
    console.log('Character List props:', props) //console log
  return (
    <div className="character-list">
      {props.listProp.starwarsChars.map(character => {
        return <Character key={character.id} character={character} />;
      })}
    </div>
  );
}

export default CharacterList;
