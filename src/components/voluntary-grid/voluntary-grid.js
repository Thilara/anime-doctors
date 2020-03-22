// @flow
import React from 'react';

import CardGridItem from './voluntary-grid-item.component'
import './voluntary-grid.scss';

type Props = {
  items: [],
  onClick: Function
};

const VoluntaryGrid = (props: Props) => {
  return (
    <div className="container">
    <div className="columns is-multiline is-8">
      {(props.items || []).map(item => (
        <CardGridItem
          voluntary={item}
          onClick={slug => props.onClick(slug)}
          key={item.slug}
        />
      ))}
    </div>
  </div>
  );
};

export default VoluntaryGrid;
