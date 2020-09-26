import React, {useState} from 'react';
import './list.css';
import {useQuery} from '@apollo/client';
import {ALL_PHOTOS_QUERY} from '../../gql/queries';
import Item from './item';
import Detail from '../detail';

export default function List() {
  const { error, loading, data } = useQuery(ALL_PHOTOS_QUERY);

  const [isDetail, setDetail] = useState(false);

  function activeDetail() {
    setDetail(true);
  }

  if (loading) {
    return <div>
      Loading...
    </div>
  }

  if (error) {
    return <div>
      Something went wrong
    </div>
  }

  const itemList = data.photos.map(photo => <Item
    activePage={activeDetail}
    key={photo.id}
    photo={photo}/>);

  return (
    <ul className={'list'}>
      {
        isDetail ? <Detail/> : itemList
      }
    </ul>
  )
}
