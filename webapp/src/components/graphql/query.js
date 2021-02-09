import {gql} from '@apollo/client';


export const PRODUCT = gql`

query product($productId:Int!) {
  product(productId:$productId) {
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

export const USER = gql`

query user($userId: Int!) {
  user(userId: $userId) {
    id
    firstName
    lastName
    telephone
    username
    address {
      id
    }
  
    products {
      id
      name
      description
      price
      imageUrl
      category {
        name
      }
    }
  }
}


`;

export const CATEGORIES = gql`

  query categories {
  categories {
    id
    name
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

