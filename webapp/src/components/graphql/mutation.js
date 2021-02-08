import {gql} from '@apollo/client'

export const  USER_SIGN_UP = gql`
mutation userSignUp($username: String!, $firstName: String!, $lastName: String!, $password: String!, $telephone: String!,$country:String!,$city:String!,$district:String!){
  userSignUp(username: $username, firstName: $firstName, lastName: $lastName, password: $password, telephone: $telephone, country: $country, city: $city, district: $district) {
    id
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


