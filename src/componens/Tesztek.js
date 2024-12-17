import React from 'react'
import Teszt from './Teszt';


export default function Tesztek(props) {
  return (
    <div>
      <h2 className="text-center mb-4">Tesztkérdések</h2>
        {props.tesztlista.map((element) => (
          <Teszt adat={element} key={element.id} />
        ))}
    </div>
  );
}
