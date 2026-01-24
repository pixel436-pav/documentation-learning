import React from 'react'

const people = [
  'Creola Katherine Johnson: mathematician',
  'Mario José Molina-Pasquel Henríquez: chemist',
  'Mohammad Abdus Salam: physicist',
  'Percy Lavon Julian: chemist',
  'Subrahmanyan Chandrasekhar: astrophysicist'
];
// map function goes through every item in the list and , apply the function on it and creates an array out of it 
export default function Render() {
  const listItems = people.map((person,index) =>
    <li key={index}>{person}</li>
  );
  return <ol>{listItems}</ol>;
}
