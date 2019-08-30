import React from 'react'

function CharacterCard(props) {
  return (
    <div>
      {props.name}
      {props.height}
      {props.gender}
      {props.birth_year}
    </div>
  )
}

export default CharacterCard