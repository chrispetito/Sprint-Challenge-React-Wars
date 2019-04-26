import React from "react";
import "./components/StarWars.css";

function Character(props) {
  return (
    <div id={props.character.created} className="character-card">
      <h2 className="character-name">{props.character.name}</h2>
      <div className="individual-list">
        <ul>
          <li>Birth Year: {props.character.birth_year}</li>
          <li>Gender: {props.character.gender}</li>
          <li>Mass: {props.character.mass}</li>
          <li>Height: {props.character.height}</li>
          <li>Eye Color: {props.character.eye_color}</li>
          <li>Hair Color: {props.character.hair_color}</li>
        </ul>
      </div>
    </div>
  );
}

export default Character;
