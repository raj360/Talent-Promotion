import {gql} from '@apollo/client'

export USER_SIGN_UP = gql`
mutation userSignUp($username: String!, $firstName: String!, $lastName: String!, $password: String!, $telephone: String!) {
  userSignUp(username: $username, firstName: $firstName, lastName: $lastName, password: $password, telephone: $telephone) {
    id
  }
}
`;

