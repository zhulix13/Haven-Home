import { nanoid } from "nanoid";

import chaise from "./../../../assets/shop/products/chaise lounge.png";
import comfy from "./../../../assets/shop/products/comfy sofa.png";
import curve from "./../../../assets/shop/products/curve sofa.png";
import gray from "./../../../assets/shop/products/gray-sofa.png";
import icon from "./../../../assets/shop/products/icon sofa.png";
import lSofa from "./../../../assets/shop/products/l-sofa.png";
import leather from "./../../../assets/shop/products/leather sofa.png";
import lounge from "./../../../assets/shop/products/lounge chair.png";
import patio from "./../../../assets/shop/products/patio table.png";
import restaurant from "./../../../assets/shop/products/restaurant-table.png";
import sleeper from "./../../../assets/shop/products/sleeper sofa.png";
import swing from "./../../../assets/shop/products/swing chair.png";

const products = [
  { id: nanoid(), name: "Icon Sofa Set", image: icon, quantity: 1, price: 2000000 },
  { id: nanoid(), name: "Leather Sofa", image: leather, quantity: 1, price: 506000 },
  { id: nanoid(), name: "L-Shaped Sofa", image: lSofa, quantity: 1, price: 780000 },
  { id: nanoid(), name: "Sleeper Sofa", image: sleeper, quantity: 1, price: 4000000 },
  { id: nanoid(), name: "Swing Chair", image: swing, quantity: 1, price: 256000 },
  { id: nanoid(), name: "Lounge Chair", image: lounge, quantity: 1, price: 160000 },
  { id: nanoid(), name: "Wooden Dining", image: restaurant, quantity: 1, price: 400000 },
  { id: nanoid(), name: "Patio Table", image: patio, quantity: 1, price: 300000 },
  { id: nanoid(), name: "Chaise Lounge", image: chaise, quantity: 1, price: 600000 },
  { id: nanoid(), name: "C-Curve Sofa", image: curve, quantity: 1, price: 700000 },
  { id: nanoid(), name: "L-Shaped Sofa", image: gray, quantity: 1, price: 1200000 },
  { id: nanoid(), name: "Comfy Sofa", image: comfy, quantity: 1, price: 300000 },
];

export default products;
