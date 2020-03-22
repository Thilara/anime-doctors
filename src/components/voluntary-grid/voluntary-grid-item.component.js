// @flow
import React, { Component } from 'react';
import Image from 'gatsby-image';
import { Link } from 'gatsby';

import './voluntary-grid.scss';

type VoluntaryGridItemProps = {
  voluntary: any,
  onClick?: Function,
};

class VoluntaryGridItem extends Component<VoluntaryGridItemProps> {
  render() {
    const { voluntary } = this.props;
    return (
      <div className="column is-one-third-desktop is-half-tablet is-full-mobile is-one-quarter-fullhd">
        <Link to={`/voluntario/${voluntary.slug}`}>
          <div className="box voluntary-grid-item has-text-centered">
            <div className="voluntary-grid-item__avatar">
              <figure className="image is-96x96">
                <Image
                  fluid={voluntary.avatar.childImageSharp.fluid}
                  alt={voluntary.title}
                  style={{ width: 96, height: 96, borderRadius: '50%' }}
                />
              </figure>
            </div>
            <div style={{ marginBottom: 10 }}>
              <p className="title is-5">{voluntary.name}</p>
              <p className="subtitle is-7">{voluntary.position}</p>
            </div>
            <p className="has-text-grey">{voluntary.title}</p>
          </div>
        </Link>
      </div>
    );
  }
}

export default VoluntaryGridItem;
