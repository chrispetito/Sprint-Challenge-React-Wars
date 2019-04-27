import React from "react";
import "./components/StarWars.css";

function Character(props) {

    const birthYear = <li>Birth Year: {props.character.birth_year}</li>
    const gender = <li>Gender: {props.character.gender}</li>
    const mass = <li>Mass: {props.character.mass}</li>
    const height = <li>Height: {props.character.height}</li>
    const eyeColor = <li>Eye Color: {props.character.eye_color}</li>
    const hairColor = <li>Hair Color: {props.character.hair_color}</li>

    const newArray = [birthYear, gender, mass, height, eyeColor, hairColor];

    function genderCheck() {
        if (props.character.gender === 'n/a') {
            newArray.splice(newArray.indexOf(gender), 1)
        } else {
            return props.character.gender;
        }
    }

    genderCheck();

    function hairCheck() {
        if (props.character.hair_color === 'n/a') {
            newArray.splice(newArray.indexOf(hairColor),1) 
        } else {
            return props.character.hair_color;
        }
    }

    hairCheck();

  return (
    <div id={props.character.created} className="character-card">
      <h2 className="character-name">{props.character.name}</h2>
      <div className="individual-list">
      <div>{newArray}</div>
      </div>
    </div>
  );
}

export default Character;

//

