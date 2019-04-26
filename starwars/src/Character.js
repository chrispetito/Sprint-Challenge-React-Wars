import React from "react";

function Character(props) {
  return (
    <div>
      <div id={props.character.id} className="character-card">
        <h2 className='character-name'>{props.character.name}</h2>
        <div className='individual-list'>
          <ul>
            <li>
              <strong>Birth Year: </strong> {props.character.birth_year}
            </li>
            <li>
              <strong>Gender: </strong> {props.character.gender}
            </li>
            <li>
              <strong>Mass: </strong> {props.character.mass}
            </li>
            <li>
              <strong>Eye Color: </strong> {props.character.eye_color}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Character;
