import brownHat from '../../assets/brown-hat.jpg';
import brownCap2 from '../../assets/brown-cap2.jpg';
import blueHat from '../../assets/blue-hat.jpg';
import greyHat from '../../assets/grey-hat.jpg';
import greenHat from '../../assets/green-hat.jpg';
import redHat from '../../assets/red-hat.jpg';
import wolfCap from '../../assets/wolf-cap.jpg';
import palmtreeCap from '../../assets/palm-tree-cap.jpg';
import blueSnapBack from '../../assets/blue-snap-bag.jpg';

import adidasNmd from '../../assets/adidas-nmd.jpg';
import adidasYeezy from '../../assets/adidas-yeezy.jpg';
import nikeRed from '../../assets/nike-red.jpg';
import nikeBrown from '../../assets/nike-brown.jpg';
import blackConverse from '../../assets/black-converse.jpg';
import airJordan from '../../assets/air jordan.jpg';
import NikeWhiteAirForce from '../../assets/Nike White AirForce.jpg';
import timberland from '../../assets/timberland.jpg';

import blackJean from '../../assets/blackJean.jpg';
import blueJean from '../../assets/blueJean.jpg';
import greyJean from '../../assets/greyJean.jpg';
import brownSherling from '../../assets/brownSherling.jpg';
import tanTrench from '../../assets/tanTrench.jpg';

import women1 from '../../assets/women1.jpg';
import women2 from '../../assets/women2.jpg';
import women3 from '../../assets/women3.jpg';
import women4 from '../../assets/women4.jpg';
import women5 from '../../assets/women5.jpg';
import women6 from '../../assets/women6.jpg';
import women7 from '../../assets/women7.jpg';

import men1 from '../../assets/men1.jpg';
import men2 from '../../assets/men2.jpg';
import men3 from '../../assets/men3.jpg';
import men4 from '../../assets/men4.jpg';
import men5 from '../../assets/men5.jpg';
import men6 from '../../assets/men6.jpg';

const SHOP_DATA = [
  {
    id: 1,
    title: 'Hats',
    routeName: 'hats',
    items: [
      {
        id: 1,
        name: 'Brown Brim',
        imageUrl: brownCap2,
        price: 25
      },
      {
        id: 2,
        name: 'Blue Beanie',
        imageUrl: blueHat,
        price: 18
      },
      {
        id: 3,
        name: 'Brown Cowboy',
        imageUrl: brownHat,
        price: 35
      },
      {
        id: 4,
        name: 'Grey Brim',
        imageUrl: greyHat,
        price: 25
      },
      {
        id: 5,
        name: 'Green Beanie',
        imageUrl: greenHat,
        price: 18
      },
      {
        id: 6,
        name: 'Palm Tree Cap',
        imageUrl: palmtreeCap,
        price: 14
      },
      {
        id: 7,
        name: 'Red Beanie',
        imageUrl: redHat,
        price: 18
      },
      {
        id: 8,
        name: 'Wolf Cap',
        imageUrl: wolfCap,
        price: 14
      },
      {
        id: 9,
        name: 'Blue Snapback',
        imageUrl: blueSnapBack,
        price: 16
      }
    ]
  },
  {
    id: 2,
    title: 'Sneakers',
    routeName: 'sneakers',
    items: [
      {
        id: 1,
        name: 'Adidas NMD',
        imageUrl: adidasNmd,
        price: 220
      },
      {
        id: 2,
        name: 'Adidas Yeezy',
        imageUrl: adidasYeezy,
        price: 280
      },
      {
        id: 3,
        name: 'Black Converse',
        imageUrl: blackConverse,
        price: 110
      },
      {
        id: 4,
        name: 'Nike White AirForce',
        imageUrl: NikeWhiteAirForce,
        price: 160
      },
      {
        id: 5,
        name: 'Nike Red High Tops',
        imageUrl: nikeRed,
        price: 160
      },
      {
        id: 6,
        name: 'Nike Brown High Tops',
        imageUrl: nikeBrown,
        price: 160
      },
      {
        id: 7,
        name: 'Air Jordan Limited',
        imageUrl: airJordan,
        price: 190
      },
      {
        id: 8,
        name: 'Timberlands',
        imageUrl: timberland,
        price: 200
      }
    ]
  },
  {
    id: 3,
    title: 'Jackets',
    routeName: 'jackets',
    items: [
      {
        id: 1,
        name: 'Black Jean Shearling',
        imageUrl: blackJean,
        price: 125
      },
      {
        id: 2,
        name: 'Blue Jean Jacket',
        imageUrl: blueJean,
        price: 90
      },
      {
        id: 3,
        name: 'Grey Jean Jacket',
        imageUrl: greyJean,
        price: 90
      },
      {
        id: 4,
        name: 'Brown Shearling',
        imageUrl: brownSherling,
        price: 165
      },
      {
        id: 5,
        name: 'Tan Trench',
        imageUrl: tanTrench,
        price: 185
      }
    ]
  },
  {
    id: 4,
    title: 'Womens',
    routeName: 'womens',
    items: [
      {
        id: 1,
        name: 'Blue Tanktop',
        imageUrl: women1,
        price: 25
      },
      {
        id: 2,
        name: 'Floral Blouse',
        imageUrl: women2,
        price: 20
      },
      {
        id: 3,
        name: 'Floral Dress',
        imageUrl: women3,
        price: 80
      },
      {
        id: 4,
        name: 'Red Dots Dress',
        imageUrl: women4,
        price: 80
      },
      {
        id: 5,
        name: 'Striped Sweater',
        imageUrl: women5,
        price: 45
      },
      {
        id: 6,
        name: 'Yellow Track Suit',
        imageUrl: women6,
        price: 135
      },
      {
        id: 7,
        name: 'White Blouse',
        imageUrl: women7,
        price: 20
      }
    ]
  },
  {
    id: 5,
    title: 'Mens',
    routeName: 'mens',
    items: [
      {
        id: 1,
        name: 'Camo Down Vest',
        imageUrl: men1,
        price: 325
      },
      {
        id: 2,
        name: 'Floral T-shirt',
        imageUrl: men2,
        price: 20
      },
      {
        id: 3,
        name: 'Black & White Longsleeve',
        imageUrl: men3,
        price: 25
      },
      {
        id: 4,
        name: 'Pink T-shirt',
        imageUrl: men4,
        price: 25
      },
      {
        id: 5,
        name: 'Jean Long Sleeve',
        imageUrl: men5,
        price: 40
      },
      {
        id: 6,
        name: 'Burgundy T-shirt',
        imageUrl: men6,
        price: 25
      }
    ]
  }
]
export default SHOP_DATA;