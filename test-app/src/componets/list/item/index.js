import React from 'react';
import './item.css';

export default function Item({photo, activePage}) {

  function toPage() {
    activePage();
  }

  return <li className={'item'} onClick={toPage}>
    <img className={'item__img'} src={photo.thumbnailUrl} alt="img"/>
    <div className={'item__wrap'}>
      <h2 className={'item__title'}>Reading {photo.id}</h2>
      <p className={'item__subtitle'}>{photo.subtitle}</p>
    </div>
  </li>
}
