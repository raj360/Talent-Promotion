const data = [
  { id: 1, name: "ear rings", price: 15000, image: "earRings.jpg" ,category:{name:'Electronics'}},
  { id: 2, name: "buscate", price: 10000, image: "image3.jpg",category:{name:'Home Furniture'} },
  { id: 3, name: "love Stones", price: 120000, image: "image4.jpg" ,category:{name:'Appliances'}},
  { id: 4, name: "bag", price: 180000, image: "image5.jpg" ,category:{name:'Fashion'}},
  { id: 5, name: "feather", price: 150000, image: "image6.jpg",category:{name:'Beauty'} },
  { id: 6, name: "Top", price: 130000, image: "image7.jpg" ,category:{name:'Health'}},
  { id: 7, name: "light bulb", price: 20000, image: "image8.jpg",category:{name:'Media'} },
  { id: 8, name: "gift val", price: 130000, image: "image9.jpg" ,category:{name:'Blacksmit'}},
  { id: 9, name: "browse bluwish", price: 130000, image: "image10.jpg",category:{name:'Blacksmit'} },
  { id: 10, name: "cloth material", price: 125000, image: "image11.jpg" ,category:{name:'Appliances'}},
  { id: 11, name: "pant", price: 130000, image: "image14.jpg" ,category:{name:'Electronics'}},
  { id: 12, name: "necklase", price: 132000, image: "image14.jpg",category:{name:'Fashion'} },
  { id: 13, name: "necklase", price: 132000, image: "image15.jpg" ,category:{name:'Beauty'}},
  { id: 14, name: "belts", price: 132000, image: "image16.jpg",category:{name:'Health'} },
  { id: 15, name: "gloves", price: 132000, image: "image17.jpg",category:{name:'Media'} },
  { id: 16, name: "shoes", price: 132000, image: "image18.jpg" ,category:{name:'Appliances'}},
  { id: 17, name: "ornaments", price: 132000, image: "ornament.jpg",category:{name:'Electronics'} },
  { id: 18, name: "scaffs", price: 132000, image: "scaffs.jpg",category:{name:'Home Furniture'} },
];


const orders = [
  {
    id: 1,
    name: "ear rings",
    price: 15000,
    image: "earRings.jpg",
    quantity: 2,
  },
  { id: 2, name: "buscate", price: 10000, image: "image3.jpg", quantity: 2 },
  {
    id: 3,
    name: "love Stones",
    price: 120000,
    image: "image4.jpg",
    quantity: 2,
  },
];

export const getAllCrafts = () => {
  return data;
};

export const getAllOrders = () => {
  return orders;
};

export const getSingle = (name) => {
  let craft;
  for (let k of data) {
    if (k.name === name) {
      craft = k;
      break;
    }
  }
  console.log(craft);
  return craft;
};
