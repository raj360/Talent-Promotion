import {gql} from '@apollo/client';


export const PRODUCT = gql`

query($productId:Int!){
  product(productId: $productId) {
    id
    name
    description
    price
    imageUrl
    owner {
      id
      firstName
      lastName
      telephone
    }
    category {
      id
      name
    }
  }
}
`;

export const PRODUCTS = gql`

query products{
  products {
    id
    name
    description
    price
    imageUrl
    owner {
      id
      firstName
      lastName
      telephone
    }

  category {
      id
      name
    }

  }
}


`;