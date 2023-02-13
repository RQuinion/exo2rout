import './App.css';
import Card from './components/card';
import React from 'react';

const MonComposant = (props) => {
  const { title, description } = props;
  return (
    <div className='card'>
      <Card descri={"description de l'image"} name={"image"} />
    </div>
  );
}