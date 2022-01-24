import React from "react";

import MenuItem from "../menu-items/menu-items.component";
import hats from '../../assets/hats.jpg';
import jackets from '../../assets/jackets.jpg';
import sneakers from '../../assets/sneakers.jpg';
import mens from '../../assets/mens.jpg';
import womens from '../../assets/womens.jpg';

import './directory.styles.scss';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'hats',
          imageUrl: hats,
          id: 1,
          linkUrl: 'shop/hats'
        },
        {
          title: 'jackets',
          imageUrl: jackets,
          id: 2,
          linkUrl: 'shop/jackets'
        },
        {
          title: 'sneakers',
          imageUrl: sneakers,
          id: 3,
          linkUrl: 'shop/sneakers'
        },
        {
          title: 'womens',
          imageUrl: womens,
          size: 'large',
          id: 4,
          linkUrl: 'shop/womens'
        },
        {
          title: 'mens',
          imageUrl: mens,
          size: 'large',
          id: 5,
          linkUrl: 'shop/mens'
        }
      ]

    }
  }
  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ title, imageUrl, id, size }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        ))}
      </div>
    );
  }

}

export default Directory;