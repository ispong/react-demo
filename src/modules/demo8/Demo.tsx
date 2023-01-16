import React from "react";

export default function Demo() {

  const a = 1;

  const dog = {
    name:"张三",
    age: 12
  };

  const {name} = dog;

  const {'name': dogName} = dog;

  const [{A},b]= [
    {A: 12},
    ()=>{
      return 21;
    }
  ]

  return <>
    <ul>
      <li>{a}</li>
      <li>{dog.age}</li>
      <li>{name}</li>
      <li>{dogName}</li>
      <li>{A}</li>
      <li>{b()}</li>
    </ul>
  </>;

};