import {gql} from '@apollo/client';

export const MAKE_ORDER = gql`

mutation makeOrder($userId:Int!,$productIds:[Int!]!,$quantities:[Int!]!) {
  makeOrder(userId: $userId, productIds: $productIds, quantities: $quantities) {
    id
    firstName
  }
}


`;

export const  USER_SIGN_UP = gql`
mutation userSignUp($username: String!, $firstName: String!, $lastName: String!, $password: String!, $telephone: String!,$country:String!,$city:String!,$district:String!){
  userSignUp(username: $username, firstName: $firstName, lastName: $lastName, password: $password, telephone: $telephone, country: $country, city: $city, district: $district) {
    id
  }
}
`;

export const CREATE_AD = gql`

mutation createProduct($name: String!, $description: String!, $price: Float!, $image: Upload!, $userId: Int!, $categoryId: Int!) {
  createProduct(name: $name, description: $description, price: $price, image: $image, userId: $userId, categoryId: $categoryId) {
    id
  }
}

`;

export const USER_DETAILS = gql`

mutation userDetails($userId:Int!){
  userDetails(userId: $userId) {
    id
    firstName
    lastName
    telephone
    username
    address {
      id
      city
      district
      country
    }
    order {
      id
      orderItems {
        id
        cartItems {
          id
          product {
            id
            name
            imageUrl
            price
          }
          quantity
        }
      }
    }
    cart {
      id
      cartItems {
        id
        product {
          id
          name
          imageUrl
          price
        }
        quantity
        createdAt
      }
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

export const  USER_SIGN_IN = gql`
mutation userSignIn($username: String!, $telephone: String!, $password: String!) {
  userSignIn(username: $username, telephone: $telephone, password: $password) {
    id
    firstName
    username
    telephone
    lastName
    address {
      id
      district
      city
      country
    }
  }
}
`;



export const REMOVE_PRODUCT = gql`

mutation removeProduct($productId:Int!,$userId:Int!){
  removeProduct(productId: $productId, userId: $userId){
   id
    firstName
    lastName
    telephone
    username
    address {
      id
      city
      district
    }
    cart {
      id
      cartItems {
        id
        product {
          id
          name
          imageUrl
          price
        }
        quantity
        createdAt
      }
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

